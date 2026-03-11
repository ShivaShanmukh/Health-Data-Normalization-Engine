export type Biomarker = {
    name: string
    value: number
    unit: string
    confidence: "high" | "medium" | "low"
  }