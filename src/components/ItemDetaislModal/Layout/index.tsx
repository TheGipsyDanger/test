import * as React from 'react';

import { Wrapped, Conditional, Spacing } from '~/components/Basics';
import { Form } from './Form';
import { Infos } from './Infos';
import { Spotlight } from './Spotlight';
import { FullImage } from './FullImage';
import { Footer } from './Footer';
import { List } from '~/components/List';

import { IItemDetaislModalLayout } from '~/components/ItemDetaislModal/data';

import S from './styles';

export const ItemDetaislModal = (props: IItemDetaislModalLayout) => {
  const { showFullImage, itemListPress, modalSizes, bottomCompensation } =
    props;

  return (
    <Wrapped
      width={modalSizes.width}
      height={modalSizes.height}
      testID={`ItemDetaislModal`}>
      <Conditional render={showFullImage}>
        <FullImage {...props} />
        <Wrapped flex={1}>
          <Wrapped>
            <Spotlight {...props} />
          </Wrapped>
          <S.Body>
            <S.Scroll>
              <Wrapped mx={4}>
                <Spacing space={4}>
                  <Infos {...props} />
                  <Form {...props} />
                </Spacing>
              </Wrapped>
              <List
                onPress={itemListPress}
                data={[{}, {}, {}, {}, {}]}
                title="Combine com:"
                variant="combine"
              />
              <Wrapped height={bottomCompensation} />
            </S.Scroll>
          </S.Body>
          <Footer {...props} />
        </Wrapped>
      </Conditional>
    </Wrapped>
  );
};
