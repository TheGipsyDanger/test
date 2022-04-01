import * as React from 'react';

import { BRLMoney } from '~/utils';

import { Wrapped, Image, Text, Icon } from '~/components/Basics';
import { IMenuCategoryComponent } from '~/components/List/data';

export const MenuCategory = ({
  onPress,
  onPressTwo,
  ...props
}: IMenuCategoryComponent) => {
  const { id, name, image, description, productStore } = props;
  return (
    <Wrapped onPress={() => onPress(id)}>
      <Wrapped
        mx={3}
        mb={2}
        height={96}
        alignItems={'center'}
        justifyContent="space-between"
        bg="moldals"
        shadow="list"
        testID={'List:Menu.More'}
        flexDirection="row"
        borderRadius="fullImageList">
        <Wrapped flex={1} pt={0} pb={0} px={0}>
          <Text pl={1} variant="outback:h1" numberOfLines={1} mb={0}>
            {name}
          </Text>
          <Text pl={1} variant="outback:h6" numberOfLines={2} mb={0}>
            {description === ''
              ? 'Alface, brócolis, cenroura, carne, cebolinha, agrião, cebolas em tiras'
              : description}
          </Text>
          <Wrapped
            px={1}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Wrapped onPress={() => onPress(id)}>
              <Wrapped
                justifyContent="space-evenly"
                alignItems="center"
                bg="primary"
                height={30}
                width={109}
                borderRadius="button"
                flexDirection="row">
                <Icon
                  name="shopping-bag"
                  lib="FontAwesome5"
                  color="white"
                  size={15}
                />
                <Text variant="outback:h3" color="white">
                  {`Adicionar`}
                </Text>
              </Wrapped>
            </Wrapped>
            <Wrapped>
              <Text variant="outback:h5">
                {BRLMoney(productStore?.price as number)}
              </Text>
            </Wrapped>
          </Wrapped>
        </Wrapped>
        <Image
          borderRadius="fullImageCategoryList"
          width={102}
          m={1}
          uri={image}
        />
      </Wrapped>
    </Wrapped>
  );
};
