import { IModalSize, IUserActionInfosContext } from '~/utils';

export interface IInfoModal {
  showCloseButton?: boolean;
  press(): void;
  onClose(status: boolean): void;
  imageDontExist?: boolean;
  secondButtonExist?: boolean;
  textPropsSecondButton?: string;
  subTitle?: boolean;
  subTitleText?: string;
  iconDontExist?: boolean;
  inputExist?: boolean;
  pressSecond?(): void;
}

export interface IInfoModalLayout extends IInfoModal {
  t: any;
  infos: IUserActionInfosContext;
  modalSizes: IModalSize;
}
