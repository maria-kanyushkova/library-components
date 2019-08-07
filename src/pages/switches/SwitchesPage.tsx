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
                            checked={get(api.values, "checkboxField", []).indexOf("first") !== -1}
                            label={"Label"}
                        />
                        <CheckboxField
                            name="checkboxFieldLabel"
                            value={"second"}
                            checked={get(api.values, "checkboxField", []).indexOf("second") !== -1}
                            label={"Label"}
                        />
                    </div>
                    <div className="components-store__item checkbox-fields">
                        <CheckboxField
                            name="checkboxField"
                            value={"first"}
                            checked={get(api.values, "checkboxField", []).indexOf("first") !== -1}
                        />
                        <CheckboxField
                            name="checkboxField"
                            value={"second"}
                            checked={get(api.values, "checkboxField", []).indexOf("second") !== -1}
                        />
                    </div>
                    <div className="components-store__item checkbox-fields">
                        <CheckboxField
                            name="checkboxFieldWithValue"
                            value={"first"}
                            checked={get(api.values, "checkboxFieldWithValue", []).indexOf("first") !== -1}
                        />
                        <CheckboxField
                            name="checkboxFieldWithValue"
                            value={"second"}
                            checked={get(api.values, "checkboxFieldWithValue", []).indexOf("second") !== -1}
                        />
                    </div>
                    <div className="components-store__item checkbox-fields">
                        <CheckboxField
                            name="checkboxFieldDisabled"
                            value={"first"}
                            disabled={true}
                            checked={get(api.values, "checkboxFieldDisabled", []).indexOf("first") !== -1}
                        />
                        <CheckboxField
                            name="checkboxFieldDisabled"
                            value={"second"}
                            disabled={true}
                            checked={get(api.values, "checkboxFieldDisabled", []).indexOf("second") !== -1}
                        />
                    </div>
                    <div className="components-store__item checkbox-fields">
                        <CheckboxField
                            name="checkboxFieldDisabledWithValue"
                            value={"first"}
                            disabled={true}
                            checked={get(api.values, "checkboxFieldDisabledWithValue", []).indexOf("first") !== -1}
                        />
                        <CheckboxField
                            name="checkboxFieldDisabledWithValue"
                            value={"second"}
                            disabled={true}
                            checked={get(api.values, "checkboxFieldDisabledWithValue", []).indexOf("second") !== -1}
                        />
                    </div>
                </div>
                <div className="components-store_5-column">
                    <div className="components-store__item radio-fields">
                        <RadioField
                            name="radioFieldLabel"
                            value={"first"}
                            checked={get(api.values, "checkboxField", "") === "first"}
                            label={"Label"}
                        />
                        <RadioField
                            name="radioFieldLabel"
                            value={"second"}
                            checked={get(api.values, "checkboxField", "") === "second"}
                            label={"Label"}
                        />
                    </div>
                    <div className="components-store__item radio-fields">
                        <RadioField
                            name="radioField"
                            value={"first"}
                            checked={get(api.values, "checkboxField", "") === "first"}
                        />
                        <RadioField
                            name="radioField"
                            value={"second"}
                            checked={get(api.values, "checkboxField", "") === "second"}
                        />
                    </div>
                    <div className="components-store__item radio-fields">
                        <RadioField
                            name="radioFieldWithValue"
                            value={"first"}
                            checked={get(api.values, "radioFieldWithValue", "") === "first"}
                        />
                        <RadioField
                            name="radioFieldWithValue"
                            value={"second"}
                            checked={get(api.values, "radioFieldWithValue", "") === "second"}
                        />
                    </div>
                    <div className="components-store__item radio-fields">
                        <RadioField
                            name="radioFieldDisabled"
                            value={"first"}
                            disabled={true}
                            checked={get(api.values, "radioFieldDisabled", "") === "first"}
                        />
                        <RadioField
                            name="radioFieldDisabled"
                            value={"second"}
                            disabled={true}
                            checked={get(api.values, "radioFieldDisabled", "") === "second"}
                        />
                    </div>
                    <div className="components-store__item radio-fields">
                        <RadioField
                            name="radioFieldDisabledWithValue"
                            value={"first"}
                            disabled={true}
                            checked={get(api.values, "radioFieldDisabledWithValue", "") === "first"}
                        />
                        <RadioField
                            name="radioFieldDisabledWithValue"
                            value={"second"}
                            disabled={true}
                            checked={get(api.values, "radioFieldDisabledWithValue", "") === "second"}
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
