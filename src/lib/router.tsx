import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import { Routes } from './route-config'

const routerArray = [
    {
        element: (
            <SidebarProvider>
                <AppSidebar />
                <Outlet />
            </SidebarProvider>
        ),
        children: Routes,
    },
]

const router = createBrowserRouter(routerArray, {
    basename: import.meta.env.VITE_APP_BASE_URL.replace(/\/$/, '') || '/',
})

export const BrowserRouter = () => {
    return <RouterProvider router={router} />
}
