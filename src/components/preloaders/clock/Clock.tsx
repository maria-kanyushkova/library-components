import * as React from "react";
import { LoaderWrapper } from "../LoaderWrapper";
import "./Clock.css";

export const Clock = () => {
    return (
        <LoaderWrapper className="clock">
            <div className="arc"/>
        </LoaderWrapper>
    );
};
