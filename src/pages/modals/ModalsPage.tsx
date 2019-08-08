import * as React from "react";
import { Component, ReactNode } from "react";
import { Popup } from "../../components/popup";
import { Alert, EAlertType } from "../../components/alert";
import { Button } from "../../components/button";

interface IModalsPageState {
    alert_1: boolean,
    alert_2: boolean,
    alert_3: boolean,
    alert_4: boolean,
}

export class ModalsPage extends Component<{}, IModalsPageState> {
    state = {
        alert_1: false,
        alert_2: false,
        alert_3: false,
        alert_4: false,
    };

    private popup: Popup = new Popup();

    render(): ReactNode {
        return (
            <div className="components-store">
                <div className="components-store_1-column">
                    <Button
                        onClick={ () => {
                            this.popup.show();
                            this.forceUpdate();
                        } }
                        type="primary"
                        text="Открыть popup"
                    />
                    { this.popup.draw() }
                </div>
                <div className="components-store_4-column" style={ { marginTop: 200 } }>
                    <Alert
                        title="Alert"
                        type={ EAlertType.NONE }
                        isShow={ this.state.alert_1 }
                        changeShow={ () => this.setState({ ...this.state, alert_1: false }) }
                    />
                    <Alert
                        title="Alert"
                        type={ EAlertType.NONE }
                        isShow={ this.state.alert_2 }
                        changeShow={ () => this.setState({ ...this.state, alert_2: false }) }
                    />
                    <Alert
                        title="Alert"
                        type={ EAlertType.NONE }
                        isShow={ this.state.alert_3 }
                        changeShow={ () => this.setState({ ...this.state, alert_3: false }) }
                    />
                    <Alert
                        title="Alert"
                        type={ EAlertType.NONE }
                        isShow={ this.state.alert_4 }
                        changeShow={ () => this.setState({ ...this.state, alert_4: false }) }
                    />
                    <div className="components-store__item">
                        <Button
                            onClick={ () => {
                                this.setState({ ...this.state, alert_1: !this.state.alert_1 })
                            } }
                            type="primary"
                            text="None"
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            onClick={ () => {
                                this.setState({ ...this.state, alert_2: !this.state.alert_2 })
                            } }
                            type="primary"
                            text="Negative"
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            onClick={ () => {
                                this.setState({ ...this.state, alert_3: !this.state.alert_3 })
                            } }
                            type="primary"
                            text="Positive"
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            onClick={ () => {
                                this.setState({ ...this.state, alert_4: !this.state.alert_4 })
                            } }
                            type="primary"
                            text="Neutral"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
