import { IModalSize, IUser, withChildren } from '~/utils';
export interface IAzureLoginAndRegisterModal {}

export interface IAzureLoginAndRegisterModalLayout
  extends IAzureLoginAndRegisterModal {
  t: any;
  user: IUser;
  modalSizes: IModalSize;
  onFail(reason: any): void;
  onLogin(data: ILoginResp): void;
}

export interface ILoginResp {
  data: {
    id_token: string;
  };
}
