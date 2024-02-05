'use client';

import Image from "next/image";
import {
    Activity,
    CreditCard,
    Layout,
    Settings
} from 'lucide-react'

import { cn } from "@/lib/utils";

import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
};

interface NavItemsProps {
    isExpanded: boolean;
    isActive: boolean;
    organization: any;
    onExpand: (id: string) => void;
};

export const NavItem = ({
    isExpanded,
    isActive,
    organization,
    onExpand
}: NavItemsProps ) => {
    
    
    
    return (
        <AccordionItem
            value={ organization.id }
            className="border-none"
        >
            <AccordionTrigger
                onClick={() => onExpand( organization.id )}
                className={cn(
                    "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
                    isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
                )}

            >
                <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 relative">
                        <Image 
                            fill
                            src={ organization.imageUrl }
                            alt="Organization"
                            className="rounded-sm object-cover"
                        />
                    </div>
                    <span className="font-medium text-sm">
                        { organization.name }
                    </span>   
                </div>
            </AccordionTrigger>
        </AccordionItem>
    )
};
