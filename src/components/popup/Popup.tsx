import { PopupView } from "./PopupView";
import * as ReactDOM from "react-dom";
import { autobind } from "core-decorators";
import { isNull } from "lodash";

@autobind
export class Popup {
    private state = false;
    private view = new PopupView({popup: this, close: this.hide, title: "Some title"});

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

    draw() {
        if (this.state) {
            return ReactDOM.createPortal(this.view.render(), document.body);
        }
        return void 0;
    }

    static build(props: object): Popup {
        return new Popup();
    }
}
