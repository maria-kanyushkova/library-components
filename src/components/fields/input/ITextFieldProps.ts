import { IField } from "../IField";
import { ReactNode } from "react";

type TFieldIcon = ReactNode | string;

export interface ITextFieldProps extends IField<string|number> {
	mask?: string;
	minimize?: boolean;
	icons?: {
		start?: TFieldIcon,
		end?: TFieldIcon,
	}
}