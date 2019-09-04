import * as React from "react";
import { LoaderWrap } from "../LoaderWrap";
import "./BallPulseDouble.css";

export const BallPulseDouble = () => {
    return (
        <LoaderWrap className="ball-pulse-double">
            <div className="ball-1"/>
            <div className="ball-2"/>
        </LoaderWrap>
    );
};
