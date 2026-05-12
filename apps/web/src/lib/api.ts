import axios from "axios";

export type Severity = "normal" | "low" | "high" | "critical";

export interface ReportParameter {
  name: string;
  value: string;
  unit: string;
  referenceRange: string;
  severity: Severity;
  plainExplanation: string;
  clinicalContext: string;
  safetyNote?: string;
}

export interface ReportAnalysis {
  reportType: string;
  patientContext: string;
  summary: string;
  parameters: ReportParameter[];
  abnormalCount: number;
  doctorQuestions: string[];
  disclaimer: string;
  analyzedAt: string;
}

export interface UploadResponse {
  success: boolean;
  pageCount: number;
  truncated: boolean;
  analysis: ReportAnalysis;
}

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 60_000,
});

export async function uploadReport(file: File): Promise<UploadResponse> {
  const form = new FormData();
  form.append("report", file);

  const { data } = await client.post<UploadResponse>("/upload", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
}