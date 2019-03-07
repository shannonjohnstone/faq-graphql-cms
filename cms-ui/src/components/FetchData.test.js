import React from 'react'
import { render, MockedProvider, wait } from '../lib/test-tools'
import FetchData from './FetchData'
import { HOME_QUERY } from '../graphqlClient/queries'

const mocks = [
  {
    request: {
      query: HOME_QUERY,
    },
    result: {
      data: {
        homepage: {
          heading: 'This is the heading',
          subheading: 'This is the subheading',
          heroImageUrl: 'image/url',
        },
      },
    },
  },
]

describe('FetchData', () => {
  test('render without errors', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FetchData query={HOME_QUERY} render={() => 'TEST'} />
      </MockedProvider>,
    )

    await wait(0)
    expect(getByText('TEST')).toBeTruthy()
  })
})
