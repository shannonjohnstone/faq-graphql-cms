/**
 * faqs service logic
 *
 * addIdToFaq: add this logic due to the individual faq items
 * not having an id to reference a source of truth or as a key value on in the UI
 *
 * was unsure if the requirements permitted me adding one in the mock data
 * so thought i would do it here
 */

export default {
  addIdToFaq(faqs = []) {
    if (!Array.isArray(faqs))
      throw new Error('giveFaqAnId: faqs must be an array of items')

    return faqs.map((faq, index) => ({ ...faq, id: index + 1 }))
  },
}
