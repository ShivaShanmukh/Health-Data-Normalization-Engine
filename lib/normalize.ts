import { Biomarker } from "../types/biomarker"

const mapping: Record<string, { name: string; unit: string }> = {
  hb: { name: "Hemoglobin", unit: "g/dL" },
  vit_d: { name: "Vitamin D", unit: "ng/mL" },
  gluc: { name: "Glucose", unit: "mg/dL" }
}

export function normalizeData(data: any): Biomarker[] {
  return Object.entries(data).map(([key, value]) => {
    const map = mapping[key]

    if (!map) {
      return {
        name: key,
        value: Number(value),
        unit: "unknown",
        confidence: "low"
      }
    }

    return {
      name: map.name,
      value: Number(value),
      unit: map.unit,
      confidence: "high"
    }
  })
}
