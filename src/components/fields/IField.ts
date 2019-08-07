import { FieldProps } from "react-final-form";

export interface IField<Value, T extends HTMLElement = HTMLElement> extends FieldProps<Value, T> {
    label?: string;
    placeholder?: string;
    mask?: string;
    isVisible?: boolean;
    disabled?: boolean;
    icons?: boolean;
    isMini?: boolean;
}
