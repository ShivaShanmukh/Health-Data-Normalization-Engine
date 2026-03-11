"use client"

import { useState } from "react"

export default function RawInput({ onParse }: { onParse: (data: any) => void }) {

  const [text, setText] = useState(`{
  "hb": 12.4,
  "vit_d": 28,
  "gluc": 90
}`)

  function handleParse() {
    try {
      const json = JSON.parse(text)
      onParse(json)
    } catch {
      alert("Invalid JSON")
    }
  }

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
      
      <h2 className="text-lg font-semibold mb-3">
        Raw Health Data
      </h2>

      <textarea
        className="w-full h-40 bg-black border border-zinc-700 rounded p-3 text-sm font-mono"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleParse}
        className="mt-4 px-4 py-2 bg-white text-black rounded font-medium hover:bg-gray-200"
      >
        Normalize Data
      </button>

    </div>
  )
}
