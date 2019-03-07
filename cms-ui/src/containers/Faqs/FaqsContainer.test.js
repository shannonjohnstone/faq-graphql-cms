import React from 'react'
import { cleanup, reactTestLib, renderWithRouter } from '../../lib/test-tools'
import FaqsContainer from './FaqsContainer'
import { FAQS_QUERY } from '../../graphqlClient/queries'

const mocks = [
  {
    request: {
      query: FAQS_QUERY,
    },
    result: {
      data: {
        faqs: [
          { title: 'this is a title 1', body: 'This is the body 1' },
          { title: 'this is a title 2', body: 'This is the body 2' },
        ],
      },
    },
  },
]

describe('FaqsContainer', () => {
  afterEach(cleanup)
  test('render without errors', async () => {
    const { getByText } = renderWithRouter(FaqsContainer, {
      mocks,
      addTypename: false,
    })
    expect(getByText('FAQS')).toBeTruthy()
  })
})
