export interface IModalPresenter {
  onSubmit(): void;

  onChange(data: unknown): void;

  onClose(): void;
}
