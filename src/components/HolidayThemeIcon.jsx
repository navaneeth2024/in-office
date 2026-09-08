const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.75',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function TreeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 3l3 5H9z" />
      <path d="M12 8l3.5 5H8.5z" />
      <path d="M12 13l4 5H8z" />
      <path d="M12 18v3" />
    </svg>
  )
}

function FlowerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 3a3 3 0 0 1 0 6 3 3 0 0 1 0-6zM12 15a3 3 0 0 1 0 6 3 3 0 0 1 0-6zM3 12a3 3 0 0 1 6 0 3 3 0 0 1-6 0zM15 12a3 3 0 0 1 6 0 3 3 0 0 1-6 0z" />
    </svg>
  )
}

function FlagIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M6 3v18" />
      <path d="M6 4h12l-3 4 3 4H6" />
    </svg>
  )
}

function ChakraIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7" />
    </svg>
  )
}

function DiyaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4 15c2 3 6 4 8 4s6-1 8-4" />
      <path d="M12 15V9" />
      <path d="M12 9c-1.5-1-1.5-3 0-4 1.5 1 1.5 3 0 4z" />
    </svg>
  )
}

function CrescentStarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M15 4a7 7 0 1 0 0 14 8 8 0 0 1 0-14z" />
      <path d="M18 3l.6 1.4L20 5l-1.4.6L18 7l-.6-1.4L16 5l1.4-.6L18 3z" />
    </svg>
  )
}

function CrossIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 3v18M6 9h12" />
    </svg>
  )
}

function FluteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4 20L20 4" />
      <circle cx="8" cy="16" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="11" cy="13" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="14" cy="10" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function BowArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M6 3a13 13 0 0 1 0 18" />
      <path d="M4 12h15" />
      <path d="M16 9l3 3-3 3" />
    </svg>
  )
}

function CharkhaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="11" cy="12" r="7" />
      <path d="M11 5v14M4 12h14" />
      <path d="M18 12h3" />
    </svg>
  )
}

function HoliSplashIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="7" cy="8" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="6" r="1.3" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="17" cy="13" r="1.6" fill="currentColor" stroke="none" opacity="0.85" />
      <circle cx="9" cy="17" r="1.3" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="13" cy="12" r="1" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  )
}

function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
    </svg>
  )
}

const THEME_ICONS = {
  christmas: TreeIcon,
  onam: FlowerIcon,
  vishu: FlowerIcon,
  independenceDay: FlagIcon,
  republicDay: ChakraIcon,
  diwali: DiyaIcon,
  eid: CrescentStarIcon,
  easter: CrossIcon,
  krishna: FluteIcon,
  dussehra: BowArrowIcon,
  gandhi: CharkhaIcon,
  holi: HoliSplashIcon,
  newYear: SparkleIcon,
}

export default function HolidayThemeIcon({ themeKey, className = 'h-3.5 w-3.5', style }) {
  const Icon = THEME_ICONS[themeKey]
  if (!Icon) return null
  return <Icon className={className} style={style} aria-hidden="true" />
}
