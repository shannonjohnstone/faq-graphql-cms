import { useEffect } from 'react'

/**
 * main reason for making this its own component is for testing purpose
 */
const CallMutation = props => {
  useEffect(() => {
    props.mutation()
  }, [props.watcher])

  return props.children
}

export default CallMutation
