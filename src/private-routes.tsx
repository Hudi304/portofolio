import { Navigate } from 'react-router-dom'
import { LSgetAccessToken, LSgetRefreshToken } from './api/utils'

type PrivateRoutesComponent = {
  children: JSX.Element
}

export function PrivateRoutes({ children }: PrivateRoutesComponent) {
  if (LSgetAccessToken() != null && LSgetRefreshToken() != null) {
    return <>{children}</>
  }

  return <Navigate to='/login' />
}
