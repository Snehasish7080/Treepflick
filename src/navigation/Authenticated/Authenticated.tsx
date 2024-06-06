/*eslint-disable */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticatedRouteList} from './AuthenticatedTypes';
import LoginView from '../../core/Authentication/Views/LoginView';

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
    </Stack.Navigator>
  );
};

export default Authenticated;
