import map from 'lodash/map'
import { readFileAsText } from '../../core/util/file'

const csvColumnMap = {
  id: 0,
  joinDate: 1,
  name: 3,
  email: 4,
  phone: 5,
  cpf: 2
}

export const importFields = [
  { name: 'id', label: 'ID' },
  { name: 'joinDate', label: 'Data' },
  { name: 'name', label: 'Nome' },
  { name: 'email', label: 'E-mail' },
  { name: 'phone', label: 'Telefone' },
  { name: 'cpf', label: 'CPF' }
]

export const fields = [
  { name: '_id', label: 'ID' },
  { name: 'name', label: 'Nome' },
  { name: 'email', label: 'E-mail' }
]

function getSponsorFromColums(cols) {
  return map(csvColumnMap, (value, key) => ({ [key]: cols[value] }))
    .reduce((obj, prop) => Object.assign(obj, prop))
}

function getSponsorsFromCsv(csv) {
  const sponsors = []
  const rows = csv.split('\n')
  rows.shift()
  rows.pop()

  rows.forEach((row) => {
    const cols = row.substring(row.indexOf('"') + 1, row.lastIndexOf('"') - 2).split('","')
    const sponsor = getSponsorFromColums(cols)

    sponsors.push(sponsor)
  })

  return sponsors
}

export async function importSponsors(file) {
  const csv = await readFileAsText(file)
  const sponsors = getSponsorsFromCsv(csv)

  return sponsors
}
