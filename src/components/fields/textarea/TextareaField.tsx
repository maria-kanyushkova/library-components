import * as React from "react";
import { FC, Fragment } from "react";
import { Field } from "react-final-form";
import { IField } from "../IField";
import { getError } from "../../../utils";
import "./TextareaField.scss";
import { Nullable } from "../../../interfaces";
import formatStringByPattern from "format-string-by-pattern";
import autosize from "autosize";

type TextareaType = string;

export const TextareaField: FC<IField<TextareaType>> = ({
    name, label, placeholder, mask, type, validate,
    visible = true, disabled = false, ...rest
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

    if (!visible) {
        return null;
    }

    return (
        <div className="field textarea-field">
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
								<label className="field__label">{label}</label>
								<div className="field-input-container">
                                      <textarea
                                          className={`textarea-field__input field__input input ${!!error ? "input_error" : ""}`}
                                          disabled={disabled}
                                          rows={3}
                                          {...props.input}
                                          {...{ placeholder, type }}
                                      />
								</div>
                                <span className="field__error">{error}</span>
                            </Fragment>
                        );
                    }
                }
            </Field>
        </div>
    );
};
