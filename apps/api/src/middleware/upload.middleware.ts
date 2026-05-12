import multer, { FileFilterCallback } from "multer";
import { Request } from "express";

const ALLOWED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
];

export const uploadMiddleware = multer({
  storage: multer.memoryStorage(),
  fileFilter: (
    _req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) => {
    if (ALLOWED_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, JPG, PNG, and WEBP files are supported."));
    }
  },
  limits: { fileSize: 10 * 1024 * 1024 },
}).single("report");