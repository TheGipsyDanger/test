export interface IReserveResume {
  data?: any;
}

export interface IReserveResumeLayout extends IReserveResume {
  t: any;
  goBack(): void;
  openPhone(): void;
  openWhats(): void;
  reservePress(): void;
  optionPress(): void;
}

export interface IRow {
  icon: string;
  text: string;
}

export interface IReserveResumeLayoutBottom
  extends Pick<IReserveResumeLayout, 'openPhone' | 'openWhats'> {}

export interface IReserveResumeLayoutInfos
  extends Pick<IReserveResumeLayout, 't' | 'reservePress'> {}

export interface IReserveResumeLayoutOptions
  extends Pick<IReserveResumeLayout, 't' | 'optionPress'> {}

export interface IReserveResumeLayoutHeader
  extends Pick<IReserveResumeLayout, 't' | 'goBack'> {}
