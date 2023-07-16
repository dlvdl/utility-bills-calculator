export const changeMonth = (date, action) => {
  const currentDate = new Date(date)
  const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  if (action === 'ArrowForwardIosIcon') {
    return newDate.setMonth(newDate.getMonth() + 1)
  }
  if (action === 'ArrowBackIosIcon') {
    return newDate.setMonth(newDate.getMonth() - 1)
  }
}
