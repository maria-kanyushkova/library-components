import React, { FC } from "react";
import { EAlertType } from "../EAlertType";

interface ICloseIconProps {
    type: EAlertType;
}

export const CloseIcon: FC<ICloseIconProps> = ({type}) => {
    const color = type === EAlertType.NONE ? "#ffffff"
        : type === EAlertType.NEUTRAL ? "#00077B"
        : type === EAlertType.NEGATIVE ? "#EB5757" : "#00BF40";
    return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9287 14.9287L29.0708 29.0708" stroke={color} strokeWidth="2"/>
            <path d="M14.9287 29.0713L29.0708 14.9292" stroke={color} strokeWidth="2"/>
        </svg>
    );
};
