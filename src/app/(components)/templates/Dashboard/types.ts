import { ReactNode } from "react"

export interface DashboardSideBarProps {
    links: DashboardNavLink[],
    user:DashboardUser
}

export interface DashboardNavLink {
    href:string
    title? : string
    icon? : ReactNode | string
}

export interface DashboardUser{
    name : string
    role: string
    isLoggedIn: boolean
    
}