import React, { FC, ReactNode } from "react";
import { IModalPresenter } from "./IModalPresenter";

interface IModalViewProps {
  presenter: IModalPresenter;

  render(presenter: IModalPresenter): ReactNode;
}

export const ModalView: FC<IModalViewProps> = props => {
  const { presenter, render } = props;
  return (
    <div className={`modal__view`}>
      <div className="modal__header">
        <button onClick={presenter.onClose.bind(presenter)}>x</button>
      </div>
      <div className="modal__content">{render(props.presenter)}</div>
    </div>
  );
};
