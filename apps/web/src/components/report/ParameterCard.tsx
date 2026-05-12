import { AbnormalBadge } from "./AbnormalBadge";

type Severity = "normal" | "low" | "high" | "critical";

interface ReportParameter {
  name: string; value: string; unit: string;
  referenceRange: string; severity: Severity;
  plainExplanation: string; clinicalContext: string;
  safetyNote?: string;
}

const severityStyles: Record<Severity, { border: string; bg: string; glow: string }> = {
  normal:   { border: "rgba(52,211,153,0.2)",  bg: "rgba(52,211,153,0.06)",  glow: "none" },
  low:      { border: "rgba(251,191,36,0.3)",  bg: "rgba(251,191,36,0.08)",  glow: "none" },
  high:     { border: "rgba(251,146,60,0.3)",  bg: "rgba(251,146,60,0.08)",  glow: "none" },
  critical: { border: "rgba(255,107,107,0.4)", bg: "rgba(255,107,107,0.1)",  glow: "0 0 20px rgba(255,107,107,0.15)" },
};

const severityTextColor: Record<Severity, string> = {
  normal: "rgba(52,211,153,0.9)",
  low: "rgba(251,191,36,0.9)",
  high: "rgba(251,146,60,0.9)",
  critical: "#ff6b6b",
};

export function ParameterCard({ param }: { param: ReportParameter }) {
  const s = severityStyles[param.severity];

  return (
    <div style={{
      background: s.bg,
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      border: `1px solid ${s.border}`,
      borderRadius: 16,
      padding: "1.25rem",
      boxShadow: s.glow,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
        <div>
          <h3 style={{ fontWeight: 700, color: "#fff", fontSize: 15, marginBottom: 3 }}>{param.name}</h3>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Ref: {param.referenceRange}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, flexShrink: 0 }}>
          <span style={{ fontFamily: "monospace", fontWeight: 800, color: "#fff", fontSize: 18 }}>
            {param.value}
            {param.unit && <span style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: 4 }}>{param.unit}</span>}
          </span>
          <AbnormalBadge severity={param.severity} />
        </div>
      </div>

      <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>
        {param.plainExplanation}
      </p>

      {param.clinicalContext && (
        <p style={{ fontSize: 13, marginTop: 8, color: severityTextColor[param.severity], lineHeight: 1.6 }}>
          {param.clinicalContext}
        </p>
      )}

      {param.safetyNote && (
        <div style={{ marginTop: 12, background: "rgba(255,107,107,0.15)", border: "1px solid rgba(255,107,107,0.3)", borderRadius: 10, padding: "10px 12px", display: "flex", gap: 8, alignItems: "flex-start" }}>
          <span style={{ flexShrink: 0 }}>🚨</span>
          <p style={{ fontSize: 13, color: "#ff6b6b", fontWeight: 600 }}>{param.safetyNote}</p>
        </div>
      )}
    </div>
  );
}