import Query from '../Query'
describe('Query', () => {
  test('should call getHome', () => {
    const mockGetHome = jest.fn()
    Query.homepage(null, null, {
      repository: { getHome: mockGetHome },
    })
    expect(mockGetHome).toHaveBeenCalled()
  })

  test('should call getFaqs', () => {
    const mockFaqs = jest.fn()
    Query.faqs(null, null, {
      repository: { getFaqs: mockFaqs },
    })
    expect(mockFaqs).toHaveBeenCalled()
  })
})
