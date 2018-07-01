import moment from 'moment'

const formatDate = (strDate) => {
  if (!strDate) return ''
  const date = new Date(strDate)
  return moment(date).format('DD/MM/YYYY HH:mm')
}

export default formatDate
