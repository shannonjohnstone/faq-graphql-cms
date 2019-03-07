import { useEffect } from 'react'

const CallMutation = props => {
  useEffect(() => {
    props.mutation()
  }, [props.watcher])

  return props.children
}

export default CallMutation
