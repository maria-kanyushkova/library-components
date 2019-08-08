import * as React from "react";
import "./Sidebar.scss";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ILink } from "../../interfaces";

interface ISidebarProps {
	links: ILink[];
}

export const Sidebar: FC<ISidebarProps> = ({links = []}) => {
	return (
		<div className="sidebar">
			{links.map((link, index) => (
				<NavLink
					to={link.path}
					key={index}
					className="sidebar__link"
					activeClassName="sidebar__link_active"
				>
					{link.label}
				</NavLink>
			))}
		</div>
	);
};