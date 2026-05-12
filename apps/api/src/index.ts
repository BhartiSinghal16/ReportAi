import express from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";
import uploadRouter from "./routes/upload.route";
import { errorHandler } from "./middleware/error.middleware";

const app = express();
const PORT = process.env.PORT || 3001;

// Allow ALL origins — fix for production CORS
app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json());

app.get("/health", (_req: any, res: any) => {
  res.json({ status: "ok", project: "ReportAI" });
});

app.use("/api", uploadRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ ReportAI API running at http://localhost:${PORT}`);
});