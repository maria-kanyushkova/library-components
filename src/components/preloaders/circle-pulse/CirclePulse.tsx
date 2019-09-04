import * as React from "react";
import { LoaderWrap } from "../LoaderWrap";
import "./CirclePulse.css";

export const CirclePulse = () => {
    return (
        <LoaderWrap className="circle-pulse">
            <div className="circle"/>
        </LoaderWrap>
    );
};
