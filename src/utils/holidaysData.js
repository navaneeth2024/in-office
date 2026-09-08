// Kerala Government Holiday list for 2026 (General Administration Dept.
// gazette), plus a couple of commonly observed extra dates that aren't on
// the official list but are included so their theme still applies if you
// mark them yourself (Holi, New Year's Day).
//
// `theme` keys correspond to entries in `holidayThemes.js`.
// `official` = one of the Kerala Government's 22 gazetted public holidays.
// `sunday` = already falls on a Sunday, so no separate holiday is granted.
// `lunar` = Islamic calendar date; may shift by a day depending on moon sighting.

export const KERALA_HOLIDAYS_2026 = [
  { date: '2026-01-01', name: "New Year's Day", theme: 'newYear', official: false },
  { date: '2026-01-02', name: 'Mannam Jayanthi', official: true },
  { date: '2026-01-26', name: 'Republic Day', theme: 'republicDay', official: true },
  { date: '2026-02-15', name: 'Mahasivarathri', official: true, sunday: true },
  { date: '2026-03-03', name: 'Holi', theme: 'holi', official: false },
  { date: '2026-03-20', name: 'Id-ul-Fitr (Ramzan)', theme: 'eid', official: true, lunar: true },
  { date: '2026-04-02', name: 'Maundy Thursday', theme: 'easter', official: true },
  { date: '2026-04-03', name: 'Good Friday', theme: 'easter', official: true },
  { date: '2026-04-05', name: 'Easter', theme: 'easter', official: true, sunday: true },
  { date: '2026-04-14', name: 'Dr. B.R. Ambedkar Jayanthi', official: true },
  { date: '2026-04-15', name: 'Vishu', theme: 'vishu', official: true },
  { date: '2026-05-01', name: 'May Day', official: true },
  { date: '2026-05-27', name: "Id-ul-Ad'ha (Bakrid)", theme: 'eid', official: true, lunar: true },
  { date: '2026-06-25', name: 'Muharram', official: true, lunar: true },
  { date: '2026-08-12', name: 'Karkadaka Vavu', official: true },
  { date: '2026-08-15', name: 'Independence Day', theme: 'independenceDay', official: true },
  { date: '2026-08-25', name: 'First Onam / Milad-i-Sherif', theme: 'onam', official: true },
  { date: '2026-08-26', name: 'Thiruvonam', theme: 'onam', official: true },
  { date: '2026-08-27', name: 'Third Onam', theme: 'onam', official: true },
  { date: '2026-08-28', name: 'Fourth Onam / Sree Narayana Guru Jayanthi / Ayyankali Jayanthi', theme: 'onam', official: true },
  { date: '2026-09-04', name: 'Sreekrishna Jayanthi', theme: 'krishna', official: true },
  { date: '2026-09-21', name: 'Sree Narayana Guru Samadhi Day', official: true },
  { date: '2026-10-02', name: 'Gandhi Jayanthi', theme: 'gandhi', official: true },
  { date: '2026-10-20', name: 'Mahanavami', official: true },
  { date: '2026-10-21', name: 'Vijayadasami', theme: 'dussehra', official: true },
  { date: '2026-11-08', name: 'Deepavali', theme: 'diwali', official: true, sunday: true },
  { date: '2026-12-25', name: 'Christmas', theme: 'christmas', official: true },
]

export function getHolidayInfo(dateKey) {
  return KERALA_HOLIDAYS_2026.find((h) => h.date === dateKey) || null
}
