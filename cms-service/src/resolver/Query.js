// initial dummy data
export default {
  home(parent, args, { repository }) {
    return repository.getHome()
  },
  faqs(parent, args, { repository }) {
    return repository.getFaqs()
  },
}
