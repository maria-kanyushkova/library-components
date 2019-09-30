import React, { FC } from "react";
import { get } from "lodash";
import { IIconProps } from "./IIconProps";
import { colorMatrix } from "./colorMatrix";

export const UploadIcon: FC<IIconProps> = ({ type, focused = false, disabled = false, isTiny = false }) => {
    const state = disabled ? "disabled" : focused ? "focused" : "default";
    const color = get(colorMatrix, `${type}.${state}`);
    const size = isTiny ? "20" : "44";
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22 20V32"
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
            <path
                d="M18 22L22 19L26 22"
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
            <path
                d="M26 25H28C30.2091 25 32 23.2091 32 21C32 18.7909 30.2091 17 28 17H26C26 14.2386 23.7614 12 21 12C18.2386 12 16 14.2386 16 17C13.7909 17 12 18.7909 12 21C12 23.2091 13.7909 25 16 25H18"
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
        </svg>
    );
};
