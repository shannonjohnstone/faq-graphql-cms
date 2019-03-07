import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { cleanup, render } from 'react-testing-library'
import { renderWithRouter } from '../../lib/test-tools'
import FaqsContainer from './FaqsContainer'
import { FAQS_QUERY } from '../../graphqlClient/queries'
import CallMutation from '../../components/CallMutation'

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
    const { getByText } = renderWithRouter(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FaqsContainer />
      </MockedProvider>,
    )

    expect(getByText('FAQS')).toBeTruthy()
  })

  test('should call mutation, CallMutation', () => {
    const mockFn = jest.fn()
    const { getByText } = render(
      <CallMutation mutation={mockFn}>TEST</CallMutation>,
    )

    expect(mockFn).toHaveBeenCalled()
    expect(getByText('TEST')).toBeTruthy()
  })
})
