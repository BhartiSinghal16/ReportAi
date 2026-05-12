import { Router, Request, Response, NextFunction } from "express";
import { uploadMiddleware } from "../middleware/upload.middleware";
import { extractText } from "../services/pdf.service";
import { analyzeWithGroq } from "../services/llm.service";

const router = Router();

router.post(
  "/upload",
  uploadMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
      }

      console.log(`📄 File received: ${req.file.originalname} (${req.file.mimetype}, ${req.file.size} bytes)`);

      const doc = await extractText(req.file.buffer, req.file.mimetype);
      console.log(`✅ Text extracted: ${doc.text.length} chars, ${doc.pageCount} pages`);
      console.log(`📝 First 200 chars: ${doc.text.slice(0, 200)}`);

      if (doc.text.length < 20) {
        return res.status(422).json({
          error: "Could not extract text from this file.",
        });
      }

      console.log(`🤖 Sending to Groq...`);
      const analysis = await analyzeWithGroq(doc.text);
      console.log(`✅ Analysis complete: ${analysis.parameters.length} parameters`);

      return res.status(200).json({
        success: true,
        pageCount: doc.pageCount,
        truncated: doc.truncated,
        analysis,
      });
    } catch (err: unknown) {
      console.error("❌ Upload error:", err);
      next(err);
    }
  }
);

export default router;