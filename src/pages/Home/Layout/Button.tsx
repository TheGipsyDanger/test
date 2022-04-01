import * as React from "react";

import { Wrapped, Text, Icon } from "~/components";

import { useModal } from "~/context";

export const Button = ({ label, showIcon = false, ...props }) => {
  const { openModal } = useModal();
  return (
    <Wrapped onPress={() => openModal("TestModal")}>
      <Wrapped
        {...props}
        bg="white"
        height={26}
        borderRadius="button"
        shadow="list"
        center
      >
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
