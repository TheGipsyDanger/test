import { withChildren } from '~/utils';

export interface IMap extends withChildren {
  size?: number;
  indicator?: 'default' | 'outback';
}

export interface IMapLayout extends IMap {
  loading: boolean;
  location: any;
  modalSize: number;
}
