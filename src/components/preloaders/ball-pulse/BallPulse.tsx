import * as React from "react";
import { LoaderWrap } from "../LoaderWrap";
import "./BallPulse.css";

export const BallPulse = () => {
    return (
        <LoaderWrap className="ball-pulse">
            <div className="ball"/>
        </LoaderWrap>
    );
};
