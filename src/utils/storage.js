// Single source of truth for persistence. If you swap localStorage for a
// database or cloud sync later, this is the only file that needs to change â€”
// keep the same get/set/subscribe shape and the rest of the app won't notice.

const STORAGE_KEY = 'in-office:days:v1'

export function loadAllDays() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveAllDays(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function setDayStatus(dateKey, status) {
  const data = loadAllDays()
  if (status === null) {
    delete data[dateKey]
  } else {
    data[dateKey] = status
  }
  saveAllDays(data)
  return data
}

export function replaceAllDays(data) {
  saveAllDays(data)
  return data
}

export function clearAllDays() {
  localStorage.removeItem(STORAGE_KEY)
  return {}
}
