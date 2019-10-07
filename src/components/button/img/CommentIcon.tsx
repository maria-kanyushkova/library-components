import React, { FC } from "react";
import { get } from "lodash";
import { IIconProps } from "./IIconProps";
import { colorMatrix } from "./colorMatrix";

export const CommentIcon: FC<IIconProps> = ({ type, focused = false, disabled = false, isTiny = false }) => {
    const state = disabled ? "disabled" : focused ? "focused" : "default";
    const color = get(colorMatrix, `${type}.${state}`);
    const size = isTiny ? "20" : "44";
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1" fill="white">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    opacity={focused ? "0.5" : "1"}
                    d="M10 26V25V16C10 14.3431 11.3431 13 13 13L31 13C32.6569 13 34 14.3431 34 16V24.2V26C34 27.6569 32.6569 29 31 29H18.9091L11.6178 34.7289C10.9617 35.2444 10 34.777 10 33.9425L10 26Z"
                />
            </mask>
            <path
                d="M18.9091 29V27H18.2174L17.6734 27.4274L18.9091 29ZM11.6178 34.7289L12.8535 36.3015H12.8535L11.6178 34.7289ZM12 26V25H8V26H12ZM8 16L8 25H12V16H8ZM13 11C10.2386 11 8 13.2386 8 16H12C12 15.4477 12.4477 15 13 15V11ZM31 11L13 11V15L31 15V11ZM36 16C36 13.2386 33.7614 11 31 11V15C31.5523 15 32 15.4477 32 16H36ZM36 24.2V16H32V24.2H36ZM36 26V24.2H32V26H36ZM31 31C33.7614 31 36 28.7614 36 26H32C32 26.5523 31.5523 27 31 27V31ZM18.9091 31H31V27H18.9091V31ZM17.6734 27.4274L10.3822 33.1562L12.8535 36.3015L20.1447 30.5726L17.6734 27.4274ZM10.3822 33.1562C11.0383 32.6407 12 33.1081 12 33.9425H8C8 36.4458 10.8851 37.8481 12.8535 36.3015L10.3822 33.1562ZM12 33.9425L12 26H8L8 33.9425H12Z"
                fill={color}
                opacity={focused ? "0.5" : "1"}
                mask="url(#path-1-inside-1)"
            />
        </svg>
    );
};
