import { Navigate } from 'react-router-dom'

type PrivateRoutesComponent = {
  children: JSX.Element
}

export function PrivateRoutes({ children }: PrivateRoutesComponent) {
  return <Navigate to='/login' />
}
