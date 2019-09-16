import * as React from "react";
import { FC, Fragment } from "react";
import { Field } from "react-final-form";
import { getError } from "../../../utils";
import "../Field.scss";
import "./SelectField.scss";
import { ISelectFieldProps } from "./ISelectFieldProps";
import Select from "react-select";

export const SelectField: FC<ISelectFieldProps> = (props) => {
    const {
        name, label, type, options, placeholder, value,
        visible = true, disabled = false, ...rest
    } = props;
    const customStyles = {
        indicatorSeparator: () => ({
            display: "none"
        }),
        control: (provided: any, state: any) => ({
            ...provided,
            outline: "none",
            borderColor: state.isFocused ? "#00077B !important" : "",
        }),
        valueContainer: (provided: any) => ({
            ...provided,
            padding: "2px 15px",
        }),
        menu: (provided: any) => ({
            ...provided,
            marginTop: 0,
            display: "block !important",
        }),
        menuList: (provided: any) => ({
            ...provided,
            padding: 0,
            display: "block !important",
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? "rgba(0,7,240,0.15)"
                : state.isFocused ? "#E4EAF7" : "#ffffff",
            color: "#000000",
            ':active': {
                backgroundColor: "#E4EAF7",
            },
        }),
    };
    if (!visible) {
        return null;
    }
    return (
        <div className="field select-field">
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
                                <div className="select" data-disable={disabled}>
                                    <Select
                                        value={value}
                                        defaultValue={value}
                                        options={options}
                                        isDisabled={disabled}
                                        placeholder={placeholder}
                                        isMulti={false}
                                        isSearchable={true}
                                        className={"field__input select-input"}
                                        classNamePrefix={"select-field"}
                                        styles={customStyles}

                                    />
                                    <div className="select-label" data-show={!!label}>{label}</div>
                                </div>
                                <span className="field__error text-danger">{error}</span>
                            </Fragment>
                        );
                    }
                }
            </Field>
        </div>
    );
};
