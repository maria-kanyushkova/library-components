import * as React from "react";
import { FC, Fragment, ReactText } from "react";
import { Nullable } from "../../../interfaces";
import { Field } from "react-final-form";
import formatStringByPattern from "format-string-by-pattern";
import { getError } from "../../../utils";
import "./TextField.scss";
import { isString } from "lodash";
import { ITextFieldProps } from "./ITextFieldProps";
import classNames from "classnames";

function formatValue(value: string, maxLength?: number): string {
    if (!value) {
        return value;
    }
    if (maxLength && value.length === maxLength) {
        return value.substring(0, value.length - 1);
    }
    return value;
}

export const TextField: FC<ITextFieldProps> = ({
                                                   name, label, placeholder, mask, type, validate,
                                                   visible = true, disabled = false, icons = {}, minimize, ...rest
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
    if (!visible) {
        return null;
    }
    return (
        <div className="field text-field" data-mini={ minimize }>
            <Field
                name={ name }
                validate={ validateField }
                format={ (value) => {
                    if (!mask) {
                        if (isString(value)) {
                            return value.replace(/\s+/g, " ");
                        }
                        return value;
                    }
                    return formatStringByPattern(mask, value);
                } }
                parse={(value) => {
                    if (!mask) {
                        return value;
                    }
                    return formatValue(value, mask.length + 1);
                }}
                { ...rest }
            >
                {
                    (props) => {
                        const error = getError(props, type);
                        const { start, end } = icons;
                        const { active } = props.meta;
                        const iconClasses = classNames({
                            ["text-field__icon"]: true,
                            ["icon"]: true,
                            ["icon_active"]: active,
                        });
                        return (
                            <Fragment>
                                <label className="field__label">{ label }</label>
                                <div className="field-input-container">
                                    {
                                        start && <span className={ `${ iconClasses } text-field__icon_before` }>
											{ start }
										</span>
                                    }
                                    <input
                                        className={ `text-field__input field__input input ${ !!error ? "input_error" : "" }` }
                                        disabled={ disabled }
                                        { ...props.input }
                                        { ...{ placeholder, type } }
                                    />
                                    {
                                        end && <span className={ `${ iconClasses } text-field__icon_after` }>
											{ end }
										</span>
                                    }
                                </div>
                                <span className="field__error">{ error }</span>
                            </Fragment>
                        );
                    }
                }
            </Field>
        </div>
    );
};
