import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { metrics } from '~/styles';

import { IItemPickerLayout } from '~/components/ItemPicker/data';

export const ItemPicker = ({
  list,
  press,
  numOfLines,
  strong = false,
}: IItemPickerLayout) => {
  return (
    <Wrapped>
      {list.map((_, index) => (
        <Wrapped
          key={index}
          flexDirection="row"
          justifyContent={index === 0 ? 'space-between' : 'space-around'}
          testID={`ItemPicker`}>
          {list[index].map((item, itemIndex) => (
            <Wrapped key={itemIndex} onPress={() => press(index, item.label)}>
              <Wrapped
                {...(index === 0 && numOfLines !== 1 ? { mb: 2 } : {})}
                height={35}
                width={(metrics.width - 60) / 4}
                bg={item.isActive ? 'primary' : 'background'}
                borderRadius="circle"
                center>
                <Text
                  color={item.isActive ? 'moldals' : 'text'}
                  variant={strong ? 'outback:h8' : 'outback:h4'}>
                  {item.label}
                </Text>
              </Wrapped>
            </Wrapped>
          ))}
        </Wrapped>
      ))}
    </Wrapped>
  );
};
