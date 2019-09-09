import * as React from "react";
import { FC, useState } from "react";
import "../ComponentsStore.scss";
import { Tab } from "../../components";
import { EClientCardTabType } from "./EClientCardTabType";

const tabContent = {
    [EClientCardTabType.ORDERS]: <div>Заказы body</div>,
    [EClientCardTabType.PROJECTS]: <div>Проекты body</div>,
    [EClientCardTabType.SALES]: <div>Настройки продаж body</div>,
    [EClientCardTabType.USERS]: <div>Пользователи body</div>,
    [EClientCardTabType.QUESTIONNAIRE]: <div>Анкета body</div>,
    [EClientCardTabType.COLLECTIONS]: <div>Подборки body</div>,
};

export const TabsPage: FC = () => {
    const [ type, setTabType ] = useState(EClientCardTabType.ORDERS);
    return (
        <div className="components-store">
            <div className="components-store_1-column">
                <Tab
                    items={ [
                        { text: "Заказы", handler: () => setTabType(EClientCardTabType.ORDERS) },
                        { text: "Проекты", handler: () => setTabType(EClientCardTabType.PROJECTS) },
                        { text: "Настройки продаж", handler: () => setTabType(EClientCardTabType.SALES) },
                        { text: "Пользователи", handler: () => setTabType(EClientCardTabType.USERS) },
                        { text: "Анкета", handler: () => setTabType(EClientCardTabType.QUESTIONNAIRE) },
                        { text: "Подборки", handler: () => setTabType(EClientCardTabType.COLLECTIONS) },
                    ] }
                >
                    { tabContent[type] }
                </Tab>
            </div>
        </div>
    );
};

