export type Severity = "normal" | "low" | "high" | "critical";

export interface ReportParameter {
  name: string;
  value: string;
  unit: string;
  referenceRange: string;
  severity: Severity;
  plainExplanation: string;
  clinicalContext: string;
  safetyNote?: string;
}

export interface ReportAnalysis {
  reportType: string;
  patientContext: string;
  summary: string;
  parameters: ReportParameter[];
  abnormalCount: number;
  doctorQuestions: string[];
  disclaimer: string;
  analyzedAt: string;
}

export interface UploadResponse {
  success: boolean;
  pageCount: number;
  truncated: boolean;
  analysis: ReportAnalysis;
}