"use client";

import { cn } from "@/lib/cn";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import type { ComponentProps } from "react";

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

type DropdownMenuSubTriggerProps = ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
};

export const DropdownMenuSubTrigger = ({ className, inset, children, ref, ...props }: DropdownMenuSubTriggerProps) => (
    <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(
            "focus:bg-wood-200/7 data-[state=open]:bg-wood-200/7 flex cursor-default items-center rounded-md p-2 text-sm font-medium outline-none select-none",
            inset && "pl-8",
            className,
        )}
        {...props}
    >
        {children}
        <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
);

export const DropdownMenuSubContent = ({
    className,
    ref,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitive.SubContent>) => (
    <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-wood-1000 border-wood-950 z-50 min-w-[10rem] space-y-1 overflow-hidden rounded-xl border p-2 text-neutral-50 shadow-lg",
            className,
        )}
        {...props}
    />
);

type DropdownMenuContentProps = ComponentProps<typeof DropdownMenuPrimitive.Content> & {
    sideOffset?: number;
};

export const DropdownMenuContent = ({ className, sideOffset = 4, ref, ...props }: DropdownMenuContentProps) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-wood-1000 border-wood-950 z-50 min-w-[10rem] space-y-1 overflow-hidden rounded-xl border p-2 text-neutral-50 shadow-md",
                className,
            )}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
);

type DropdownMenuItemProps = ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
};

export const DropdownMenuItem = ({ className, inset, ref, ...props }: DropdownMenuItemProps) => (
    <DropdownMenuPrimitive.Item
        ref={ref}
        className={cn(
            "focus:bg-wood-200/7 relative flex cursor-default items-center rounded-md p-2 text-sm font-medium transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            inset && "pl-8",
            className,
        )}
        {...props}
    />
);

export const DropdownMenuCheckboxItem = ({
    className,
    checked,
    ref,
    children,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) => (
    <DropdownMenuPrimitive.CheckboxItem
        ref={ref}
        className={cn(
            "focus:bg-neutral-150 focus:bg-wood-200/7 relative flex cursor-default items-center rounded-md py-1.5 pr-2 pl-8 text-sm font-medium transition-colors outline-none select-none focus:text-neutral-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className,
        )}
        checked={checked}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <Check className="h-4 w-4" />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.CheckboxItem>
);

export const DropdownMenuRadioItem = ({
    className,
    ref,
    children,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) => (
    <DropdownMenuPrimitive.RadioItem
        ref={ref}
        className={cn(
            "focus:bg-wood-200/7 relative flex cursor-default items-center rounded-md py-3 pr-4 pl-8 text-sm font-medium transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className,
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <Circle className="h-2 w-2 fill-current" />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.RadioItem>
);

type DropdownMenuLabelProps = ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
};

export const DropdownMenuLabel = ({ className, inset, ref, ...props }: DropdownMenuLabelProps) => (
    <DropdownMenuPrimitive.Label
        ref={ref}
        className={cn("px-3 py-2 text-sm font-semibold", inset && "pl-8", className)}
        {...props}
    />
);

export const DropdownMenuSeparator = ({
    className,
    ref,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Separator>) => (
    <DropdownMenuPrimitive.Separator ref={ref} className={cn("bg-wood-950 -mx-1 my-2 h-px", className)} {...props} />
);

export const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span className={cn("ml-auto text-sm font-medium tracking-widest opacity-60", className)} {...props} />;
};
