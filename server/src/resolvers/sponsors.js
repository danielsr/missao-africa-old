import { Sponsor } from '../models'

export default {
  Query: {
    sponsors: async () => Sponsor.find()
  },
  Mutation: {
    importSponsors: async (root, args) => {
      await args.input.forEach((sponsor) => {
        Sponsor.saveOrUpdate(sponsor)
      })

      return true
    }
  }
}
