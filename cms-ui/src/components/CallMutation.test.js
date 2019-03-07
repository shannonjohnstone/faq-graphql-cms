import React from 'react'
import { cleanup, render } from 'react-testing-library'
import CallMutation from './CallMutation'

describe('CallMutation', () => {
  afterEach(cleanup)
  test('should call mutation, CallMutation', () => {
    const mockFn = jest.fn()
    const { getByText } = render(
      <CallMutation mutation={mockFn}>TEST</CallMutation>,
    )

    expect(mockFn).toHaveBeenCalled()
    expect(getByText('TEST')).toBeTruthy()
  })
})
