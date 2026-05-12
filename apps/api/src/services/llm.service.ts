import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { SYSTEM_PROMPT, buildPrompt } from "../prompts/medical.prompt";
import { ReportAnalysis } from "../types/report.types";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY!,
  model: "llama-3.3-70b-versatile",
  temperature: 0.1,
  maxTokens: 4096,
});

export async function analyzeWithGroq(text: string): Promise<ReportAnalysis> {
  const response = await model.invoke([
    new SystemMessage(SYSTEM_PROMPT),
    new HumanMessage(buildPrompt(text)),
  ]);

  const content = response.content as string;

  const cleaned = content
    .replace(/```json\n?/g, "")
    .replace(/```\n?/g, "")
    .trim();

  let parsed: ReportAnalysis;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    throw new Error("AI returned invalid response. Please try again.");
  }

  // Hardcode disclaimer — NEVER trust the LLM for safety-critical text
  parsed.disclaimer =
    "This explanation is for informational purposes only. It is not a medical diagnosis or professional medical advice. Always consult your healthcare provider before making any health decisions.";

  parsed.analyzedAt = new Date().toISOString();
  parsed.abnormalCount = parsed.parameters.filter(
    (p) => p.severity !== "normal"
  ).length;

  return parsed;
}