import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from './navigator';

const CartStack = createStackNavigator();

export default function CartRoutes() {
  return (
    <CartStack.Navigator>
      {routes.map((view) => (
        <CartStack.Screen {...view} />
      ))}
    </CartStack.Navigator>
  );
}
