import { IResumeTypes } from '~/utils';
export interface IStatus {
  data?: any;
}

export interface IStatusLayout extends IStatus {
  t: any;
  goBack(): void;
  where: IResumeTypes;
  openPhone(): void;
  openWhats(): void;
}

export interface IStatusLayoutHeader extends IStatusLayout {}

export interface IStatusLayoutBottom
  extends Pick<IStatusLayout, 'openPhone' | 'openWhats'> {}
