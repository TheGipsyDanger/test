import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from "./navigator";

const PaymentStack = createStackNavigator();

export default function PaymentRoutes() {
  return (
    <PaymentStack.Navigator>
      {routes.map((view) => (
        <PaymentStack.Screen {...view} />
      ))}
    </PaymentStack.Navigator>
  )
}
