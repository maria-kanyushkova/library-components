import React, { FC } from "react";
import { IIconProps } from "./IIconProps";
import { colorMatrix } from "./colorMatrix";
import { get } from "lodash";

export const CompareIcon: FC<IIconProps> = ({ type, focused = false, disabled = false, isTiny = false }) => {
    const state = disabled ? "disabled" : focused ? "focused" : "default";
    const color = get(colorMatrix, `${type}.${state}`);
    const size = isTiny ? "20" : "44";
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.6571 16.3431C18.5329 13.219 13.4676 13.219 10.3434 16.3431C7.21918 19.4673 7.21918 24.5327 10.3434 27.6569C13.4676 30.781 18.5329 30.781 21.6571 27.6569"
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
            <circle
                cx="28"
                cy="22"
                r="8"
                stroke={color}
                strokeWidth="2"
                strokeDasharray="4 2"
                opacity={focused ? "0.5" : "1"}
            />
        </svg>
    );
};
