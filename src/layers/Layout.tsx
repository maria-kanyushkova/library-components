import * as React from "react";
import { FC } from "react";
import { Page } from "./page";
import { Sidebar } from "./sidebar";
import { Content } from "./content";
import { links } from "../pages";

export const Layout: FC = ({ children }) => {
    return (
        <Page layer="page-main">
            <Sidebar links={links}/>
            <Content>
                {children}
            </Content>
        </Page>
    );
};
