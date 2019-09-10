import { IModalPresenter } from "./IModalPresenter";
import { IModalView } from "./IModalView";

export class ModalPresenter implements IModalPresenter {
  private readonly view: IModalView;

  constructor(view: IModalView) {
    this.view = view;
  }

  onClose(): void {
    this.view.close();
  }

  onChange(data: unknown): void {}

  onSubmit(): void {
    this.view.close();
  }
}
