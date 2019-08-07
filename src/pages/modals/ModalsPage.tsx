import * as React from "react";
import { Component, ReactNode } from "react";
import "../ComponentsStore.scss";
import { Button, Popup } from "../../components";

export class ModalsPage extends Component {
    private popup: Popup  = new Popup();

    render(): ReactNode {
        return (
            <div className="components-store">
                <div className="components-store_1-column">
                    <Button
                        onClick={() => {
                            this.openPopup();
                        }}
                        type="primary"
                        text="Открыть popup"
                    />
                </div>
                {this.popup.draw()}
            </div>
        );
    }

    openPopup() {
        this.popup.show();
        this.forceUpdate();
    }
}
