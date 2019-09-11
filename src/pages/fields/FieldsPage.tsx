import * as React from "react";
import { Component, Fragment, ReactNode } from "react";
import "../ComponentsStore.scss";
import { FormRenderProps } from "react-final-form";
import { Button, CustomForm, TextareaField, TextField } from "../../components";
import { SelectField } from "../../components/fields/Select";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
];

export class FieldsPage extends Component {
    render(): ReactNode {
        return (
            <div className="components-store">
                <CustomForm
                    submit={ console.log }
                    data={ {
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

                        selectFieldWithValue: options[2],
                        selectFieldDisabledWithValue: options[2],
                    } }
                    validateData={ () => [
                        { type: "inputFieldError", codes: [] },
                        { type: "inputFieldErrorWithIcons", codes: [] },
                        { type: "inputFieldErrorSmall", codes: [] },
                        { type: "inputFieldErrorWithIconsSmall", codes: [] },

                        { type: "textareaFieldError", codes: [] },

                        { type: "selectFieldError", codes: [] },
                    ] }
                    render={ this.renderForm }
                />
            </div>
        );
    }

    private renderForm(api: FormRenderProps, submitting?: boolean): ReactNode {
        return (
            <Fragment>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <SelectField
                            name={ "selectFieldEmpty" }
                            label={ "Select empty" }
                            placeholder={ "Select" }
                            options={options}
                        />
                    </div>
                    <div className="components-store__item">
                        <SelectField
                            name={ "selectFieldError" }
                            label={ "Select error" }
                            placeholder={ "Select" }
                            options={options}
                        />
                    </div>
                    <div className="components-store__item">
                        <SelectField
                            name={ "selectFieldWithValue" }
                            label={ "Select with value" }
                            placeholder={ "Select" }
                            options={options}
                        />
                    </div>
                    <div className="components-store__item">
                        <SelectField
                            name={ "selectFieldDisabledWithValue" }
                            label={ "Select disabled with value" }
                            disabled={ true }
                            options={options}
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <TextareaField
                            name={ "textareaFieldEmpty" }
                            label={ "Textarea empty" }
                            placeholder={ "Helper" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextareaField
                            name={ "textareaFieldError" }
                            label={ "Textarea error" }
                            placeholder={ "Helper" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextareaField
                            name={ "textareaFieldWithValue" }
                            label={ "Textarea with value" }
                            placeholder={ "Helper" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextareaField
                            name={ "textareaFieldDisabledWithValue" }
                            label={ "Textarea disabled with value" }
                            disabled={ true }
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldEmptyWithIconsSmall" }
                            label={ "Input field empty" }
                            placeholder={ "Helper" }
                            minimize={ true }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldErrorWithIconsSmall" }
                            label={ "Input field error" }
                            placeholder={ "Helper" }
                            minimize={ true }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldWithValueWithIconsSmall" }
                            label={ "Input field with value" }
                            minimize={ true }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldDisabledWithValueWithIconsSmall" }
                            label={ "Input field disabled with value" }
                            disabled={ true }
                            minimize={ true }
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldEmptySmall" }
                            label={ "Input field empty" }
                            placeholder={ "Helper" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldErrorSmall" }
                            label={ "Input field error" }
                            placeholder={ "Helper" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldWithValueSmall" }
                            label={ "Input field with value" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldDisabledWithValueSmall" }
                            label={ "Input field disabled with value" }
                            disabled={ true }
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldEmptyWithIcons" }
                            label={ "Input field empty" }
                            placeholder={ "Helper" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldErrorWithIcons" }
                            label={ "Input field error" }
                            placeholder={ "Helper" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldWithValueWithIcons" }
                            label={ "Input field with value" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldDisabledWithValueWithIcons" }
                            label={ "Input field disabled with value" }
                            disabled={ true }
                        />
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldEmpty" }
                            label={ "Input field empty" }
                            placeholder={ "Helper" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldError" }
                            label={ "Input field error" }
                            placeholder={ "Helper" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldWithValue" }
                            label={ "Input field with value" }
                        />
                    </div>
                    <div className="components-store__item">
                        <TextField
                            name={ "inputFieldDisabledWithValue" }
                            label={ "Input field disabled with value" }
                            disabled={ true }
                        />
                    </div>
                </div>
                <Button
                    disabled={ !submitting }
                    onClick={ () => api.handleSubmit() }
                    type="primary"
                    text="Значения полей"
                />
            </Fragment>
        );
    }
}
