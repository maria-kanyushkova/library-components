import * as React from "react";
import { FC } from "react";
import { EAlertType } from "./index";
import "./Alert.scss";

interface IAlertProps {
    title: string;
    type: EAlertType;
    isShow: boolean;
    changeShow: () => void;
}

export const Alert: FC<IAlertProps> = ({
                                           title = "",
                                           type = EAlertType.NONE,
                                           isShow,
                                           changeShow
                                       }) => {
    return (
        <div className="custom-alert" data-open={ isShow } data-type={ type } onClick={ changeShow }>
            <span>{ title }</span>
        </div>
    );
};
