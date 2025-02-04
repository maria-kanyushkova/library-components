import * as React from "react";
import { FC, Fragment } from "react";
import { Field } from "react-final-form";
import { IField } from "../IField";
import { getError } from "../../../utils";
import "../Field.scss";
import "./Checkbox.scss";

export const CheckboxField: FC<IField<string>> = (props) => {
    const {
        name, label, isVisible = true, disabled = false, type, ...rest
    } = props;
    return (
        <div className="form-group checkbox-field" data-visible={isVisible}>
            <Field
                name={name}
                type="checkbox"
                {...rest}
            >
                {
                    (fieldProps) => {
                        const error = getError(fieldProps, type);
                        return (
                            <Fragment>
                                    <span className="checkbox" data-disable={disabled}>
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            disabled={disabled}
                                            {...fieldProps.input}
                                        />
                                        <div className="checkbox__item"/>
                                        <div className="checkbox-label" data-show={!!label}>{label}</div>
                                    </span>
                                <span className="form-text text-danger">{error}</span>
                            </Fragment>
                        );
                    }
                }
            </Field>
        </div>
    );
};
