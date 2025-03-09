import { File } from 'lucide-react'
import * as React from 'react'

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar'
import { Routes } from '@/lib/route-config'
import { useNavigate } from 'react-router'

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
    const navigate = useNavigate()
    const kebabToPascalCase = (str: string) => {
        return str
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ')
    }

    return (
        <Sidebar {...props}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Three with Blender</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {Routes.map((item, idx) => (
                                <SidebarMenuItem key={idx}>
                                    <SidebarMenuButton className='cursor-pointer transition-colors' onClick={() => navigate(item.path || '/')}>
                                        <File />
                                        {kebabToPascalCase(item.path?.split('/').at(-1) || 'Home')}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
