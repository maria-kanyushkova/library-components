import * as React from "react";
import { FC, Fragment } from "react";
import { Field } from "react-final-form";
import { IField } from "../IField";
import { getError } from "../../../utils";
import "../Field.scss";
import "./Radio.scss";

export const RadioField: FC<IField<string>> = (props) => {
    const {
        name, label, type,
        isVisible = true, disabled = false, ...rest
    } = props;
    return (
        <div className="form-group radio-field" data-visible={isVisible}>
            <Field
                name={name}
                type="radio"
                {...rest}
            >
                {
                    (fieldProps) => {
                        const error = getError(fieldProps, type);
                        return (
                            <Fragment>
                                <div className="radio" data-disable={disabled}>
                                    <input
                                        className="form-control"
                                        type="radio"
                                        disabled={disabled}
                                        {...fieldProps.input}
                                    />
                                    <div className="radio__item"/>
                                    <div className="radio-label" data-show={!!label}>{label}</div>
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
