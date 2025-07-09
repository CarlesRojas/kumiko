"use client";

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/component/ui/sidebar";
import { getTranslation } from "@/locale/getTranslation";
import type { Language } from "@/locale/language";
import { Circle, Triangle } from "lucide-react";

interface Props {
    language: Language;
}

export const ModeTool = ({ language }: Props) => {
    const t = getTranslation(language);

    const items = [
        {
            title: t.sidebar.modeTool.pattern,
            icon: Triangle,
            items: [
                {
                    title: t.sidebar.modeTool.pattern,
                    url: "/",
                },
            ],
        },
        {
            title: t.sidebar.modeTool.wood,
            icon: Circle,
            items: [
                {
                    title: t.sidebar.modeTool.pattern,
                    url: "/",
                },
            ],
        },
    ];

    return (
        <SidebarGroup>
            <SidebarGroupLabel>{t.sidebar.modeTool.title}</SidebarGroupLabel>

            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon className="rotate-90" />}
                            <span>{item.title}</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
};
