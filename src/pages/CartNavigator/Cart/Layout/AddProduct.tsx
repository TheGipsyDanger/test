import * as React from 'react';

import { Wrapped, Button } from '~/components';

import { ICartAddProduct } from '~/pages/AppNavigator/Cart/data';

export const AddProduct = ({ t, add, ...props }: ICartAddProduct) => {
  return (
    <Wrapped {...props}>
      <Wrapped mb={4} center>
        <Wrapped width={200} boxShadow="button">
          <Button
            height={30}
            disabled={false}
            onPress={add}
            variant="outback:secondary"
            textVariant="outback:h8"
            text={t('CART.STEP_1.BTN')}
          />
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
