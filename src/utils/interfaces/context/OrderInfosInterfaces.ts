export type IResumeTypes = 'delivery' | 'withdrawal';

export interface IOrderInfosContext {
  resumeToShow: IResumeTypes;
  setResumeToShow(resume: IResumeTypes): void;
}
