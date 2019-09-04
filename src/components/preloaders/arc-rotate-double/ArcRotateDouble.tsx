import * as React from "react";
import { LoaderWrap } from "../LoaderWrap";
import "./ArcRotateDouble.css";

export const ArcRotateDouble = () => {
    return (
        <LoaderWrap className="arc-rotate-double">
            <div className="arc-1"/>
            <div className="arc-2"/>
        </LoaderWrap>
    );
};
