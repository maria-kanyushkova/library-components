import React, { FC, ReactNode } from "react";
import { IModalPresenter } from "./IModalPresenter";
import { IModalView } from "./IModalView";
import "./Modal.scss";
import { ModalPresenter } from "./ModalPresenter";
import { ModalView } from "./ModalView";

interface IModalProps {
  visible: boolean;

  onClose?(): void;

  render(presenter: IModalPresenter): ReactNode;
}

export const Modal: FC<IModalProps> = props => {
  const { render, visible, onClose } = props;

  const presenter = new ModalPresenter(
    new (class implements IModalView {
      close(): void {
        if (onClose) {
          onClose();
        }
      }
    })()
  );

  const layoutVisibilitySuffix = `${visible ? "visible" : "hidden"}`;

  return (
    <div className={`modal__layout modal__layout--${layoutVisibilitySuffix}`}>
      <div className="modal__overlay" />
      <ModalView presenter={presenter} render={render} />
    </div>
  );
};
