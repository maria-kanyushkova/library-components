import React, { FC } from "react";
import { get } from "lodash";
import { IIconProps } from "./IIconProps";
import { colorMatrix } from "./colorMatrix";

export const PlusIcon: FC<IIconProps> = ({ type, focused = false, disabled = false, isTiny = false }) => {
    const state = disabled ? "disabled" : focused ? "focused" : "default";
    const color = get(colorMatrix, `${type}.${state}`);
    const size = isTiny ? "20" : "44";
    const path1 = isTiny
        ? "M5.75736 10.0005H14.2426"
        : "M22 12V32";
    const path2 = isTiny
        ? "M9.99955 14.2426V5.75736"
        : "M12 22H32";
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d={path1}
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
            <path
                d={path2}
                stroke={color}
                strokeWidth="2"
                opacity={focused ? "0.5" : "1"}
            />
        </svg>
    );
};

