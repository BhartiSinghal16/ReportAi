import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(`[ERROR] ${err.message}`);

  if (err.message.includes("Only PDF")) {
    return res.status(415).json({ error: err.message });
  }
  if (err.message.includes("File too large")) {
    return res.status(413).json({ error: "File exceeds 10MB limit." });
  }

  return res.status(500).json({
    error: "Something went wrong. Please try again.",
  });
}