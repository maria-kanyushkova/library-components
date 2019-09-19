import { RefObject } from "react";

export interface IModalView {
  close(): void;

  getModal(): RefObject<HTMLDivElement | null>;
}
