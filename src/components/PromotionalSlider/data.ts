import {
  ISliderImage,
  generateSliderArray,
  generateIndicatorArray,
} from '~/utils';

export interface IPromotionalSlider {
  radius?: number;
  delay?: number;
  height?: number;
  position?: 'top' | 'bottom';
}

export interface IPromotionalSliderLayout extends IPromotionalSlider {
  galleryRef: any;
  sliderImages: ISliderImage[];
  indicatorImages: ISliderImage[];
  isSelect(index: number): boolean;
  indicatorPress(index: number): void;
  changeSliderIndex(event: any): void;
}

export interface IIndicator
  extends Pick<
    IPromotionalSliderLayout,
    'isSelect' | 'indicatorImages' | 'indicatorPress' | 'position'
  > {}

export interface ISlider
  extends Pick<
    IPromotionalSliderLayout,
    'galleryRef' | 'sliderImages' | 'changeSliderIndex' | 'radius'
  > {}

export const sliderImages: ISliderImage[] = generateSliderArray();

export const indicatorImages: ISliderImage[] = generateIndicatorArray();
