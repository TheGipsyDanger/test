import { withChildren } from '~/utils';

export interface IBottomSpotlight extends withChildren {
  data?: any;
}

export interface IBottomSpotlightLayout extends IBottomSpotlight {
  bottom: number;
}
