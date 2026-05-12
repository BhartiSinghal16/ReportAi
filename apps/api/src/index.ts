import express from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";
import uploadRouter from "./routes/upload.route";
import { errorHandler } from "./middleware/error.middleware";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.startsWith("http://localhost")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", project: "ReportAI" });
});

app.use("/api", uploadRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ ReportAI API running at http://localhost:${PORT}`);
});