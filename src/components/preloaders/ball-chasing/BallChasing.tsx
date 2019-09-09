import * as React from "react";
import { LoaderWrap } from "../LoaderWrap";
import "./BallChasing.css";

export const BallChasing = () => {
    return (
        <LoaderWrap className="ball-chasing">
            <div className="ball-1"/>
            <div className="ball-2"/>
        </LoaderWrap>
    );
};
