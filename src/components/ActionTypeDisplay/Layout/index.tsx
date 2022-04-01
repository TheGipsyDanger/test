import * as React from 'react';

import { Wrapped, Text, Conditional } from '~/components/Basics';

import { IActionTypeDisplayLayout } from '~/components/ActionTypeDisplay/data';

export const ActionTypeDisplay = ({
  icon,
  label,
  onPress,
  description,
  variant = 'default',
  isSelected = false,
}: IActionTypeDisplayLayout) => (
  <Wrapped {...{ onPress }} testID={`ActionTtypeDisplay`}>
    <Conditional render={variant === 'default'}>
      <Wrapped
        width={125}
        height={135}
        center
        variant="outback:card"
        borderRadius="card"
        bg={isSelected ? 'primary' : 'modals'}>
        {icon}
        <Text
          mt={2}
          variant="outback:h7"
          color={isSelected ? 'modals' : 'TEXT'}>
          {label}
        </Text>
      </Wrapped>
      <Wrapped
        px={4}
        height={100}
        boxShadow="card"
        variant="outback:card"
        borderRadius="card"
        bg="primary">
        <Wrapped
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          flex={1}>
          {icon}
          <Wrapped center>
            <Wrapped
              px={0}
              pb={0}
              mb={2}
              borderBottomWidth={1}
              borderColor="rgba(255,254, 254, .5)">
              <Text variant="outback:h7" color="modals">
                {label}
              </Text>
            </Wrapped>

            <Text variant="outback:body" color="modals">
              {description}
            </Text>
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Conditional>
  </Wrapped>
);
