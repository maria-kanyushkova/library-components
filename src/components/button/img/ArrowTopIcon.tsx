import React, { FC } from "react";
import { IIconProps } from "./IIconProps";
import { colorMatrix } from "./colorMatrix";
import { get } from "lodash";

export const ArrowTopIcon: FC<IIconProps> = ({ type, focused = false, disabled = false, isTiny = false }) => {
    const state = disabled ? "disabled" : focused ? "focused" : "default";
    const color = get(colorMatrix, `${type}.${state}`);
    const size = isTiny ? "20" : "44";
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22 12V32"
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
            <path
                d="M27.6569 17.0001L22 11.3433L16.3431 17.0001"
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
        </svg>
    );
};

