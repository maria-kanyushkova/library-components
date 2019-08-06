import * as React from "react";
import { FC, Fragment, ReactText } from "react";
import { Field } from "react-final-form";
import { IField } from "../IField";
import { getError } from "../../../utils";
import "../Field.scss";
import "./InputField.scss";
import { isString } from "lodash";
import { Nullable } from "../../../interfaces";
import formatStringByPattern from "format-string-by-pattern";

export const InputField: FC<IField<string|number>> = ({
    name, label, placeholder, mask, type, validate,
    isVisible = true, disabled = false, icons = false, isMini = false, ...rest
                                       }) => {
    const validateField = (value: ReactText, allValues: object): Nullable<ReactText> => {
        if (disabled) {
            return void 0;
        }
        if (validate) {
            return validate(value, allValues);
        }
        return void 0;
    };
    return (
        <div className="form-group input-field" data-visible={isVisible} data-icon={icons} data-mini={isMini}>
            <Field
                name={name}
                validate={validateField}
                format={(value) => {
                    if (!mask) {
                        if (isString(value)) {
                            return value.replace(/\s+/g, " ");
                        }
                        return value;
                    }
                    return formatStringByPattern(mask, value);
                }}
                {...rest}
            >
                {
                    (props) => {
                        const error = getError(props, type);
                        return (
                            <Fragment>
                                <div>
                                    <input
                                        className={`form-control ${!!error ? "form-control_error" : ""}`}
                                        disabled={disabled}
                                        {...props.input}
                                        {...{ placeholder, type }}
                                    />
                                    <label className="form-label">{label}</label>
                                    <span className="icon-before" />
                                    <span className="icon-after" />
                                </div>
                                <span className="form-text">{error}</span>
                            </Fragment>
                        );
                    }
                }
            </Field>
        </div>
    );
};
