import * as React from "react";
import { Component, Fragment, ReactNode } from "react";
import "../ComponentsStore.scss";
import { Button, EButtonType, CustomForm } from "../../components";
import { FormRenderProps } from "react-final-form";

export class ButtonsPage extends Component {
    render(): ReactNode {
        return (
            <div className="components-store">
                <CustomForm
                    submit={console.log}
                    data={{}}
                    render={this.renderForm}
                />
            </div>
        );
    }

    private renderForm(api: FormRenderProps, submitting?: boolean): ReactNode {
        return (
            <Fragment>
                <div className="components-store_8-column">
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            icon={EButtonType.PLUS}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            icon={EButtonType.PLUS}
                            isTiny={true}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            icon={EButtonType.ARROW_DOWN}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            icon={EButtonType.ARROW_DOWN}
                            isTiny={true}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            icon={EButtonType.PLUS}
                            isMini={true}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            icon={EButtonType.PLUS}
                            isTiny={true}
                            isMini={true}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            icon={EButtonType.ARROW_DOWN}
                            isMini={true}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            icon={EButtonType.ARROW_DOWN}
                            isTiny={true}
                            isMini={true}
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="components-store_8-column">
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            icon={EButtonType.PLUS}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            icon={EButtonType.PLUS}
                            isTiny={true}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            icon={EButtonType.ARROW_DOWN}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            icon={EButtonType.ARROW_DOWN}
                            isTiny={true}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            icon={EButtonType.PLUS}
                            isMini={true}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            icon={EButtonType.PLUS}
                            isTiny={true}
                            isMini={true}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            icon={EButtonType.ARROW_DOWN}
                            isMini={true}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            icon={EButtonType.ARROW_DOWN}
                            isTiny={true}
                            isMini={true}
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example primary"
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example small"
                            isTiny={true}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example icon"
                            icon={EButtonType.ARROW_DOWN}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example icon"
                            icon={EButtonType.ARROW_DOWN}
                            isTiny={true}
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example primary"
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example small"
                            isTiny={true}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example icon"
                            icon={EButtonType.ARROW_DOWN}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example icon"
                            icon={EButtonType.ARROW_DOWN}
                            isTiny={true}
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example primary"
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example small"
                            isTiny={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example icon"
                            icon={EButtonType.ARROW_DOWN}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example icon"
                            icon={EButtonType.ARROW_DOWN}
                            isTiny={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example primary"
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example small"
                            isTiny={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example icon"
                            icon={EButtonType.PLUS}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Example icon"
                            icon={EButtonType.PLUS}
                            isTiny={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example primary"
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example small"
                            isTiny={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example icon"
                            icon={EButtonType.ARROW_DOWN}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example icon"
                            icon={EButtonType.ARROW_DOWN}
                            isTiny={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example primary"
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example small"
                            isTiny={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example icon"
                            icon={EButtonType.PLUS}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Example icon"
                            icon={EButtonType.PLUS}
                            isTiny={true}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}
