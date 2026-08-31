import { useRef, useState } from 'react'
import { exportBackup, importBackup } from '../utils/exportImport.js'

export default function BackupControls({ allDays, onImport }) {
  const fileInputRef = useRef(null)
  const [message, setMessage] = useState(null)

  async function handleFileChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const data = await importBackup(file)
      onImport(data)
      setMessage({ type: 'ok', text: 'Backup loaded.' })
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    } finally {
      e.target.value = ''
      setTimeout(() => setMessage(null), 4000)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => exportBackup(allDays)}
        className="rounded-md border border-ink/15 px-3 py-1.5 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5"
      >
        Download backup
      </button>
      <button
        onClick={() => fileInputRef.current?.click()}
        className="rounded-md border border-ink/15 px-3 py-1.5 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5"
      >
        Load backup
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={handleFileChange}
      />
      {message && (
        <span className={`text-sm ${message.type === 'ok' ? 'text-remote' : 'text-leave'}`}>
          {message.text}
        </span>
      )}
    </div>
  )
}
