import React, { FC } from "react";
import { IIconProps } from "./IIconProps";
import { colorMatrix } from "./colorMatrix";
import { get } from "lodash";

export const ArrowRightIcon: FC<IIconProps> = ({ type, focused = false, disabled = false, isTiny = false }) => {
    const state = disabled ? "disabled" : focused ? "focused" : "default";
    const color = get(colorMatrix, `${type}.${state}`);
    const size = isTiny ? "20" : "44";
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M32 22L12 22"
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
            <path
                d="M27.0001 27.6569L32.657 22L27.0001 16.3431"
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
        </svg>
    );
};

