type Severity = "normal" | "low" | "high" | "critical";

const config: Record<Severity, { label: string; color: string; bg: string; border: string; icon: string }> = {
  normal:   { label: "Normal",          color: "#34d399", bg: "rgba(52,211,153,0.15)",  border: "rgba(52,211,153,0.3)",  icon: "✓" },
  low:      { label: "Below Range",     color: "#fbbf24", bg: "rgba(251,191,36,0.15)",  border: "rgba(251,191,36,0.3)",  icon: "↓" },
  high:     { label: "Above Range",     color: "#fb923c", bg: "rgba(251,146,60,0.15)",  border: "rgba(251,146,60,0.3)",  icon: "↑" },
  critical: { label: "Needs Attention", color: "#ff6b6b", bg: "rgba(255,107,107,0.2)",  border: "rgba(255,107,107,0.4)", icon: "⚠" },
};

export function AbnormalBadge({ severity }: { severity: Severity }) {
  const c = config[severity];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: "3px 10px", borderRadius: 8,
      fontSize: 11, fontWeight: 700,
      color: c.color, background: c.bg,
      border: `1px solid ${c.border}`,
      letterSpacing: "0.2px",
    }}>
      {c.icon} {c.label}
    </span>
  );
}