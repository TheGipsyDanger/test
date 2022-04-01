import { IModalSize, IUserActionInfosContext } from '~/utils';

export interface IDialogModal {}

export interface IDialogModalLayout extends IDialogModal {
  t: any;
  press(): void;
  infos: IUserActionInfosContext;
  modalSizes: IModalSize;
}
