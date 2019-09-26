import * as React from "react";
import { Component, Fragment, ReactNode } from "react";
import "../ComponentsStore.scss";
import { FormRenderProps } from "react-final-form";
import { get } from "lodash";
import { Button, CustomForm, LabelPosition, CheckboxField, RadioField, ToggleField } from "../../components";

export class SwitchesPage extends Component {
    render(): ReactNode {
        return (
            <div className="components-store">
                <CustomForm
                    submit={console.log}
                    data={{
                        toggleFieldValue: true,
                        toggleFieldDisabledValue: true,
                        checkboxFieldWithValue: ["first"],
                        checkboxFieldDisabledWithValue: ["second"],
                        radioFieldWithValue: "first",
                        radioFieldDisabledWithValue: "second",
                    }}
                    render={this.renderForm}
                />
            </div>
        );
    }

    private renderForm(api: FormRenderProps, submitting?: boolean): ReactNode {
        return (
            <Fragment>
                <div className="components-store_6-column toggle-items">
                    <div className="components-store__item">
                        <ToggleField
                            name="toggleFieldLabelFirst"
                            label={"Label"}
                            isSwitchLabel={true}
                            labelPosition={LabelPosition.LEFT}
                        />
                    </div>
                    <div className="components-store__item">
                        <ToggleField
                            name="toggleFieldLabelSecond"
                            label={"Label"}
                            isSwitchLabel={true}
                            labelPosition={LabelPosition.RIGHT}
                        />
                    </div>
                    <div className="components-store__item">
                        <ToggleField
                            name="toggleField"
                        />
                    </div>
                    <div className="components-store__item">
                        <ToggleField
                            name="toggleFieldValue"
                            label={"Label"}
                        />
                    </div>
                    <div className="components-store__item">
                        <ToggleField
                            name="toggleFieldDisabled"
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item">
                        <ToggleField
                            name="toggleFieldDisabledValue"
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="components-store_5-column">
                    <div className="components-store__item checkbox-fields">
                        <CheckboxField
                            name="checkboxFieldLabel"
                            value={"first"}
                            label={"Label"}
                        />
                        <CheckboxField
                            name="checkboxFieldLabel"
                            value={"second"}
                            label={"Label"}
                        />
                    </div>
                    <div className="components-store__item checkbox-fields">
                        <CheckboxField
                            name="checkboxField"
                            value={"first"}
                        />
                        <CheckboxField
                            name="checkboxField"
                            value={"second"}
                        />
                    </div>
                    <div className="components-store__item checkbox-fields">
                        <CheckboxField
                            name="checkboxFieldWithValue"
                            value={"first"}
                        />
                        <CheckboxField
                            name="checkboxFieldWithValue"
                            value={"second"}
                        />
                    </div>
                    <div className="components-store__item checkbox-fields">
                        <CheckboxField
                            name="checkboxFieldDisabled"
                            value={"first"}
                            disabled={true}
                        />
                        <CheckboxField
                            name="checkboxFieldDisabled"
                            value={"second"}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item checkbox-fields">
                        <CheckboxField
                            name="checkboxFieldDisabledWithValue"
                            value={"first"}
                            disabled={true}
                        />
                        <CheckboxField
                            name="checkboxFieldDisabledWithValue"
                            value={"second"}
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="components-store_5-column">
                    <div className="components-store__item radio-fields">
                        <RadioField
                            name="radioFieldLabel"
                            value={"first"}
                            label={"Label"}
                        />
                        <RadioField
                            name="radioFieldLabel"
                            value={"second"}
                            label={"Label"}
                        />
                    </div>
                    <div className="components-store__item radio-fields">
                        <RadioField
                            name="radioField"
                            value={"first"}
                        />
                        <RadioField
                            name="radioField"
                            value={"second"}
                        />
                    </div>
                    <div className="components-store__item radio-fields">
                        <RadioField
                            name="radioFieldWithValue"
                            value={"first"}
                        />
                        <RadioField
                            name="radioFieldWithValue"
                            value={"second"}
                        />
                    </div>
                    <div className="components-store__item radio-fields">
                        <RadioField
                            name="radioFieldDisabled"
                            value={"first"}
                            disabled={true}
                        />
                        <RadioField
                            name="radioFieldDisabled"
                            value={"second"}
                            disabled={true}
                        />
                    </div>
                    <div className="components-store__item radio-fields">
                        <RadioField
                            name="radioFieldDisabledWithValue"
                            value={"first"}
                            disabled={true}
                        />
                        <RadioField
                            name="radioFieldDisabledWithValue"
                            value={"second"}
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
