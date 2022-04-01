import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from './navigator';

const OrdersStack = createStackNavigator();

export function OrdersRoutes() {
  return (
    <OrdersStack.Navigator>
      {routes
        .filter((item) => item.name === 'Orders')
        .map((view) => (
          <OrdersStack.Screen {...view} />
        ))}
    </OrdersStack.Navigator>
  );
}

export function ReserveRoutes() {
  return (
    <OrdersStack.Navigator mode="modal">
      {routes
        .filter((item) =>
          ['ReserveResume', 'ReserveResumeStep2', 'MapModal'].includes(
            item.name
          )
        )
        .map((view) => (
          <OrdersStack.Screen {...view} />
        ))}
    </OrdersStack.Navigator>
  );
}

export function StatusRoutes() {
  return (
    <OrdersStack.Navigator>
      {routes
        .filter((item) => item.name === 'Status')
        .map((view) => (
          <OrdersStack.Screen {...view} />
        ))}
    </OrdersStack.Navigator>
  );
}
