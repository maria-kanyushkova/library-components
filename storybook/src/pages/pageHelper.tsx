import * as React from "react";
import { MainPage } from "./main";
import { ILink } from "../interfaces/link";
import { EPaths } from "./EPaths";
import { FieldsPage } from "./fields";
import { SwitchesPage } from "./switches";
import { ButtonsPage } from "./buttons";
import { TabsPage } from "./tabs";
import { ModalsPage } from "./modals";
import { AccordionsPage } from "./accordion";
import { Redirect } from "react-router";

export const pages = [
	{component: () => <MainPage />, path: `/${EPaths.MAIN}`},
	{component: () => <AccordionsPage/>, path: `/${EPaths.ACCORDION}`},
	{component: () => <FieldsPage/>, path: `/${EPaths.FIELDS}`},
	{component: () => <ButtonsPage/>, path: `/${EPaths.BUTTONS}`},
	{component: () => <SwitchesPage/>, path: `/${EPaths.SWITCHES}`},
	{component: () => <TabsPage/>, path: `/${EPaths.TAB}`},
	{component: () => <ModalsPage/>, path: `/${EPaths.MODALS}`},
	{component: () => <Redirect to={`/${EPaths.MAIN}`}/>, path: ""},
];

export const links: ILink[] = [
	{path: `/${EPaths.MAIN}`, label: "Главная"},
	{path: `/${EPaths.BUTTONS}`, label: "Кнопки"},
	{path: `/${EPaths.FIELDS}`, label: "Поля"},
	{path: `/${EPaths.SWITCHES}`, label: "Переключатели"},
	{path: `/${EPaths.ACCORDION}`, label: "Аккордеоны"},
	{path: `/${EPaths.TAB}`, label: "Вкладки"},
	{path: `/${EPaths.MODALS}`, label: "Модальные окна"},
];
