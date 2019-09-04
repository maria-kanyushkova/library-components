import * as React from "react";
import { LoaderWrapper } from "../LoaderWrapper";
import "./CirclePulse.css";

export const CirclePulse = () => {
    return (
        <LoaderWrapper className="circle-pulse">
            <div className="circle"/>
        </LoaderWrapper>
    );
};
