import * as React from "react";
import { LoaderWrap } from "../LoaderWrap";
import "./CirclePulseMultiple.css";

export const CirclePulseMultiple = () => {
    return (
        <LoaderWrap className="circle-pulse-multiple">
            <div className="circle-1"/>
            <div className="circle-2"/>
            <div className="circle-3"/>
        </LoaderWrap>
    );
};
