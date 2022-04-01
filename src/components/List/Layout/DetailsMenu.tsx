import * as React from 'react';
import { Wrapped, Text } from '~/components/Basics';

import { IListLayoutDetails } from '~/components/List/data';

export const DetailsMenu = ({ name, description }: IListLayoutDetails) => (
  <Wrapped
    mt={2}
    mb={2}
    mx={3}
    p={2}
    bg="moldals"
    shadow="list"
    testID={'List:Details'}
    flexDirection="column"
    borderRadius="fullImageList">
    <Text color="support" mb={2} textAlign="center">
      {name}
    </Text>
    <Text color="support" textAlign="center">
      {description}
    </Text>
  </Wrapped>
);
