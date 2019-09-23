import React, { useState } from "react";
import { Button, Modal } from "../../components";
import "./ModalPage.scss";

export const ModalPage: React.FC = () => {
  const [visibleOuter, setVisibleOuter] = useState(false);
  const [visibleInner, setVisibleInner] = useState(false);

  function onShowModalOuter(): void {
    setVisibleOuter(true);
  }

  function onCloseModalOuter(): void {
    setVisibleOuter(false);
  }

  function onShowModalInner(): void {
    setVisibleInner(true);
  }

  function onCloseModalInner(): void {
    setVisibleInner(false);
  }

  return (
    <div className="modal__page">
      <Modal
        visible={visibleOuter}
        title="Параметры использования"
        onClose={onCloseModalOuter}
        render={() => (
          <div className="modal__outer__content">
            <Button
              type="floating"
              onClick={onShowModalInner}
              text="Открыть модальное окно поверх"
            />
          </div>
        )}
      />
      <Modal
        visible={visibleInner}
        title="Параметры использования поверх параметров использования"
        onClose={onCloseModalInner}
        render={presenter => (
          <div className="modal__inner__content">
            <Button
              type="floating"
              onClick={presenter.onClose}
              text="Закрыть"
            />
          </div>
        )}
      />
      <Button
        type="floating"
        onClick={onShowModalOuter}
        text="Открыть модальное окно"
      />
    </div>
  );
};
