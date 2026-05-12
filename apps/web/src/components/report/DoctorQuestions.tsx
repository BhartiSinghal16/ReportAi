export function DoctorQuestions({ questions }: { questions: string[] }) {
  return (
    <div style={{
      background: "rgba(99,102,241,0.1)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      border: "1px solid rgba(99,102,241,0.25)",
      borderRadius: 20,
      padding: "1.75rem",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <div style={{ width: 36, height: 36, background: "rgba(99,102,241,0.25)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
          💬
        </div>
        <h2 style={{ fontWeight: 700, color: "#fff", fontSize: 16 }}>
          Questions to ask your doctor
        </h2>
      </div>
      <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {questions.map((q, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <span style={{
              width: 24, height: 24, borderRadius: 8,
              background: "rgba(99,102,241,0.3)",
              border: "1px solid rgba(99,102,241,0.4)",
              color: "#a5b4fc", fontSize: 11, fontWeight: 800,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, marginTop: 1,
            }}>
              {i + 1}
            </span>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}>{q}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}