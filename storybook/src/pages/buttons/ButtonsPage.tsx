import * as React from "react";
import { Component, Fragment, ReactNode } from "react";
import { FormRenderProps } from "react-final-form";
import { CustomForm } from "../../components/custom-form";
import { Button, EButtonType } from "../../components/button";

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
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <Button
                            type="floating"
                            icon={EButtonType.ARROW_TOP}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="floating"
                            icon={EButtonType.ARROW_TOP}
                            isMini={true}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item double-buttons">
                        <Button
                            type="primary"
                            icon={EButtonType.ARROW_LEFT}
                            isMini={true}
                            isDouble={true}
                        />
                        <Button
                            type="primary"
                            icon={EButtonType.ARROW_RIGHT}
                            isMini={true}
                            isDouble={true}
                        />
                    </div>
                    <div className="components-store__item double-buttons">
                        <Button
                            type="primary"
                            icon={EButtonType.ARROW_LEFT}
                            isMini={true}
                            isDouble={true}
                            disabled={true}
                        />
                        <Button
                            type="primary"
                            icon={EButtonType.ARROW_RIGHT}
                            isMini={true}
                            isDouble={true}
                            disabled={true}
                        />
                    </div>
                </div>
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
                            type="floating"
                            text="Floating"
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="floating"
                            text="Icon"
                            icon={EButtonType.ARROW_RIGHT}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="floating"
                            text="Disabled"
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="floating"
                            text="Disabled icon"
                            icon={EButtonType.ARROW_RIGHT}
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Disabled secondary"
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Tiny"
                            isTiny={true}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Icon"
                            icon={EButtonType.ARROW_DOWN}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Tiny icon"
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
                            text="Disabled primary"
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Tiny"
                            isTiny={true}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Icon"
                            icon={EButtonType.ARROW_DOWN}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Tiny icon"
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
                            text="Secondary icon"
                            icon={EButtonType.ARROW_DOWN}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Tiny icon"
                            icon={EButtonType.ARROW_DOWN}
                            isTiny={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Icon"
                            icon={EButtonType.PLUS}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Tiny icon"
                            icon={EButtonType.PLUS}
                            isTiny={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Secondary"
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="secondary"
                            text="Tiny"
                            isTiny={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Primary"
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Tiny"
                            isTiny={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Primary icon"
                            icon={EButtonType.ARROW_DOWN}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Tiny icon"
                            icon={EButtonType.ARROW_DOWN}
                            isTiny={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Primary icon"
                            icon={EButtonType.PLUS}
                        />
                    </div>
                    <div className="components-store__item">
                        <Button
                            type="primary"
                            text="Tiny icon"
                            icon={EButtonType.PLUS}
                            isTiny={true}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}
