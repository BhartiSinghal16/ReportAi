import { useState } from "react";
import { uploadReport } from "../lib/api";
import type { ReportAnalysis } from "../lib/api";

type State =
  | { status: "idle" }
  | { status: "uploading" }
  | { status: "success"; analysis: ReportAnalysis; pageCount: number }
  | { status: "error"; message: string };

export function useReportUpload() {
  const [state, setState] = useState<State>({ status: "idle" });

  const upload = async (file: File) => {
    setState({ status: "uploading" });
    try {
      const result = await uploadReport(file);
      setState({
        status: "success",
        analysis: result.analysis,
        pageCount: result.pageCount,
      });
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } };
      const message =
        error?.response?.data?.error || "Upload failed. Please try again.";
      setState({ status: "error", message });
    }
  };

  const reset = () => setState({ status: "idle" });

  return { state, upload, reset };
}