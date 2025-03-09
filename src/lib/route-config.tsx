import { Deskchair } from '@/pages/deskchair'
import { Home } from '@/pages/home'
import { RouteObject } from 'react-router'

export const Routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/desk-chair',
        element: <Deskchair />,
    },
]
