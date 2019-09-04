import * as React from "react";
import { LoaderWrapper } from "../LoaderWrapper";
import "./SquareSplit.css";

export const SquareSplit = () => {
    return (
        <LoaderWrapper className="square-split">
            <div className="square-1"/>
            <div className="square-2"/>
            <div className="square-3"/>
            <div className="square-4"/>
        </LoaderWrapper>
    );
};
