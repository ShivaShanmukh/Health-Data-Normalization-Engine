"use client"

import { useState } from "react"
import RawInput from "../components/RawInput"
import NormalizedTable from "../components/NormalizedTable"
import { normalizeData } from "../lib/normalize"
import { Biomarker } from "../types/biomarker"

export default function Page() {

  const [data, setData] = useState<Biomarker[]>([])
  const [rawData, setRawData] = useState<any>(null)

  function handleParse(raw: any) {
    setRawData(raw)
    const normalized = normalizeData(raw)
    setData(normalized)
  }

  function handleUpdate(index: number, value: number) {
    const updated = [...data]
    updated[index].value = value
    setData(updated)
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 md:py-24">

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
          <div className="w-[900px] h-[900px] bg-purple-500/20 blur-[160px] rounded-full mt-[-200px]"></div>
        </div>

        <section className="relative z-10 text-center mb-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text">
              Health Data Normalization Engine
            </h1>

            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
              Transform fragmented health data from wearables, labs and sensors
              into a unified schema developers and AI systems can build on.
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="#playground"
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
              >
                Try Playground
              </a>
              <button className="px-6 py-3 border border-zinc-700 rounded-lg hover:border-zinc-500 transition">
                View API Schema
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Feature Cards */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Unified Health Schema</h3>
            <p className="text-zinc-400 text-sm">
              Map dozens of vendor formats into one consistent data model with standardized naming and units.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Confidence Detection</h3>
            <p className="text-zinc-400 text-sm">
              Every normalized field includes a confidence score so your application knows how much to trust the data.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Developer Friendly Data</h3>
            <p className="text-zinc-400 text-sm">
              Clean JSON output ready for dashboards, AI pipelines, or any downstream integration.
            </p>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800 my-16"></div>

      {/* Playground */}
      <div id="playground" className="max-w-4xl mx-auto">

        <RawInput onParse={handleParse} />

        {rawData && (
          <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-3">
              Raw Data Received
            </h2>

            <pre className="text-sm bg-black p-4 rounded overflow-x-auto">
              {JSON.stringify(rawData, null, 2)}
            </pre>
          </div>
        )}

        {data.length > 0 && (
          <NormalizedTable
            data={data}
            onUpdate={handleUpdate}
          />
        )}

      </div>

    </main>
  )
}