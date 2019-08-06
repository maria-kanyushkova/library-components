import * as React from "react";
import { FC, Fragment } from "react";
import { Field } from "react-final-form";
import { IField } from "../IField";
import { getError } from "../../../utils";
import "../Field.scss";
import "./TextareaField.scss";
import { Nullable } from "../../../interfaces";
import formatStringByPattern from "format-string-by-pattern";
import autosize from "autosize";

type TextareaType = string;

export const TextareaField: FC<IField<TextareaType>> = ({
    name, label, placeholder, mask, type, validate,
    isVisible = true, disabled = false, ...rest
                                          }) => {
    const validateField = (value: TextareaType, allValues: object): Nullable<TextareaType> => {
        if (validate) {
            return validate(value, allValues);
        }
        return void 0;
    };

    const field = document.querySelector(`textarea[name=${name}]`);
    if (!!field) {
        autosize(field);
    }

    return (
        <div className="form-group textarea-container" data-visible={isVisible}>
            <Field
                name={name}
                validate={validateField}
                format={(value) => {
                    if (!mask) {
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
                                <textarea
                                    className={`form-control ${!!error ? "form-control_error" : ""}`}
                                    disabled={disabled}
                                    rows={3}
                                    {...props.input}
                                    {...{ placeholder, type }}
                                />
                                <label className="form-label">{label}</label>
                                <span className="form-text">{error}</span>
                            </Fragment>
                        );
                    }
                }
            </Field>
        </div>
    );
};
