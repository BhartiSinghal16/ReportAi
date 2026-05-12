import { ParameterCard } from "./ParameterCard";
import { DoctorQuestions } from "./DoctorQuestions";

type Severity = "normal" | "low" | "high" | "critical";

interface ReportParameter {
  name: string; value: string; unit: string;
  referenceRange: string; severity: Severity;
  plainExplanation: string; clinicalContext: string;
  safetyNote?: string;
}

interface ReportAnalysis {
  reportType: string; patientContext: string; summary: string;
  parameters: ReportParameter[]; abnormalCount: number;
  doctorQuestions: string[]; disclaimer: string; analyzedAt: string;
}

export function ReportSummary({ analysis }: { analysis: ReportAnalysis }) {
  const abnormal = analysis.parameters.filter((p) => p.severity !== "normal");
  const normal = analysis.parameters.filter((p) => p.severity === "normal");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Disclaimer */}
      <div style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.25)", borderRadius: 16, padding: "1rem 1.25rem", display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{analysis.disclaimer}</p>
      </div>

      {/* Summary */}
      <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.08)", padding: "2px 10px", borderRadius: 8 }}>{analysis.reportType}</span>
          {analysis.abnormalCount > 0 && (
            <span style={{ fontSize: 13, color: "#ff6b6b", background: "rgba(255,107,107,0.15)", padding: "2px 10px", borderRadius: 8, fontWeight: 600 }}>
              {analysis.abnormalCount} abnormal value{analysis.abnormalCount !== 1 ? "s" : ""}
            </span>
          )}
        </div>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{analysis.summary}</p>
      </div>

      {/* Abnormal */}
      {abnormal.length > 0 && (
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#ff6b6b", marginBottom: 12 }}>
            Values outside normal range
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {abnormal.map((p) => <ParameterCard key={p.name} param={p} />)}
          </div>
        </div>
      )}

      {/* Normal */}
      {normal.length > 0 && (
        <div>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 12 }}>
            Normal values ({normal.length})
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {normal.map((p) => <ParameterCard key={p.name} param={p} />)}
          </div>
        </div>
      )}

      <DoctorQuestions questions={analysis.doctorQuestions} />
    </div>
  );
}