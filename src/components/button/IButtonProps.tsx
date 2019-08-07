import { HTMLProps, MouseEvent } from "react";
import { EButtonType } from "./index";

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
    className?: string;
    text?: string;
    disabled?: boolean;
    isBlock?: boolean;
    icon?: EButtonType;
    isTiny?: boolean;
    isMini?: boolean;

    onClick?(event: MouseEvent<HTMLElement>): void;
}
