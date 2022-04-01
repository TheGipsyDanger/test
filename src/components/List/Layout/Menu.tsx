import * as React from 'react';
import { Animated } from 'react-native';
import { useEffect } from 'react';
import { Wrapped, Image, Text } from '~/components/Basics';
import { IMenu } from '~/components/List/data';

export const Menu = ({
  setSelected,
  selected,
  index,
  onPress,
  ...props
}: IMenu) => {
  const { name } = props;

  const startValue = new Animated.Value(1);
  const endValue = 1.2;
  const duration = 300;

  useEffect(() => {
    Animated.timing(startValue, {
      toValue: endValue,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [startValue, endValue, duration, selected]);

  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              scale: selected === index ? startValue : 1,
            },
          ],
        },
      ]}>
      <Wrapped
        testID="List:Menu.Item"
        onPress={() => {
          setSelected(selected !== index && index);
          onPress(props);
        }}
        mr={4}
        py={1}>
        <Image
          borderRadius="imageList"
          width={72}
          height={72}
          uri="https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg"
        />
        <Wrapped mt={0} center>
          <Text variant="outback:h3" color="primary" textAlign="center">
            {name.replace(' ', '\n')}
          </Text>
        </Wrapped>
      </Wrapped>
    </Animated.View>
  );
};
