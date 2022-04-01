import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, Text, Spacing } from '~/components/Basics';

import { IListLayout } from '~/components/List/data';
export const List = ({
  data,
  title,
  renderItem,
  listDirection,
  showDetails,
  variant,
  description,
  ...props
}: IListLayout) => (
  <Wrapped testID={`List`} mt={3}>
    <Spacing space={3}>
      {title !== '' && (
        <Text
          variant={variant === 'combine' ? 'outback:h4' : 'outback:h8'}
          testID={'List:Title'}
          pl={4}>
          {title}
        </Text>
      )}
      <FlatList
        {...{ ...listDirection }}
        data={data}
        extraData={data}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) =>
          index === 0 && listDirection?.horizontal ? (
            <Wrapped ml={3}>
              {renderItem({
                ...item,
                ...props,
                index: `Menu-${index}`,
                last: data.length - 1 === index,
              })}
            </Wrapped>
          ) : (
            renderItem({
              ...item,
              ...props,
              index: `Menu-${index}`,
              last: data.length - 1 === index,
            })
          )
        }
      />
    </Spacing>
  </Wrapped>
);
