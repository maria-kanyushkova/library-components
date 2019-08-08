import classNames from "classnames";
import * as React from "react";
import { FC } from "react";
import "./Button.scss";
import { IButtonProps } from "./IButtonProps";
import { EButtonType } from ".";
import { isEmpty } from "lodash";

export const Button: FC<IButtonProps> = (props) => {
    const {
        className = "", text = "", type, onClick = void 0,
        disabled = false, isBlock = true, isTiny = false, isMini = false, isDouble = false,
        icon = EButtonType.NONE, ...rest
    } = props;

    const classes = classNames({
        ["custom-button"]: true,
        [className]: true,
        ["btn-block"]: isBlock,
        ["button-tiny"]: isTiny,
        ["button-mini"]: isMini,
        ["text-center"]: isEmpty(icon),
        btn: true,
        disabled,
    });

    return (
        <button
            className={classes}
            data-type={type}
            data-icon={`${icon}${isTiny ? "-tiny" : ""}`}
            data-double={isDouble}
            onClick={onClick}
            {...rest}
        >
            {text}
        </button>
    );
};
