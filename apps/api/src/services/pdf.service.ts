import Tesseract from "tesseract.js";

export interface ExtractedDoc {
  text: string;
  pageCount: number;
  truncated: boolean;
  fileType: string;
}

const MAX_CHARS = 12_000;

export async function extractText(
  buffer: Buffer,
  mimetype: string
): Promise<ExtractedDoc> {
  
  // PDF handling
  if (mimetype === "application/pdf") {
    try {
      const pdfParse = require("pdf-parse");
      const data = await pdfParse(buffer, { max: 5 });
      const raw = data.text
        .replace(/\x00/g, "")
        .replace(/\s{3,}/g, " ")
        .trim();

      console.log(`📄 PDF: ${raw.length} chars from ${data.numpages} pages`);

      const truncated = raw.length > MAX_CHARS;
      return {
        text: truncated ? raw.slice(0, MAX_CHARS) : raw,
        pageCount: data.numpages,
        truncated,
        fileType: "pdf",
      };
    } catch (err) {
      console.error("PDF parse error:", err);
      throw new Error("Could not read this PDF. Try a text-based PDF.");
    }
  }

  // Image handling — OCR with Tesseract
  if (
    mimetype === "image/jpeg" ||
    mimetype === "image/png" ||
    mimetype === "image/webp"
  ) {
    try {
      console.log(`🖼️ Running OCR on image...`);

      const { data: { text } } = await Tesseract.recognize(buffer, "eng", {
        logger: (m) => {
          if (m.status === "recognizing text") {
            process.stdout.write(`\r🔍 OCR progress: ${Math.round(m.progress * 100)}%`);
          }
        },
      });

      const raw = text.replace(/\s{3,}/g, " ").trim();
      console.log(`\n✅ OCR complete: ${raw.length} chars extracted`);

      if (raw.length < 30) {
        throw new Error("Could not read text from this image. Try a clearer photo.");
      }

      const truncated = raw.length > MAX_CHARS;
      return {
        text: truncated ? raw.slice(0, MAX_CHARS) : raw,
        pageCount: 1,
        truncated,
        fileType: "image",
      };
    } catch (err: any) {
      console.error("OCR error:", err);
      throw new Error(
        err.message || "Could not extract text from this image."
      );
    }
  }

  throw new Error("Unsupported file type.");
}