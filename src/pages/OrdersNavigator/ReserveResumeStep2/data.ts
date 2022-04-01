export interface IReserveResumeStep2 {
  data?: any;
}

export interface IReserveResumeStep2Layout extends IReserveResumeStep2 {
  goBack(): void;
  openModal(): void;
  cancel(): void;
  cancelOpen(): void;
  closeModal(): void;
  step: number;
}
