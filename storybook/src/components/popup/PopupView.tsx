import * as React from "react";
import { Component, createRef, RefObject } from "react";
import { Popup } from "./Popup";
import { autobind } from "core-decorators";
import "./PopupView.scss";
import { Button } from "../button";

interface IPopupViewProps {
    popup: Popup;
    close: () => void;
    title: string;
}

@autobind
export class PopupView extends Component<IPopupViewProps> {
    readonly ref: RefObject<HTMLDivElement> = createRef();

    render(): React.ReactElement {
        const { children, close, title = "Some title" } = this.props;
        return (
            <div ref={this.ref} className="popup-container">
                <div className="overlay" onClick={close}/>
                <div className="popup">
                    <div className="popup-header header">
                        <div className="header__title">{title}</div>
                        <div className="header__close" onClick={close} />
                    </div>
                    <div className="popup-body">
                        {children}
                    </div>
                    <div className="popup-footer">
                        <Button
                            onClick={close}
                            type="primary"
                            text="Some action"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
