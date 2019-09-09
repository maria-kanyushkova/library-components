import * as React from "react";
import { LoaderWrap } from "../LoaderWrap";
import "./Clock.css";

export const Clock = () => {
    return (
        <LoaderWrap className="clock">
            <div className="arc"/>
        </LoaderWrap>
    );
};
