export interface IOrderResumeModal {}

export interface IOrderResumeModalLayout extends IOrderResumeModal {
  t: any;
  onPress(): void;
  goBack(): void;
}

export interface IOrderResumeModalLayoutHeader
  extends Pick<IOrderResumeModalLayout, 'goBack' | 't'> {}

export interface IOrderResumeModalLayoutResume
  extends IOrderResumeModalLayout {}

export interface IOrderResumeModalLayoutInfo extends IOrderResumeModalLayout {}
