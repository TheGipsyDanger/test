import { IModalSize } from '~/utils';

export interface IRequestLoginModal {
  data?: any;
}

export interface IRequestLoginModalLayout extends IRequestLoginModal {
  t: any;
  press(): void;
  close(): void;
  bottom: number;
  modalSizes: IModalSize;
}
