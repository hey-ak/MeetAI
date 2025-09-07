"use client";

import {BotIcon, StarIcon, VideoIcon} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {DashboardUserButton} from "./dashboard-user-button";

const firstSection = [
    {
        icon: VideoIcon,
        label: "Meetings",
        href: "/meetings"
    }, {
        icon: BotIcon,
        label: "Agents",
        href: "/agents"
    }
];

const secondSection = [{
        icon: StarIcon,
        label: "Upgrade",
        href: "/upgrade"
    },];

export const DashboardSidebar = () => {
    const pathName = usePathname();

    return (
        <Sidebar>
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                    <Image src="/logo.svg"
                        height={36}
                        width={36}
                        alt="Meet.AI"/>
                    <p className="text-2xl font-semibold">Meet.AI</p>
                </Link>
            </SidebarHeader>

            <div className="px-4 py-2">
                <Separator className="opacity-10 bg-sidebar-border"/>
            </div>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu> {
                            firstSection.map((item) => (
                                <SidebarMenuItem key={
                                    item.href
                                }>
                                    <SidebarMenuButton asChild
                                        className={
                                            cn("h-10 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground border border-transparent hover:border-sidebar-border/20 transition-colors", pathName === item.href && "bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border/20")
                                        }
                                        isActive={
                                            pathName === item.href
                                    }>
                                        <Link href={
                                            item.href
                                        }>
                                            <item.icon className="size-5"/>
                                            <span className="text-sm font-medium tracking-tight">
                                                {
                                                item.label
                                            } </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        } </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="px-4 py-2">
                    <Separator className="opacity-10 bg-sidebar-border"/>
                </div>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu> {
                            secondSection.map((item) => (
                                <SidebarMenuItem key={
                                    item.href
                                }>
                                    <SidebarMenuButton asChild
                                        className={
                                            cn("h-10 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground border border-transparent hover:border-sidebar-border/20 transition-colors", pathName === item.href && "bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border/20")
                                        }
                                        isActive={
                                            pathName === item.href
                                    }>
                                        <Link href={
                                            item.href
                                        }>
                                            <item.icon className="size-5"/>
                                            <span className="text-sm font-medium tracking-tight">
                                                {
                                                item.label
                                            } </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        } </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="text-sidebar-foreground">
                <DashboardUserButton/>
            </SidebarFooter>
        </Sidebar>
    );
};
