import React from 'react'
import { renderWithRouter, wait } from '../../lib/test-tools'
import HomeContainer from './HomeContainer'
import { HOME_QUERY } from '../../graphqlClient/queries'

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

describe('HomeContainer', () => {
  test('render without errors', async () => {
    const { getByText } = renderWithRouter(HomeContainer, {
      mocks,
      addTypename: false,
    })
    await wait(0)
    expect(getByText('This is the heading')).toBeTruthy()
  })
})
