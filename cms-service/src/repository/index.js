/**
 * data repository
 * keeping the direct use of the db api out of the api logic
 */
export default db => ({
  getHome: async () => await db.homepage.find(),
  getFaqs: async () => await db.faqs.find(),
})
