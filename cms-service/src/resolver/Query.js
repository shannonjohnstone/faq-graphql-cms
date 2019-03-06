// resolvers
export default {
  async homepage(parent, args, { repository }) {
    // return all home data
    return repository.getHome()
  },
  async faqs(parent, args, { repository }) {
    // return all faqs
    return repository.getFaqs()
  },
}
