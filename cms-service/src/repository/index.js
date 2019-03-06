export default db => ({
  getHome: () => db.Home.find(),
  getFaqs: () => db.Faqs.find(),
})
