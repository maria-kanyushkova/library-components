import { ReactNode } from "react";

export interface IAccordionItem {
    title: string;
    children: ReactNode;
    switchable?: boolean;
    className?: string;
}
