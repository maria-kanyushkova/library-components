import * as React from "react";
import { FC } from "react";
import "../ComponentsStore.scss";
import { Accordion } from "../../components/accordion";


export const AccordionsPage: FC = () => {
	return (
		<div className="components-store">
			<div className="components-store_1-column">
				<Accordion title="Общие данные" switchable={false}>
					<div>body аккордеона без switcher</div>
				</Accordion>
			</div>
			<div className="components-store_1-column">
				<Accordion title="Депозит">
					<div>body аккордеона со switcher</div>
				</Accordion>
			</div>
		</div>
	);
};
