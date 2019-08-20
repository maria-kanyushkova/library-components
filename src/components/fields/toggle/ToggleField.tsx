import * as React from "react";
import { FC, Fragment } from "react";
import { Field } from "react-final-form";
import { IField } from "../IField";
import { getError } from "../../../utils";
import "../Field.scss";
import "./Toggle.scss";
import { LabelPosition } from "./LabelPosition";

interface IToggleFieldProps extends IField<string> {
    labelPosition?: LabelPosition;
    isSwitchLabel?: boolean;
}

export const ToggleField: FC<IToggleFieldProps> = ({
    name, label, placeholder, mask, type, validate,
    isVisible = true, disabled = false, labelPosition = LabelPosition.LEFT, isSwitchLabel = false,  ...rest
                                                   }) => {
    return (
        <div className="form-group" data-visible={isVisible}>
            <Field
                name={name}
                type="checkbox"
                {...rest}
            >
                {
                    (props) => {
                        const error = getError(props, type);
                        return (
                            <Fragment>
                                <div className="toggle-field">
                                    <div className="toggle__value" data-show={labelPosition === LabelPosition.LEFT}>
                                        {isSwitchLabel ? label : props.input.value ? "Вкл." : "Выкл."}
                                    </div>
                                    <span className="toggle" data-disable={disabled}>
                                        <input
                                            type="checkbox"
                                            className="form-control"
                                            disabled={disabled}
                                            {...props.input}
                                        />
                                        <div className="toggle__item"/>
                                    </span>
                                    <div className="toggle__value" data-show={labelPosition === LabelPosition.RIGHT}>
                                        {label}
                                    </div>
                                </div>
                                <span className="form-text text-danger">{error}</span>
                            </Fragment>
                        );
                    }
                }
            </Field>
        </div>
    );
};
