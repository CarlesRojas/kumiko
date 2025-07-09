import { ModeTool } from "@/component/ModeTool";
import { Sidebar, SidebarContent, SidebarGroup, SidebarRail, SidebarTrigger } from "@/component/ui/sidebar";
import type { Language } from "@/locale/language";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<typeof Sidebar> {
    language: Language;
}

export function CanvasSidebar({ language, ...props }: Props) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarTrigger className="-ml-1" />
                </SidebarGroup>

                <ModeTool language={language} />
            </SidebarContent>

            <SidebarRail />
        </Sidebar>
    );
}
