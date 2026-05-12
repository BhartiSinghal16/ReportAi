import { DropZone } from "../components/upload/DropZone";
import { ReportSummary } from "../components/report/ReportSummary";
import { useReportUpload } from "../hooks/useReportUpload";
import { Loader2, RotateCcw } from "lucide-react";

const features = [
  {
    icon: "🔬",
    title: "Every parameter explained",
    desc: "Plain English breakdown of each value — what it measures and what it means.",
    color: "rgba(99,102,241,0.3)",
  },
  {
    icon: "⚡",
    title: "Abnormal values flagged",
    desc: "Out-of-range results highlighted instantly with context — no guessing.",
    color: "rgba(245,158,11,0.3)",
  },
  {
    icon: "💬",
    title: "Doctor questions ready",
    desc: "Walk in with 5–7 smart questions tailored to your actual results.",
    color: "rgba(16,185,129,0.3)",
  },
  {
    icon: "🔒",
    title: "Private by design",
    desc: "Your file is analyzed instantly and never stored anywhere.",
    color: "rgba(59,130,246,0.3)",
  },
  {
    icon: "🚀",
    title: "Results in 15 seconds",
    desc: "Powered by Groq's ultra-fast AI — faster than reading the report yourself.",
    color: "rgba(139,92,246,0.3)",
  },
  {
    icon: "📋",
    title: "All report types",
    desc: "Blood tests, MRIs, prescriptions, urine reports, lipid panels and more.",
    color: "rgba(236,72,153,0.3)",
  },
];

const steps = [
  {
    num: "01",
    title: "Upload your report",
    desc: "Drop a PDF, JPG, or PNG of any medical document.",
    color: "#ff6b6b",
  },
  {
    num: "02",
    title: "AI reads it",
    desc: "Our AI analyzes every value and reference range instantly.",
    color: "#a855f7",
  },
  {
    num: "03",
    title: "Get your breakdown",
    desc: "Plain-language explanation + smart questions for your doctor.",
    color: "#06b6d4",
  },
];

export function Home() {
  const { state, upload, reset } = useReportUpload();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Background orbs — hidden on mobile via CSS */}
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(255,107,107,0.25), transparent)",
          top: -100,
          right: -100,
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.3), transparent)",
          top: 200,
          left: -150,
          animation: "float2 10s ease-in-out infinite",
        }}
      />
      <div
        className="orb"
        style={{
          width: 350,
          height: 350,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.2), transparent)",
          bottom: 100,
          right: 100,
          animation: "float3 12s ease-in-out infinite",
        }}
      />

      {/* Nav */}
      <nav
        className="glass"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: "0 1rem",
          height: 56,
          display: "flex",
          alignItems: "center",
          borderLeft: "none",
          borderRight: "none",
          borderTop: "none",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 32,
                height: 32,
                background: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
                borderRadius: 9,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                flexShrink: 0,
              }}
            >
              🩺
            </div>
            <span
              style={{
                fontWeight: 800,
                fontSize: 16,
                color: "#fff",
                letterSpacing: "-0.3px",
              }}
            >
              ReportAI
            </span>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
            <span
              style={{
                fontSize: 11,
                color: "#6ee7b7",
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.3)",
                borderRadius: 20,
                padding: "3px 10px",
                fontWeight: 600,
              }}
            >
              ✓ Free
            </span>
            <span
              style={{
                fontSize: 11,
                color: "#93c5fd",
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.3)",
                borderRadius: 20,
                padding: "3px 10px",
                fontWeight: 600,
              }}
            >
              🔒 Private
            </span>
          </div>
        </div>
      </nav>

      <div style={{ position: "relative", zIndex: 1 }}>
        {state.status === "idle" && (
          <>
            {/* Hero */}
            <section
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "3rem 1.25rem 2.5rem",
                textAlign: "center",
              }}
            >
              <div
                className="fade-up"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,107,107,0.15)",
                  border: "1px solid rgba(255,107,107,0.3)",
                  color: "#ff6b6b",
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "5px 14px",
                  borderRadius: 20,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "#ff6b6b",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
                AI-powered medical report explainer
              </div>

              <h1
                className="fade-up-1"
                style={{
                  fontSize: "clamp(1.9rem, 8vw, 3.8rem)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: 16,
                  letterSpacing: "-1px",
                }}
              >
                Understand your
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #ff6b6b 0%, #a855f7 50%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  medical report
                </span>
              </h1>

              <p
                className="fade-up-2"
                style={{
                  fontSize: "clamp(14px, 4vw, 18px)",
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: 480,
                  margin: "0 auto 2rem",
                  lineHeight: 1.7,
                }}
              >
                Upload any blood test, MRI summary, or prescription. Get a clear
                breakdown — not a diagnosis, just clarity.
              </p>

              {/* Format pills — wrap nicely on mobile */}
              <div
                className="fade-up-3"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 36,
                }}
              >
                {[
                  "📄 PDF",
                  "🖼️ JPG",
                  "📸 PNG",
                  "🩸 Blood tests",
                  "💊 Prescriptions",
                ].map((f) => (
                  <span
                    key={f}
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.7)",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 20,
                      padding: "4px 12px",
                      fontWeight: 500,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Upload — full width on mobile */}
              <div
                className="fade-up-4"
                style={{ maxWidth: 600, margin: "0 auto" }}
              >
                <DropZone onFile={upload} />
              </div>

              <p
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.3)",
                  marginTop: 12,
                }}
              >
                Never stored · ~15 seconds · Not a diagnosis
              </p>
            </section>

            {/* Stats — 2x2 on mobile */}
            <section
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "0 1.25rem 3rem",
              }}
            >
              <div
                className="glass"
                style={{ borderRadius: 20, padding: "1.25rem 1rem" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1rem",
                  }}
                >
                  {[
                    { val: "~15s", label: "Analysis time" },
                    { val: "10+", label: "Report types" },
                    { val: "100%", label: "Private" },
                    { val: "Free", label: "No account" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{ textAlign: "center", padding: "0.5rem" }}
                    >
                      <div
                        style={{
                          fontSize: 22,
                          fontWeight: 800,
                          color: "#fff",
                          letterSpacing: "-0.5px",
                        }}
                      >
                        {s.val}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "rgba(255,255,255,0.4)",
                          marginTop: 2,
                          fontWeight: 500,
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Features — 1 col on mobile, 3 on desktop */}
            <section
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "0 1.25rem 4rem",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <h2
                  style={{
                    fontSize: "clamp(22px, 5vw, 32px)",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.5px",
                    marginBottom: 10,
                  }}
                >
                  Everything you need
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    maxWidth: 360,
                    margin: "0 auto",
                  }}
                >
                  Fast, private, plain English.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 14,
                }}
              >
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="glass-card"
                    style={{ padding: "1.5rem" }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        background: f.color,
                        borderRadius: 13,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        marginBottom: 14,
                      }}
                    >
                      {f.icon}
                    </div>
                    <h3
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                        fontSize: 14,
                        marginBottom: 6,
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* How it works */}
            <section
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "0 1.25rem 4rem",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <h2
                  style={{
                    fontSize: "clamp(22px, 5vw, 32px)",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.5px",
                    marginBottom: 10,
                  }}
                >
                  How it works
                </h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
                  Three steps. No account. No waiting.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 14,
                }}
              >
                {steps.map((s) => (
                  <div
                    key={s.num}
                    className="glass-card"
                    style={{ padding: "1.5rem", textAlign: "center" }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        background: s.color,
                        borderRadius: 14,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 14px",
                        color: "white",
                        fontWeight: 800,
                        fontSize: 15,
                        boxShadow: `0 8px 20px ${s.color}55`,
                      }}
                    >
                      {s.num}
                    </div>
                    <h3
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                        fontSize: 14,
                        marginBottom: 6,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "0 1.25rem 5rem",
              }}
            >
              <div
                className="glass"
                style={{
                  borderRadius: 24,
                  padding: "2.5rem 1.5rem",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(255,107,107,0.1), rgba(168,85,247,0.1), rgba(6,182,212,0.1))",
                    pointerEvents: "none",
                  }}
                />
                <h2
                  style={{
                    fontSize: "clamp(20px, 5vw, 30px)",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: 10,
                    letterSpacing: "-0.5px",
                    position: "relative",
                  }}
                >
                  Ready to understand your report?
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: 24,
                    position: "relative",
                  }}
                >
                  Upload now — free, private, instant.
                </p>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="glow-btn"
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 14,
                    padding: "13px 32px",
                    borderRadius: 13,
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                    width: "100%",
                    maxWidth: 280,
                  }}
                >
                  Upload your report →
                </button>
              </div>
            </section>
          </>
        )}

        {/* Loading */}
        {state.status === "uploading" && (
          <div style={{ textAlign: "center", padding: "6rem 1.5rem" }}>
            <div
              className="glass"
              style={{
                width: 80,
                height: 80,
                borderRadius: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <Loader2
                size={36}
                color="#ff6b6b"
                style={{ animation: "spin 1s linear infinite" }}
              />
            </div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#fff",
                marginBottom: 8,
                letterSpacing: "-0.5px",
              }}
            >
              Analyzing your report…
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14 }}>
              Usually takes 10–20 seconds
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                marginTop: 24,
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 9,
                    height: 9,
                    background: "#ff6b6b",
                    borderRadius: "50%",
                    animation: `bounce-dot 1.4s ${i * 0.16}s infinite ease-in-out`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Error */}
        {state.status === "error" && (
          <div style={{ textAlign: "center", padding: "5rem 1.5rem" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#fff",
                marginBottom: 8,
              }}
            >
              Something went wrong
            </h2>
            <p style={{ color: "#ff6b6b", fontSize: 14, marginBottom: 28 }}>
              {state.message}
            </p>
            <button
              onClick={reset}
              className="glow-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 28px",
                color: "white",
                borderRadius: 13,
                fontSize: 14,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              <RotateCcw size={15} /> Try Again
            </button>
          </div>
        )}

        {/* Results */}
        {state.status === "success" && (
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              padding: "2rem 1.25rem 5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 24,
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "clamp(18px, 5vw, 24px)",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Your report breakdown
                </h2>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.35)",
                    marginTop: 3,
                  }}
                >
                  Scroll to see all values and doctor questions
                </p>
              </div>
              <button
                onClick={reset}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 16px",
                  color: "rgba(255,255,255,0.7)",
                  borderRadius: 11,
                  fontSize: 13,
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.15)",
                  cursor: "pointer",
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <RotateCcw size={13} /> New report
              </button>
            </div>
            <ReportSummary analysis={state.analysis} />
          </div>
        )}
      </div>

      {/* Footer */}
      {/* Footer */}
      <footer
        className="glass"
        style={{
          padding: "1.5rem 2rem",
          textAlign: "center",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "none",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            fontWeight: 500,
            marginBottom: 4,
          }}
        >
          ReportAI · For informational purposes only · Not a substitute for
          professional medical advice
        </p>
        <p
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.2)",
            fontWeight: 400,
          }}
        >
          Built by{" "}
          <span style={{ color: "rgba(255,107,107,0.7)", fontWeight: 600 }}>
            Bharti Singhal
          </span>{" "}
          · Powered by Groq AI
        </p>
      </footer>
    </div>
  );
}
