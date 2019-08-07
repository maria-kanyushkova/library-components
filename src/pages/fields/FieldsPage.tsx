import * as React from "react";
import { Component, Fragment, ReactNode } from "react";
import "../ComponentsStore.scss";
import { FormRenderProps } from "react-final-form";
import { CustomForm, Button, InputField, TextareaField } from "../../components";

export class FieldsPage extends Component {
    render(): ReactNode {
        return (
            <div className="components-store">
                <CustomForm
                    submit={console.log}
                    data={{
                        inputFieldWithValue: "Value",
                        inputFieldDisabledWithValue: "Value",

                        inputFieldWithValueWithIcons: "Value",
                        inputFieldDisabledWithValueWithIcons: "Value",

                        inputFieldWithValueSmall: "Value",
                        inputFieldDisabledWithValueSmall: "Value",

                        inputFieldWithValueWithIconsSmall: "Value",
                        inputFieldDisabledWithValueWithIconsSmall: "Value",

                        textareaFieldWithValue: "Value",
                        textareaFieldDisabledWithValue: "Value",
                    }}
                    validateData={() => [
                        { type: "inputFieldError", codes: [] },
                        { type: "inputFieldErrorWithIcons", codes: [] },
                        { type: "inputFieldErrorSmall", codes: [] },
                        { type: "inputFieldErrorWithIconsSmall", codes: [] },

                        { type: "textareaFieldError", codes: [] },
                    ]}
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
                        <TextareaField
                            name={"textareaFieldEmpty"}
                            label={"Textarea empty"}
                            placeholder={"Helper"}
                        />
                    </div>
                    <div className="components-store__item">
                        <TextareaField
                            name={"textareaFieldError"}
                            label={"Textarea error"}
                            placeholder={"Helper"}
                        />
                    </div>
                    <div className="components-store__item">
                        <TextareaField
                            name={"textareaFieldWithValue"}
                            label={"Textarea with value"}
                            placeholder={"Helper"}
                        />
                    </div>
                    <div className="components-store__item">
                        <TextareaField
                            name={"textareaFieldDisabledWithValue"}
                            label={"Textarea disabled with value"}
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldEmptyWithIconsSmall"}
                            label={"Input field empty"}
                            placeholder={"Helper"}
                            icons={true}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldErrorWithIconsSmall"}
                            label={"Input field error"}
                            placeholder={"Helper"}
                            icons={true}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldWithValueWithIconsSmall"}
                            label={"Input field with value"}
                            icons={true}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldDisabledWithValueWithIconsSmall"}
                            label={"Input field disabled with value"}
                            disabled={true}
                            icons={true}
                            isMini={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldEmptySmall"}
                            label={"Input field empty"}
                            placeholder={"Helper"}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldErrorSmall"}
                            label={"Input field error"}
                            placeholder={"Helper"}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldWithValueSmall"}
                            label={"Input field with value"}
                            isMini={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldDisabledWithValueSmall"}
                            label={"Input field disabled with value"}
                            disabled={true}
                            isMini={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldEmptyWithIcons"}
                            label={"Input field empty"}
                            placeholder={"Helper"}
                            icons={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldErrorWithIcons"}
                            label={"Input field error"}
                            placeholder={"Helper"}
                            icons={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldWithValueWithIcons"}
                            label={"Input field with value"}
                            icons={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldDisabledWithValueWithIcons"}
                            label={"Input field disabled with value"}
                            disabled={true}
                            icons={true}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldEmpty"}
                            label={"Input field empty"}
                            placeholder={"Helper"}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldError"}
                            label={"Input field error"}
                            placeholder={"Helper"}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldWithValue"}
                            label={"Input field with value"}
                        />
                    </div>
                    <div className="components-store__item">
                        <InputField
                            name={"inputFieldDisabledWithValue"}
                            label={"Input field disabled with value"}
                            disabled={true}
                        />
                    </div>
                </div>
                <Button
                    disabled={!submitting}
                    onClick={() => api.handleSubmit()}
                    type="primary"
                    text="Значения полей"
                />
            </Fragment>
        );
    }
}
