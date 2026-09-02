import { useRef, useState } from 'react'
import { exportBackup, importBackup } from '../utils/exportImport.js'

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 19h16" />
    </svg>
  )
}

function UploadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21V9" />
      <path d="M7 14l5-5 5 5" />
      <path d="M4 19h16" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16" />
      <path d="M9 7V4h6v3" />
      <path d="M6 7l1 13h10l1-13" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  )
}

export default function BackupControls({ allDays, onImport, onClearAll }) {
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

  function handleClear() {
    const confirmed = window.confirm(
      'Clear all saved data on this device? This cannot be undone. Consider downloading a backup first.',
    )
    if (!confirmed) return
    onClearAll()
    setMessage({ type: 'ok', text: 'Storage cleared.' })
    setTimeout(() => setMessage(null), 4000)
  }

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => exportBackup(allDays)}
        title="Download backup"
        aria-label="Download backup"
        className="rounded-md p-2 text-ink/50 transition-colors hover:bg-ink/10 hover:text-ink"
      >
        <DownloadIcon />
      </button>
      <button
        onClick={() => fileInputRef.current?.click()}
        title="Load backup"
        aria-label="Load backup"
        className="rounded-md p-2 text-ink/50 transition-colors hover:bg-ink/10 hover:text-ink"
      >
        <UploadIcon />
      </button>
      <button
        onClick={handleClear}
        title="Clear saved data"
        aria-label="Clear saved data"
        className="rounded-md p-2 text-ink/50 transition-colors hover:bg-leave/20 hover:text-leave"
      >
        <TrashIcon />
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={handleFileChange}
      />
      {message && (
        <span className={`ml-1 text-xs ${message.type === 'ok' ? 'text-remote' : 'text-leave'}`}>
          {message.text}
        </span>
      )}
    </div>
  )
}
