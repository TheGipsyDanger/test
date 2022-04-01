import { IModalSize } from '~/utils';

export interface IToastModal {
  data?: any;
  onOpenModal(): any;
}

export interface IToastModalLayout extends IToastModal {
  modalSizes: IModalSize;
  t: any;
  onOpenModal(): void;
}
