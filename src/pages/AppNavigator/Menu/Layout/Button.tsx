import * as React from 'react';

import { Wrapped, Text, Icon } from '~/components';

export const Button = ({
  label = '',
  showIcon = false,
  press = (type: string) => {},
  ...props
}) => {
  return (
    <Wrapped onPress={() => press(label)}>
      <Wrapped
        {...props}
        bg="white"
        height={30}
        borderRadius="button"
        shadow="list"
        center>
        <Wrapped flexDirection="row" center>
          <Text variant="outback:h3" color="primary" mr={0}>
            {label}
          </Text>
          {showIcon && (
            <Icon
              name="chevron-down"
              lib="FontAwesome5"
              color="primary"
              size={11}
            />
          )}
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
