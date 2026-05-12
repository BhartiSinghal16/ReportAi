import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  onFile: (file: File) => void;
  disabled?: boolean;
}

const ACCEPTED = {
  "application/pdf": [".pdf"],
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
  "image/webp": [".webp"],
};

export function DropZone({ onFile, disabled }: Props) {
  const [hovered, setHovered] = useState(false);

  const onDrop = useCallback(
    (accepted: File[]) => { if (accepted[0]) onFile(accepted[0]); },
    [onFile]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({ onDrop, accept: ACCEPTED, maxFiles: 1, maxSize: 10 * 1024 * 1024, disabled });

  const hasError = fileRejections.length > 0;
  const isActive = isDragActive || hovered;

  return (
    <div
      {...getRootProps()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isDragActive
          ? "rgba(255,107,107,0.12)"
          : "rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `2px dashed ${isDragActive ? "#ff6b6b" : hasError ? "#ef4444" : isActive ? "rgba(255,107,107,0.5)" : "rgba(255,255,255,0.15)"}`,
        borderRadius: 24,
        padding: "3.5rem 2rem",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.25s ease",
        boxShadow: isActive ? "0 0 0 6px rgba(255,107,107,0.1), inset 0 0 60px rgba(255,107,107,0.05)" : "none",
      }}
    >
      <input {...getInputProps()} />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <div style={{
          width: 80, height: 80,
          background: isDragActive ? "rgba(255,107,107,0.2)" : "rgba(255,255,255,0.08)",
          borderRadius: 22,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 38,
          transition: "all 0.3s",
          transform: isDragActive ? "scale(1.15) rotate(-5deg)" : "scale(1)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}>
          {isDragActive ? "📂" : hasError ? "❌" : "📋"}
        </div>

        <div>
          <p style={{ fontSize: 19, fontWeight: 700, color: "#fff", marginBottom: 6, letterSpacing: "-0.3px" }}>
            {isDragActive ? "Release to upload!" : "Drop your medical report"}
          </p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)" }}>
            Drag & drop or click to browse · Max 10MB
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { label: "PDF", color: "#ff6b6b", bg: "rgba(255,107,107,0.15)" },
            { label: "JPG", color: "#fbbf24", bg: "rgba(251,191,36,0.15)" },
            { label: "PNG", color: "#34d399", bg: "rgba(52,211,153,0.15)" },
            { label: "WEBP", color: "#a78bfa", bg: "rgba(167,139,250,0.15)" },
          ].map((f) => (
            <span key={f.label} style={{
              fontSize: 12, fontWeight: 700,
              color: f.color, background: f.bg,
              padding: "4px 12px", borderRadius: 8,
              border: `1px solid ${f.color}33`,
              letterSpacing: "0.3px",
            }}>
              {f.label}
            </span>
          ))}
        </div>

        {hasError && (
          <p style={{ color: "#ff6b6b", fontSize: 13, fontWeight: 600 }}>
            {fileRejections[0]?.errors[0]?.message || "File not supported"}
          </p>
        )}

        <button
          type="button"
          style={{
            background: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
            color: "white",
            padding: "13px 40px",
            borderRadius: 14,
            fontSize: 15,
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 28px rgba(255,107,107,0.4)",
            letterSpacing: "-0.2px",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 36px rgba(255,107,107,0.55)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(255,107,107,0.4)";
          }}
        >
          Browse Files
        </button>
      </div>
    </div>
  );
}