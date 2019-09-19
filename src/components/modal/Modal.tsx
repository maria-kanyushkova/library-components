// tslint:disable:jsx-wrap-multiline
// tslint:disable:no-null-keyword

import React, {
  FC,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef
} from "react";
import { IModalPresenter } from "./IModalPresenter";
import { IModalView } from "./IModalView";
import "./Modal.scss";
import { ModalPresenter } from "./ModalPresenter";
import { ModalView } from "./ModalView";
import ReactDOM from "react-dom";

interface IModalProps {
  visible: boolean;
  title?: string;

  onClose?(): void;

  render?(presenter: IModalPresenter): ReactNode;
}

export const Modal: FC<IModalProps> = props => {
  const { render, visible, title, onClose } = props;

  const id = `modal-${Math.ceil(Math.random() * 1000).toString()}`;

  const modal = useRef<HTMLDivElement>(null);

  const presenter = useMemo(
    () =>
      new ModalPresenter(
        new (class implements IModalView {
          close(): void {
            if (onClose) {
              onClose();
            }
          }

          getModal(): RefObject<HTMLDivElement | null> {
            return modal;
          }
        })()
      ),
    []
  );

  useEffect(() => {
    if (visible) {
      presenter.onModalShow();
    } else {
      presenter.onModalHide();
    }
  }, [visible]);

  const visibility = `${visible ? "visible" : "hidden"}`;

  return ReactDOM.createPortal(
    <div
      className={`modal__layout modal__layout--${visibility}`}
      role="presentation"
      aria-labelledby="modal__title"
      aria-hidden={!visible}
    >
      <div
        aria-hidden={true}
        onClick={presenter.onModalOverlayClick}
        className="modal__overlay"
      />
      <ModalView
        ref={modal}
        id={id}
        title={title}
        presenter={presenter}
        render={render}
      />
    </div>,
    document.body
  );
};
