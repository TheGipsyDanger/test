import * as React from 'react';
import { Platform } from 'react-native';
import { TabIcon } from '~/components';
import { colors, fonts } from '~/styles/Theme';
import { IStringMap, IStringToAnyMap } from '~/utils';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from './navigator';

import { IcMenu, IcBag, IcRequests, IcProfile } from '~/assets/svg';

const icons: IStringToAnyMap = {
  Menu: IcMenu,
  Cart: IcBag,
  Orders: IcRequests,
  Profile: IcProfile,
};

const viewNames: IStringMap = {
  Cart: 'Sacola',
  Menu: 'Cardápio',
  Orders: 'Pedidos',
  Profile: 'Perfil',
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const homeRoutes = routes.filter((route) =>
  ['Menu', 'Cart', 'Orders', 'Profile', 'PaymentNavigator'].includes(route.name)
);

const appRoutes = routes.filter(
  (route) => !['Menu', 'Cart', 'Orders', 'Profile'].includes(route.name)
);

const AppNavigatorHomeRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inactive,
        tabBarStyle: {
          backgroundColor: colors.modals,
          paddingVertical: Platform.OS === 'ios' ? 10 : 0,
        },
      }}>
      {homeRoutes.map((view) => (
        <Tab.Screen
          {...view}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ focused }) => (
              <TabIcon
                {...{ focused, name: view.name, title: viewNames[view.name] }}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="App"
        component={AppNavigatorHomeRoutes}
      />
      {appRoutes.map((view) => (
        <Stack.Screen {...view} />
      ))}
    </Stack.Navigator>
  );
}
