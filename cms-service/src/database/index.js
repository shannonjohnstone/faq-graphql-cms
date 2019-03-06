import data from './mock-data.json'

// simulate network request
function databaseDelay(ms, data) {
  return new Promise(resolve => setTimeout(() => resolve(data), ms))
}

// in memory implementation of a basic db
export default {
  homepage: {
    find: () => databaseDelay(1000, data.homepage),
  },
  faqs: {
    find: () => databaseDelay(1000, data.faqs),
  },
}
