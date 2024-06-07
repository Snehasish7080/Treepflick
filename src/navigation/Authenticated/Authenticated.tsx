/*eslint-disable */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticatedRouteList} from './AuthenticatedTypes';
import LoginView from '../../core/Authentication/Views/LoginView';
import SignupView from '../../core/Authentication/Views/SignupView';

const Stack = createNativeStackNavigator<AuthenticatedRouteList>();

const Authenticated = () => {
  return (
    <Stack.Navigator initialRouteName="LoginView">
      <Stack.Screen
        name="LoginView"
        component={LoginView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupView"
        component={SignupView}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Authenticated;
