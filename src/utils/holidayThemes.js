// One accent color per themed holiday. Applied as a translucent cell
// background + solid text/icon color via inline styles in DayCell, since
// these are dynamic per-date lookups rather than static Tailwind classes.

export const HOLIDAY_THEMES = {
  christmas: { label: 'Christmas', color: '#5BA37A' },
  onam: { label: 'Onam', color: '#E0923F' },
  vishu: { label: 'Vishu', color: '#DDBB44' },
  independenceDay: { label: 'Independence Day', color: '#D9822B' },
  republicDay: { label: 'Republic Day', color: '#D9822B' },
  diwali: { label: 'Diwali', color: '#DDA83A' },
  eid: { label: 'Eid', color: '#3FA398' },
  easter: { label: 'Easter', color: '#9575B5' },
  krishna: { label: 'Janmashtami', color: '#5B8AD1' },
  dussehra: { label: 'Vijayadasami', color: '#C2564C' },
  gandhi: { label: 'Gandhi Jayanthi', color: '#ACA599' },
  holi: { label: 'Holi', color: '#D1608F' },
  newYear: { label: "New Year's Day", color: '#D2B34E' },
}
