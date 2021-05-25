import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  console.warn(dateString, 'ini dateString')
  const date = parseISO(dateString)
  console.warn(date, 'ini datee')
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
