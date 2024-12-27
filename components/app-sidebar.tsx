"use client"

import { BotMessageSquare, HandCoins } from "lucide-react"
import {
    Sidebar,
    SidebarHeader,
    SidebarRail,
    SidebarContent,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./sidebar-head"
import { NavMain } from "./main-nav"

// This is sample data.
const data = {
    teams: [
        {
            name: "Yusen Logistics",
            logo: BotMessageSquare,
            plan: "Tax",
        },
    ],
    navMain: [
        {
            title: "Jenis Pajak",
            url: "#",
            icon: HandCoins,
            isActive: true,
            items: [
                {
                    title: "Faktur Pajak Masukan",
                    url: "/tax-in",
                },
                {
                    title: "Faktur Pajak Keluaran",
                    url: "/tax-out",
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
