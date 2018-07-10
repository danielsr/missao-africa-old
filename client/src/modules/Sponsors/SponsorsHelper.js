import map from 'lodash/map'
import { readFileAsText } from '../../core/util/file'

const csvColumnMap = ['id', 'joinDate', 'cpf', 'name', 'email', 'phone']

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

const getSponsorFromColums = cols => reduce(cols, (final, col, i) => ({ ...final, [id]: csvColumnMap[i] }), {})

const getSponsors = row => row.substring(row.indexOf('"') + 1, row.lastIndexOf('"') - 2).split('","')

const getSponsorsFromCsv = csv =>
  csv.split('\n').splice(1, -1)
  .map(row => getSponsorFromColums(getSponsors(row)))

export async function importSponsors(file) {
  const csv = await readFileAsText(file)
  const sponsors = getSponsorsFromCsv(csv)

  return sponsors
}
