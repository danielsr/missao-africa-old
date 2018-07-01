import gql from 'graphql-tag'

export const importSponsorsMutation = gql`
  mutation importSponsors($input: [SponsorInput]) {
    importSponsors(input: $input)
  }
`

export const getSponsors = gql`
  query getSponsors {
    sponsors {
      _id
      name
      email
    }
  }
`
