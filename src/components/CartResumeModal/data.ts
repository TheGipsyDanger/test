export interface ICartResumeModal {
  where?: 'cart' | 'payment';
}

export interface ICartResumeModalLayout extends ICartResumeModal {
  t: any;
  total: string;
  openModal(): void;
  closeModal(): void;
  modalHeight: number;
  goToPayment(): void;
  content: IModalPosition;
}

export type IModalPosition = 'top' | 'initial';
