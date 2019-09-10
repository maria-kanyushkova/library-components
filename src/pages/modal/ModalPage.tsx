import React, { useState } from "react";
import { Modal } from "../../components";

export const ModalPage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  function onShowModal(): void {
    setVisible(true);
  }

  function onCloseModal(): void {
    setVisible(false);
  }

  return (
    <div className="components-store">
      <div>
        <Modal
          visible={visible}
          onClose={onCloseModal}
          render={_presenter => <div>Hello, World</div>}
        />
        <button onClick={onShowModal}>Show Modal</button>
      </div>
    </div>
  );
};
