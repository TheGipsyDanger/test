import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as views from '~/pages';
import { inTest } from '../../app.json';

const Stack = createStackNavigator();

const App = ({ showIntro }: { showIntro: boolean }) => (
  <Stack.Navigator initialRouteName={showIntro ? 'Intro' : 'App'}>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="App"
      component={views.AppNavigator}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="Intro"
      component={views.IntroNavigator}
    />
  </Stack.Navigator>
);

const Test = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="Test"
      component={views.TestView}
    />
  </Stack.Navigator>
);

export default function Routes({ showIntro }: { showIntro: boolean }) {
  return inTest ? <Test /> : <App {...{ showIntro }} />;
}
