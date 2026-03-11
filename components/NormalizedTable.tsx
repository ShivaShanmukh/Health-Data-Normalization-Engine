"use client"

import { Biomarker } from "../types/biomarker"

export default function NormalizedTable({
  data,
  onUpdate
}: {
  data: Biomarker[]
  onUpdate: (index: number, value: number) => void
}) {
  return (
    <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h2 className="text-lg font-semibold mb-4">
        Normalized Health Data
      </h2>

      <table className="w-full text-sm">

        <thead>
          <tr className="text-zinc-400 border-b border-zinc-700">
            <th className="text-left py-2">Biomarker</th>
            <th className="text-left">Value</th>
            <th className="text-left">Unit</th>
            <th className="text-left">Confidence</th>
          </tr>
        </thead>

        <tbody>
          {data.map((b, i) => (
            <tr key={i} className="border-b border-zinc-800">

              <td className="py-2">{b.name}</td>

              <td>
                <input
                  type="number"
                  value={b.value}
                  onChange={(e) =>
                    onUpdate(i, Number(e.target.value))
                  }
                  className="bg-black border border-zinc-700 px-2 py-1 rounded w-20"
                />
              </td>

              <td>{b.unit}</td>

              <td>
                {b.confidence === "high" && (
                  <span className="text-green-400">✓ High</span>
                )}

                {b.confidence === "medium" && (
                  <span className="text-yellow-400">⚠ Medium</span>
                )}

                {b.confidence === "low" && (
                  <span className="text-red-400">⚠ Low</span>
                )}
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}