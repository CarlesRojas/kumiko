import { cn } from "@/lib/cn";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";

export const NavigationMenu = ({
    className,
    children,
    viewport = true,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
    viewport?: boolean;
}) => {
    return (
        <NavigationMenuPrimitive.Root
            data-slot="navigation-menu"
            data-viewport={viewport}
            delayDuration={0}
            className={cn(
                "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
                className,
            )}
            {...props}
        >
            {children}
            {viewport && <NavigationMenuViewport />}
        </NavigationMenuPrimitive.Root>
    );
};

export const NavigationMenuList = ({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) => {
    return (
        <NavigationMenuPrimitive.List
            data-slot="navigation-menu-list"
            className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)}
            {...props}
        />
    );
};

export const NavigationMenuItem = ({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) => {
    return (
        <NavigationMenuPrimitive.Item
            data-slot="navigation-menu-item"
            className={cn("relative", className)}
            {...props}
        />
    );
};

const navigationMenuTriggerStyle = cva(
    "focus-shadow group inset-ring-wood-500/80 hover:bg-wood-300/15 focus:bg-wood-300/15 data-[state=open]:bg-wood-300/15 data-[state=open]:hover:bg-wood-300/15 data-[state=open]:focus:bg-wood-300/15 inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none hover:text-neutral-50 focus:text-neutral-50 focus-visible:inset-ring-2 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-neutral-50",
);

interface NavigationMenuTriggerProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {
    hideChevron?: boolean;
}

export const NavigationMenuTrigger = ({ className, children, hideChevron, ...props }: NavigationMenuTriggerProps) => {
    return (
        <NavigationMenuPrimitive.Trigger
            data-slot="navigation-menu-trigger"
            className={cn(navigationMenuTriggerStyle(), "group", className)}
            onClickCapture={(event) => {
                const e = event.nativeEvent;
                if (e instanceof PointerEvent && e.pointerType === "mouse") event.preventDefault();
            }}
            {...props}
        >
            {children}
            {!hideChevron && (
                <ChevronDownIcon
                    className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                />
            )}
        </NavigationMenuPrimitive.Trigger>
    );
};

interface NavigationMenuContentProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Content> {
    align?: "start" | "end" | "center";
}

export const NavigationMenuContent = ({ className, align = "center", ...props }: NavigationMenuContentProps) => {
    return (
        <NavigationMenuPrimitive.Content
            data-slot="navigation-menu-content"
            className={cn(
                "border-wood-500/30 mt-4 border bg-black shadow-md",
                "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 absolute top-0 w-auto p-2",
                "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-3xl group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
                align === "start" && "left-0",
                align === "center" && "left-1/2 -translate-x-1/2",
                align === "end" && "right-0",
                className,
            )}
            {...props}
        />
    );
};

export const NavigationMenuViewport = ({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) => {
    return (
        <div className={cn("absolute top-full flex justify-center")}>
            <NavigationMenuPrimitive.Viewport
                data-slot="navigation-menu-viewport"
                className={cn(
                    "origin-top-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 bg-wood-1000 border-wood-950 relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border text-neutral-50 shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
                    className,
                )}
                {...props}
            />
        </div>
    );
};

export const NavigationMenuLink = ({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) => {
    return (
        <NavigationMenuPrimitive.Link
            data-slot="navigation-menu-link"
            className={cn(
                "inset-ring-wood-500/80 hover:bg-wood-300/15 focus:bg-wood-300/15 data-[active=true]:bg-wood-300/15 data-[active=true]:hover:bg-wood-300/15 data-[active=true]:focus:bg-wood-300/15 flex flex-col gap-1 rounded-lg p-2 text-sm font-semibold transition-all outline-none hover:text-neutral-50 focus:text-neutral-50 focus-visible:inset-ring-2 focus-visible:outline-0 data-[active=true]:text-neutral-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-neutral-400",
                className,
            )}
            {...props}
        />
    );
};

export const NavigationMenuIndicator = ({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) => {
    return (
        <NavigationMenuPrimitive.Indicator
            data-slot="navigation-menu-indicator"
            className={cn(
                "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
                className,
            )}
            {...props}
        >
            <div className="bg-wood-300/15 relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
        </NavigationMenuPrimitive.Indicator>
    );
};
