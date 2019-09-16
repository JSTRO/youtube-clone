export function convertDate(date) {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const day = date.substring(8, 10)
  const month = parseInt(date.substring(5, 7)) - 1
  const year = date.substring(0, 4)

  const monthName = months[month]

  return `${monthName} ${day}, ${year}`
}