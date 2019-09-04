import * as React from "react";
import { LoaderWrap } from "../LoaderWrap";
import "./Wave.css";

export const Wave = () => {
    return (
        <LoaderWrap className="wave">
            <div className="line-1"/>
            <div className="line-2"/>
            <div className="line-3"/>
            <div className="line-4"/>
            <div className="line-5"/>
        </LoaderWrap>
    );
};
