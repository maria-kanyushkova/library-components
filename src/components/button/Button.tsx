import classNames from "classnames";
import * as React from "react";
import { FC, ReactNode, useState } from "react";
import "./Button.scss";
import { IButtonProps } from "./IButtonProps";
import { EButtonType } from "./EButtonType";
import { isEmpty } from "lodash";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowTopIcon, DownloadIcon, PlusIcon, UploadIcon } from "./img";

export const Button: FC<IButtonProps> = (props) => {
    const {
        className = "", text = "", type = "primary", onClick = void 0,
        disabled = false, isTiny = false, isMini = false, isDouble = false,
        icon = EButtonType.NONE, ...rest
    } = props;

    const [focused, setFocused] = useState(false);

    const classes = classNames({
        [className]: true,
        ["button"]: true,
        ["button-tiny"]: isTiny,
        ["button-mini"]: isMini,
        ["button-double"]: isDouble,
        ["text-center"]: isEmpty(icon),
        disabled,
    });

    function getIcon(icon: EButtonType): ReactNode {
        switch (icon) {
            case EButtonType.PLUS:
                return <PlusIcon type={type} focused={focused} disabled={disabled} isTiny={isTiny}/>;
            case EButtonType.ARROW_DOWN:
                return <ArrowDownIcon type={type} focused={focused} disabled={disabled} isTiny={isTiny}/>;
            case EButtonType.ARROW_RIGHT:
                return <ArrowRightIcon type={type} focused={focused} disabled={disabled}/>;
            case EButtonType.ARROW_LEFT:
                return <ArrowLeftIcon type={type} focused={focused} disabled={disabled}/>;
            case EButtonType.ARROW_TOP:
                return <ArrowTopIcon type={type} focused={focused} disabled={disabled}/>;
            case EButtonType.DOWNLOAD:
                return <DownloadIcon type={type} focused={focused} disabled={disabled}/>;
            case EButtonType.UPLOAD:
                return <UploadIcon type={type} focused={focused} disabled={disabled}/>;
            default:
                return void 0;
        }
    }

    return (
        <button
            onMouseDown={() => setFocused(true)}
            onMouseUp={() => setFocused(false)}
            className={classes}
            data-type={type}
            data-icon={`${icon}${isTiny ? "-tiny" : ""}`}
            onClick={onClick}
            {...rest}
        >
            <div className="text">{text}</div>
            <div className="icon">{getIcon(icon)}</div>
        </button>
    );
};
