import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from './navigator';

const UserActionStack = createStackNavigator();

export default function UserActionRoutes() {
  return (
    <UserActionStack.Navigator mode="modal">
      {routes.map((view) => (
        <UserActionStack.Screen {...view} />
      ))}
    </UserActionStack.Navigator>
  );
}

export function UserActionQueueRoutes() {
  return (
    <UserActionStack.Navigator mode="modal">
      {routes
        .filter((item) => item.name === 'Queue')
        .map((view) => (
          <UserActionStack.Screen {...view} />
        ))}
    </UserActionStack.Navigator>
  );
}
