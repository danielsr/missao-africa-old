export const typeDefs = `
  type Sponsor {
    _id: ID!
    id: Int!,
    joinDate: String!
    name: String!
    email: String!
    phone: String!
    cpf: String
  }

  input SponsorInput {
    _id: ID,
    id: Int!,
    joinDate: String!
    name: String!
    email: String!
    phone: String!
    cpf: String
  }

  type Query {
    sponsors: [Sponsor]
  }

  type Mutation {
    importSponsors(input: [SponsorInput]): Boolean
  }
  `
