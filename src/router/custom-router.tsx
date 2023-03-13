import React from 'react'
import { Router } from 'react-router-dom'

type CustomRouterProps = { basename?: string; children: any; history: any }

export const CustomRouter = ({
  basename,
  children,
  history,
}: CustomRouterProps) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  })

  React.useLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  )
}
