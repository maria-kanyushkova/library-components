import * as React from "react";
import { ILoaderWrapperProps } from "./ILoaderWrapperProps";
import "./LoaderWrapper.scss";

export const LoaderWrapper = (props: ILoaderWrapperProps) => {
    const { className, children } = props;
    return (
        <div className="loaders">
            <div className={ `loader-container ${ className }` }>
                <div className="loader">
                    { children }
                </div>
            </div>
        </div>
    );
};
