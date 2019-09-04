import * as React from "react";
import { LoaderWrap } from "../LoaderWrap";
import "./SquareSplit.css";

export const SquareSplit = () => {
    return (
        <LoaderWrap className="square-split">
            <div className="square-1"/>
            <div className="square-2"/>
            <div className="square-3"/>
            <div className="square-4"/>
        </LoaderWrap>
    );
};
