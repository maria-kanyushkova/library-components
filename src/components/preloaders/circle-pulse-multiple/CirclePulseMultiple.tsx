import * as React from "react";
import { LoaderWrapper } from "../LoaderWrapper";
import "./CirclePulseMultiple.css";

export const CirclePulseMultiple = () => {
    return (
        <LoaderWrapper className="circle-pulse-multiple">
            <div className="circle-1"/>
            <div className="circle-2"/>
            <div className="circle-3"/>
        </LoaderWrapper>
    );
};
