import data from './mock-data.json'

export default {
  Home: {
    find: () => data.homepage,
  },
  Faqs: {
    find: () => data.faqs,
  },
}
