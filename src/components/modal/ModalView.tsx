import React, { forwardRef, ReactNode, Ref } from "react";
import { CloseIcon } from "./CloseIcon";
import { IModalPresenter } from "./IModalPresenter";

interface IModalViewProps {
  id: string;
  title?: string;
  presenter: IModalPresenter;

  render?(presenter: IModalPresenter): ReactNode;
}

export const ModalView = forwardRef<HTMLDivElement, IModalViewProps>(
  (props, ref?: Ref<HTMLDivElement>) => {
    const { presenter, render, title, id } = props;
    return (
      <div className="modal__view" id={id} ref={ref}>
        <div className="modal__header">
          <button
            className="modal__close"
            aria-label="close"
            onClick={presenter.onClose.bind(presenter)}
          >
            <CloseIcon />
          </button>
        </div>
        {title && (
          <div id="modal__title" className="modal__title">
            {title}
          </div>
        )}
        {render && (
          <div className="modal__content">{render(props.presenter)}</div>
        )}
      </div>
    );
  }
);
