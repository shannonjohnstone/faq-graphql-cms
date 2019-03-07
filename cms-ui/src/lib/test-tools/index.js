import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, cleanup, getByText, getByTestId } from 'react-testing-library'
import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'

/**
 * Centralize testing tools
 */

export { wait, MockedProvider, render, cleanup, getByText, getByTestId }

export function renderWithRouter(
  Component,
  opts,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  return {
    ...render(
      <Router history={history}>
        <MockedProvider
          mocks={opts.mocks}
          addTypename={opts.addTypename || false}
        >
          <Component />
        </MockedProvider>
      </Router>,
    ),
    history,
  }
}
