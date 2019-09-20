import React, { FC } from "react";

interface ICheckIconProps {
    active: boolean;
}

export const CheckIcon: FC<ICheckIconProps> = ({active = false}) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6L4 9L11 2" stroke={active ? "#00077B" : "#A6A6A6"} strokeWidth="2"/>
        </svg>
    );
};
