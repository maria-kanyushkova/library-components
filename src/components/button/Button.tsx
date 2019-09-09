import classNames from "classnames";
import * as React from "react";
import { FC } from "react";
import "./Button.scss";
import { IButtonProps } from "./IButtonProps";
import { EButtonType } from "./EButtonType";
import { isEmpty } from "lodash";

export const Button: FC<IButtonProps> = (props) => {
    const {
        className = "", text = "", type, onClick = void 0,
        disabled = false, isTiny = false, isMini = false, isDouble = false,
        icon = EButtonType.NONE, ...rest
    } = props;

    const classes = classNames({
        [className]: true,
        ["button"]: true,
        ["button-tiny"]: isTiny,
        ["button-mini"]: isMini,
        ["button-double"]: isDouble,
        ["text-center"]: isEmpty(icon),
        disabled,
    });

    return (
        <button
            className={ classes }
            data-type={ type }
            data-icon={ `${ icon }${ isTiny ? "-tiny" : "" }` }
            onClick={ onClick }
            { ...rest }
        >
            { text }
        </button>
    );
};
