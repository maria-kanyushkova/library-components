import { PopupView } from "./PopupView";
import * as ReactDOM from "react-dom";
import { autobind } from "core-decorators";
import { isNull } from "lodash";
import { ReactElement } from "react";

@autobind
export class Popup {
    private state = false;
    private view = new PopupView({ popup: this, close: this.hide, title: "Some title" });

    static build(props: object): Popup {
        return new Popup();
    }

    show(): void {
        this.state = true;
    }

    hide(): void {
        if (!this.state) {
            return;
        }
        const element = this.view.ref.current;
        if (isNull(element)) {
            return;
        }
        document.body.removeChild(element);
        // ReactDOM.unmountComponentAtNode(element);
        this.state = false;
    }

    draw(): ReactElement | undefined {
        if (this.state) {
            return ReactDOM.createPortal(this.view.render(), document.body);
        }
        return void 0;
    }
}
