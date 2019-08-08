import * as React from "react";
import { FC } from "react";
import "./Card.scss";
import { ICardProps } from ".";
import * as _ from "lodash";

export const Card: FC<ICardProps> = ({
                                                  title = "",
                                                  content = "",
                                                  className = "",
                                                  onClick,
                                              }) => {

    return (
        <div className={`card ${className}`} onClick={onClick || void 0}>
            <div className="card-header" data-hidden={_.isEmpty(title)}>
                <span className="card-header__title">{title}</span>
            </div>
            <div className="card-body">
                {content}
            </div>
        </div>
    );
};
