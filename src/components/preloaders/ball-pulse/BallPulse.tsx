import * as React from "react";
import { LoaderWrapper } from "../LoaderWrapper";
import "./BallPulse.css";

export const BallPulse = () => {
    return (
        <LoaderWrapper className="ball-pulse">
            <div className="ball"/>
        </LoaderWrapper>
    );
};
