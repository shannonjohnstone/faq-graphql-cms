import mockData from './mock-data.json'

// simulate network request
function databaseDelay(ms, data) {
  return new Promise(resolve => setTimeout(() => resolve(data), ms))
}

const dataSource = data => {
  let instance

  return {
    getData: () => {
      if (!instance) instance = { ...data }
      return instance
    },
  }
}

// in memory implementation of a basic db
const data = dataSource(mockData).getData()

export default {
  homepage: {
    find: () => databaseDelay(1000, data.homepage),
  },
  faqs: {
    find: () => databaseDelay(1000, data.faqs),
  },
}
