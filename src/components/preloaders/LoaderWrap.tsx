import * as React from "react";
import { ILoaderWrapperProps } from "./ILoaderWrapperProps";
import "./LoaderWrap.scss";

export const LoaderWrap = (props: ILoaderWrapperProps) => {
    const { className, children } = props;
    return (
        <div className={ `loader-container ${ className }` }>
            <div className="loader">
                { children }
            </div>
        </div>
    );
};
