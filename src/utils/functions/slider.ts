import { ISliderImage } from '~/utils';

export function defineCorrectIndex(indexToCheck: number): number {
  return indexToCheck % 4;
}

export function generateSliderArray(): ISliderImage[] {
  const defaultImages: ISliderImage[] = [
    {
      uri: 'https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg',
    },
    {
      uri: 'https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg',
    },
    {
      uri: 'https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg',
    },
    {
      uri: 'https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg',
    },
  ];

  var images: ISliderImage[] = [];

  Array.from({ length: 120 }).forEach((item) => {
    images = [...images, ...defaultImages];
    return images;
  });

  return images;
}

export function generateIndicatorArray(): ISliderImage[] {
  return generateSliderArray().slice(0, 4);
}
