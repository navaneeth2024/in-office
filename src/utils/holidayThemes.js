// Each themed holiday has a dark-mode and light-mode color set — a
// two-stop gradient (bgFrom/bgTo), a border color, and an accent color
// used for the date number and label text. DayCell picks the right one
// based on the app's current color mode.

export const HOLIDAY_THEMES = {
  christmas: {
    label: 'Christmas',
    dark: { bgFrom: '#132A1E', bgTo: '#241318', border: '#3D8B5C', accent: '#8FD9AE' },
    light: { bgFrom: '#E8F3EC', bgTo: '#FBEAEC', border: '#3D8B5C', accent: '#1F5C3B' },
  },
  onam: {
    label: 'Onam',
    dark: { bgFrom: '#2E1F12', bgTo: '#241407', border: '#E0923F', accent: '#F2B15C' },
    light: { bgFrom: '#FBEEDD', bgTo: '#FCE6D3', border: '#E0923F', accent: '#8A4E1D' },
  },
  vishu: {
    label: 'Vishu',
    dark: { bgFrom: '#2B2410', bgTo: '#1E1A0A', border: '#DDBB44', accent: '#F0D878' },
    light: { bgFrom: '#FBF3D9', bgTo: '#F7ECC0', border: '#DDBB44', accent: '#7A5A15' },
  },
  independenceDay: {
    label: 'Independence Day',
    dark: { bgFrom: '#241607', bgTo: '#0F1F14', border: '#D9822B', accent: '#F2A94E' },
    light: { bgFrom: '#FCEEDD', bgTo: '#E7F2EA', border: '#D9822B', accent: '#8A4E1D' },
  },
  republicDay: {
    label: 'Republic Day',
    dark: { bgFrom: '#151E2B', bgTo: '#241607', border: '#4C7FC9', accent: '#8FB8E8' },
    light: { bgFrom: '#E7EEF7', bgTo: '#FCEEDD', border: '#4C7FC9', accent: '#1B3A63' },
  },
  diwali: {
    label: 'Diwali',
    dark: { bgFrom: '#2E2007', bgTo: '#1D1204', border: '#DDA83A', accent: '#F2C666' },
    light: { bgFrom: '#FCF1D9', bgTo: '#F8E7C2', border: '#DDA83A', accent: '#7A5410' },
  },
  eid: {
    label: 'Eid',
    dark: { bgFrom: '#0F2622', bgTo: '#1B1207', border: '#3FA398', accent: '#6FD9C9' },
    light: { bgFrom: '#E3F5F1', bgTo: '#F7EEDD', border: '#3FA398', accent: '#12594F' },
  },
  easter: {
    label: 'Easter',
    dark: { bgFrom: '#211A2B', bgTo: '#161221', border: '#9575B5', accent: '#C7ADE0' },
    light: { bgFrom: '#F1ECF7', bgTo: '#EDE8F5', border: '#9575B5', accent: '#4E3A6B' },
  },
  krishna: {
    label: 'Janmashtami',
    dark: { bgFrom: '#0F1E2E', bgTo: '#0A2A24', border: '#5B8AD1', accent: '#8FB8F0' },
    light: { bgFrom: '#E7F0FA', bgTo: '#E3F3EF', border: '#5B8AD1', accent: '#1E3E63' },
  },
  dussehra: {
    label: 'Vijayadasami',
    dark: { bgFrom: '#2B1210', bgTo: '#1D0E0C', border: '#C2564C', accent: '#E88478' },
    light: { bgFrom: '#FBEAE8', bgTo: '#F7E1DE', border: '#C2564C', accent: '#7A2A22' },
  },
  gandhi: {
    label: 'Gandhi Jayanthi',
    dark: { bgFrom: '#1E1E1C', bgTo: '#141412', border: '#ACA599', accent: '#D8D2C4' },
    light: { bgFrom: '#F2F1EE', bgTo: '#EBEAE6', border: '#ACA599', accent: '#57534A' },
  },
  holi: {
    label: 'Holi',
    dark: { bgFrom: '#2B1220', bgTo: '#12172B', border: '#D1608F', accent: '#F0A8C6' },
    light: { bgFrom: '#FBEAF0', bgTo: '#EAF0FA', border: '#D1608F', accent: '#7A2E4E' },
  },
  newYear: {
    label: "New Year's Day",
    dark: { bgFrom: '#2B2410', bgTo: '#150F1E', border: '#D2B34E', accent: '#F0D888' },
    light: { bgFrom: '#FBF3D9', bgTo: '#F3EEFB', border: '#D2B34E', accent: '#7A5A15' },
  },
}
