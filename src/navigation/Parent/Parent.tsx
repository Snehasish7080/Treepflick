import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParentRouteList} from './ParentTypes';
import LoginView from '../../core/Authentication/Views/LoginView';

const Stack = createNativeStackNavigator<ParentRouteList>();

const ParentNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'Authenticated'}>
      <Stack.Screen
        name="Authenticated"
        component={LoginView}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ParentNavigation;
