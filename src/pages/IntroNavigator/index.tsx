import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from "./navigator";

const IntroStack = createStackNavigator();

export default function IntroRoutes() {
  return (
    <IntroStack.Navigator>
      {routes.map((view) => (
        <IntroStack.Screen {...view} />
      ))}
    </IntroStack.Navigator>
  )
}
