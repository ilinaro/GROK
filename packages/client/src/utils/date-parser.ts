export function dateParser(date: string | undefined): string {
  if (!date) return '';

  const yearMonthDay = date.split('T', 1).join();
  const [year, month, day] = yearMonthDay.split('-');

  return [day, month, year].join('.');
}
