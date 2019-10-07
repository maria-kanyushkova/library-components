import React, { FC } from "react";
import { IIconProps } from "./IIconProps";
import { colorMatrix } from "./colorMatrix";
import { get } from "lodash";

export const DawIcon: FC<IIconProps> = ({ type, focused = false, disabled = false, isTiny = false }) => {
    const state = disabled ? "disabled" : focused ? "focused" : "default";
    const color = get(colorMatrix, `${type}.${state}`);
    const size = isTiny ? "20" : "44";
    const path = isTiny ? "M6.99893 7.9999L9.99893 10.9998L12.9989 8.00008" : "M16 19L22 24.9998L28 19.0001";
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d={path}
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
        </svg>
    );
};

