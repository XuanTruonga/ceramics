
export const showDate = (date)=>{
  const index = date.indexOf('.')
  const dayMonthYear = date.slice(0,index).split('T')
  return dayMonthYear[0].split('-').reverse().join('-')
}

export const showHour = (date)=>{
  const index = date.indexOf('.')
  const dayMonthYear = date.slice(0,index).split('T')
  const hour = dayMonthYear[1]
  return hour
}
