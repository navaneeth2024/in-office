// Two-stop gradient + accent per themed holiday, used for the day-cell
// background, border, and date-number/label color. `color` is kept for
// any legacy single-color usage.

export const HOLIDAY_THEMES = {
  christmas: { label: 'Christmas', bgFrom: '#132A1E', bgTo: '#241318', border: '#3D8B5C', accent: '#8FD9AE' },
  onam: { label: 'Onam', bgFrom: '#2E1F12', bgTo: '#241407', border: '#E0923F', accent: '#F2B15C' },
  vishu: { label: 'Vishu', bgFrom: '#2B2410', bgTo: '#1E1A0A', border: '#DDBB44', accent: '#F0D878' },
  independenceDay: { label: 'Independence Day', bgFrom: '#241607', bgTo: '#0F1F14', border: '#D9822B', accent: '#F2A94E' },
  republicDay: { label: 'Republic Day', bgFrom: '#151E2B', bgTo: '#241607', border: '#4C7FC9', accent: '#8FB8E8' },
  diwali: { label: 'Diwali', bgFrom: '#2E2007', bgTo: '#1D1204', border: '#DDA83A', accent: '#F2C666' },
  eid: { label: 'Eid', bgFrom: '#0F2622', bgTo: '#1B1207', border: '#3FA398', accent: '#6FD9C9' },
  easter: { label: 'Easter', bgFrom: '#211A2B', bgTo: '#161221', border: '#9575B5', accent: '#C7ADE0' },
  krishna: { label: 'Janmashtami', bgFrom: '#0F1E2E', bgTo: '#0A2A24', border: '#5B8AD1', accent: '#8FB8F0' },
  dussehra: { label: 'Vijayadasami', bgFrom: '#2B1210', bgTo: '#1D0E0C', border: '#C2564C', accent: '#E88478' },
  gandhi: { label: 'Gandhi Jayanthi', bgFrom: '#1E1E1C', bgTo: '#141412', border: '#ACA599', accent: '#D8D2C4' },
  holi: { label: 'Holi', bgFrom: '#2B1220', bgTo: '#12172B', border: '#D1608F', accent: '#F0A8C6' },
  newYear: { label: "New Year's Day", bgFrom: '#2B2410', bgTo: '#150F1E', border: '#D2B34E', accent: '#F0D888' },
}
