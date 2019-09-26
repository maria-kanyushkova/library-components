import * as React from "react";
import { FC, Fragment, ReactText } from "react";
import { Field, FieldRenderProps } from "react-final-form";
import { getError } from "../../../utils";
import "../Field.scss";
import "./SelectField.scss";
import Select from "react-select";
import { ValueType } from "react-select/src/types";
import { isEmpty } from "lodash";
import { IField } from "../IField";
import { IItem } from "../../../interfaces/field";

type TSelectField = ReactText;

export interface ISelectFieldProps extends IField<TSelectField, HTMLElement> {
    options: IItem[];
}

export const SelectField: FC<ISelectFieldProps> = (props) => {
    const {
        name, label, type, options, placeholder, defaultValue,
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
                {...rest}
            >
                {
                    (fieldProps: FieldRenderProps<TSelectField, HTMLElement>) => {
                        const { onChange, value } = fieldProps.input;
                        const error = getError(fieldProps, type);
                        const onChangeValue = (option: ValueType<IItem>) => {
                            const value = isEmpty(option) ? void 0 : (option as IItem).value;
                            onChange(value);
                        };
                        const convertValue = (currentValue: TSelectField): ValueType<IItem> => {
                             const option = options.find((option) => option.value === currentValue);
                             return isEmpty(option) ? void 0 : option;
                        };
                        return (
                            <Fragment>
                                <div className="select" data-disable={disabled}>
                                    <Select
                                        value={convertValue(value)}
                                        options={options}
                                        isDisabled={disabled}
                                        placeholder={placeholder}
                                        isMulti={false}
                                        isSearchable={true}
                                        className={"field__input select-input"}
                                        classNamePrefix={"select-field"}
                                        styles={customStyles}
                                        onChange={onChangeValue}
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
