import { IAccordionPressResp } from '~/utils';

export interface IAccordion {
  id?: string;
  header: JSX.Element[] | JSX.Element;
  headerOpen?: JSX.Element[] | JSX.Element;
  body: JSX.Element[] | JSX.Element;
  onPress(ctx: IAccordionPressResp): void;
}

export interface IAccordionLayout extends IAccordion {
  press(): void;
  isOpen: boolean;
}
