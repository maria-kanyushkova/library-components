import * as React from "react";
import { FC, useState } from "react";
import "./tabs.scss";
import { ITabItem } from ".";
import classNames from "classnames";

export interface ICustomTabProps {
	items: ITabItem[];
	className?: string;
	type?: string;
}

export const Tab: FC<ICustomTabProps> = (props) => {
	const {children, className = "", items} = props;
	const classes = classNames({
		["tabs-container"]: true,
		[className]: true,
	});
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div className={classes}>
			<div className="tabs">
				{
					items.map((item: ITabItem, index) => {
						const {text, handler} = item;
						const isActiveTab = activeTab === index;
						const onClick = () => {
							setActiveTab(index);
							handler();
						};
						return (
							<div
								key={index}
								className="tab-item__label"
								data-active={isActiveTab}
								onClick={onClick}
							>
								{text}
							</div>
						);
					})
				}
			</div>
			<div className="tabs-item tab-content">
				{children}
			</div>
		</div>
	);
};
