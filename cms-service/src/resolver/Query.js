// resolvers
export default {
  async homepage(parent, args, { repository }) {
    // return all home data
    return repository.getHome()
  },
  async faqs(parent, args, { repository, faqsService }) {
    // return all faqs
    return faqsService.addIdToFaq(await repository.getFaqs())
  },
}
