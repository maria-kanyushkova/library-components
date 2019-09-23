import * as React from "react";
import { FC, Fragment, ReactNode, useState } from "react";
import "./Accordion.scss";
import { IAccordionItem } from ".";
import { CustomForm } from "../custom-form";
import { ToggleField } from "../fields";
import { FormSpy } from "react-final-form";
import { FormState } from "final-form";
import { IndicatorIcon } from "./img/IndicatorIcon";

interface IAccordionState {
    open: boolean;
    blocked: boolean;
}

interface IFormData {
    switcher: boolean;
}

export const Accordion: FC<IAccordionItem> = (props) => {
    const { children, title = "", className = "", switchable = true } = props;
    const [state, changeState] = useState<IAccordionState>({ open: true, blocked: !switchable });
    const isOpen = state.open;
    const isBlocked = state.blocked;

    function open() {
        changeState({ ...state, open: true });
    }

    function close() {
        changeState({ ...state, open: false });
    }

    function getIndicatorHandler() {
        if (isBlocked) {
            return;
        }
        return isOpen ? close : open;
    }

    const isOpenContent = !isBlocked && isOpen;

    return (
        <div className={`accordion-container ${className}`}>
            <div
                className="accordion-control"
                data-active={switchable || isOpen}
            >
                <div
                    className="accordion-control__indicator"
                    data-open={isOpen}
                    data-visible={switchable}
                    data-blocked={isBlocked}
                    onClick={getIndicatorHandler()}
                >
                    <IndicatorIcon/>
                </div>
                <div className="accordion-control__title">{title}</div>
                <div className="accordion-control__switcher" data-visible={switchable}>
                    <CustomForm
                        submit={() => void 0}
                        data={{ switcher: true }}
                        render={() => renderFieldAccordion(changeState, state)}
                    />
                </div>
            </div>
            <div className="accordion-content" data-open={isOpenContent}>
                {children}
            </div>
        </div>
    );
};

function renderFieldAccordion(changeState: (state: IAccordionState) => void, currentState: IAccordionState): ReactNode {
    const onChange = (formState: FormState<IFormData>) => {
        const value = (formState.values || {}).switcher;
        changeState({ ...currentState, blocked: !value });
    };
    return (
        <Fragment>
            <ToggleField name="switcher"/>
            <FormSpy
                subscription={{
                    values: true,
                    modified: true,
                }}
                onChange={onChange}
            />
        </Fragment>
    );
}
