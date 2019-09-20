import React, { FC } from "react";
import { IIconProps } from "./IIconProps";
import { colorMatrix } from "./colorMatrix";
import { get } from "lodash";

export const ArrowLeftIcon: FC<IIconProps> = ({ type, focused = false, disabled = false, isTiny = false }) => {
    const state = disabled ? "disabled" : focused ? "focused" : "default";
    const color = get(colorMatrix, `${type}.${state}`);
    const size = isTiny ? "20" : "44";
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 22H32"
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
            <path
                d="M16.9999 16.3431L11.343 22L16.9999 27.6569"
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
        </svg>
    );
};

