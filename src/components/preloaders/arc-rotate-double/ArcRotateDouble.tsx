import * as React from "react";
import { LoaderWrapper } from "../LoaderWrapper";
import "./ArcRotateDouble.css";

export const ArcRotateDouble = () => {
    return (
        <LoaderWrapper className="arc-rotate-double">
            <div className="arc-1"/>
            <div className="arc-2"/>
        </LoaderWrapper>
    );
};
