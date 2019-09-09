import * as React from "react";
import { Component, ReactNode, Fragment } from "react";
import { Form, FormRenderProps } from "react-final-form";
import { FormApi, FormState, ValidationErrors } from "final-form";
import { FieldErrors, Nullable, IError, IFieldError } from "../../interfaces";
import { autobind } from "core-decorators";
import { isEmpty, isObject, merge, stubObject, values, toLower, set, get } from "lodash";
import { Subject } from "rxjs";
import EventListener from "react-event-listener";
import { getFieldErrorByCode } from "../../utils";

interface ICustomFormProps<T> {
	data?: T | Partial<T>;
	validateOnBlur?: boolean;
	keepDirtyOnReinitialize?: boolean;

	render(api: FormRenderProps<T>, submitting?: boolean): ReactNode;

	submit(data: T, form?: FormApi<T>): Promise<Nullable<object>> | object | void;

	validate?(values: T): ValidationErrors;
}

export const CustomForm = <T extends object>(props: ICustomFormProps<T>) => {
	const {submit, render, data, validateOnBlur, validate, keepDirtyOnReinitialize = true} = props;

	const hasErrors = (errors: object): boolean => {
		return !!values(errors)
			.find((value: object | string) => (isObject(value)) ? hasErrors(value) : !isEmpty(value));
	};

	const submitting = function (api: FormState<T>): boolean {
		const hasValidateErrors = hasErrors(api.errors);
		const hasServerError = !api.dirtySinceLastSubmit && hasErrors(api.submitErrors);
		const success = api.dirty;
		return !(api.submitting || api.pristine || hasValidateErrors || hasServerError) && success;
	};

	const onKeyPress = (event: KeyboardEvent, api: FormRenderProps<T>): void => {
        if (toLower(event.code) !== "enter") {
            return;
        }
        if (api.active) {
            api.handleSubmit();
        }
    };

	return (
		<Form
			onSubmit={submit}
			validate={validate}
			initialValues={data || stubObject()}
			render={(api: FormRenderProps<T>) => {
				return (
					<Fragment>
						{render(api, submitting(api.form.getState()))}
						<EventListener target={document} onKeyPress={(event) => onKeyPress(event, api)}/>
					</Fragment>
				);
			}}
			{...{validateOnBlur, keepDirtyOnReinitialize}}
		/>
	);
};
