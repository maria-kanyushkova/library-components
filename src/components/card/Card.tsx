import * as React from "react";
import { FC } from "react";
import "./Card.scss";
import { ICardProps } from "./ICardProps";
import { isEmpty } from "lodash";

export const Card: FC<ICardProps> = ({
                                         title = "",
                                         content = "",
                                         className = "",
                                         onClick,
                                     }) => {

    return (
        <div className={ `card ${ className }` } onClick={ onClick || void 0 }>
            <div className="card-header" data-hidden={ isEmpty(title) }>
                <span className="card-header__title">{ title }</span>
            </div>
            <div className="card-body">
                { content }
            </div>
        </div>
    );
};
