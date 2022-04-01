import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from "./navigator";

const MyInfosStack = createStackNavigator();

export default function MyInfosRoutes() {
  return (
    <MyInfosStack.Navigator>
      {routes.map((view) => (
        <MyInfosStack.Screen {...view} />
      ))}
    </MyInfosStack.Navigator>
  )
}
