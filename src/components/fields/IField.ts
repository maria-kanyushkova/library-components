import { FieldProps } from "react-final-form";

export interface IField<Value, T extends HTMLElement = HTMLElement> extends FieldProps<Value, T> {
    label?: string;
    placeholder?: string;
    mask?: string;
    visible?: boolean
    disabled?: boolean;
}
