import React from "react";
import { IModalPresenter } from "./IModalPresenter";
import { IModalView } from "./IModalView";
import { debounce } from "lodash";

export class ModalPresenter implements IModalPresenter {
  private FOCUS_DEBOUNCE_TIMEOUT = 100;

  private readonly view: IModalView;

  constructor(view: IModalView) {
    this.view = view;

    this.onClose = this.onClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // prevent recursion with _.debounce
    this.onDocumentFocus = debounce(
      this.onDocumentFocus.bind(this),
      this.FOCUS_DEBOUNCE_TIMEOUT,
      {
        leading: true,
        trailing: false
      }
    );
    this.onDocumentKeydown = this.onDocumentKeydown.bind(this);
    this.onModalHide = this.onModalHide.bind(this);
    this.onModalShow = this.onModalShow.bind(this);
    this.onModalOverlayClick = this.onModalOverlayClick.bind(this);
  }

  onClose(): void {
    this.view.close();
  }

  onSubmit(): void {
    this.view.close();
  }

  onModalShow(): void {
    const modal = this.view.getModal();

    document.addEventListener("focus", this.onDocumentFocus, true);
    document.addEventListener("keydown", this.onDocumentKeydown);

    if (modal.current) {
      modal.current.setAttribute("tabindex", "0");
      modal.current.focus();
    }
  }

  onModalHide(): void {
    document.removeEventListener("focus", this.onDocumentFocus);
    document.removeEventListener("keydown", this.onDocumentKeydown);
  }

  onModalOverlayClick(event: React.MouseEvent): void {
    const modal = this.view.getModal();

    if (modal.current && event.target === modal.current.previousSibling) {
      this.view.close();
    }
  }

  // trap modal focus
  private onDocumentFocus(event: FocusEvent): void {
    const modal = this.view.getModal();

    if (modal.current && !modal.current.contains(event.target as Node)) {
      event.stopPropagation();
      modal.current.focus();
    }
  }

  // handle Esc key
  private onDocumentKeydown(event: KeyboardEvent): void {
    if (!event.keyCode || event.keyCode === 27) {
      this.view.close();
    }
  }
}
