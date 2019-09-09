import * as React from "react";
import { LoaderWrap } from "../LoaderWrap";
import "./WaveSpread.css";

export const WaveSpread = () => {
    return (
        <LoaderWrap className="wave-spread">
            <div className="line-1"/>
            <div className="line-2"/>
            <div className="line-3"/>
            <div className="line-4"/>
            <div className="line-5"/>
        </LoaderWrap>
    );
};
