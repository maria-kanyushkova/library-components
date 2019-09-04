import * as React from "react";
import { LoaderWrapper } from "../LoaderWrapper";
import "./BallPulseDouble.css";

export const BallPulseDouble = () => {
    return (
        <LoaderWrapper className="ball-pulse-double">
            <div className="ball-1"/>
            <div className="ball-2"/>
        </LoaderWrapper>
    );
};
