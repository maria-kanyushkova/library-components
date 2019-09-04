import * as React from "react";
import { LoaderWrapper } from "../LoaderWrapper";
import "./BallChasing.css";

export const BallChasing = () => {
    return (
        <LoaderWrapper className="ball-chasing">
            <div className="ball-1"/>
            <div className="ball-2"/>
        </LoaderWrapper>
    );
};
