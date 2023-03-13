import { Navigate } from 'react-router-dom'

type PrivateRoutesComponent = {
  children: JSX.Element
}

export function PrivateRoutes({ children }: PrivateRoutesComponent) {
  // if (LSgetAccessToken() != null && LSgetRefreshToken() != null) {
  //   return <>{children}</>
  // }

  return <Navigate to='/login' />
}
