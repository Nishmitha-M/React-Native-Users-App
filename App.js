import { StyleSheet } from 'react-native';
import UsersListScreen from './screens/UsersListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfileScreen from './screens/UserProfileScreen';
import UsersContextProvider from './store/context/users-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UsersContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Users"
            component={UsersListScreen}
            options={{
              title: 'All Users',
              headerStyle: { backgroundColor: '#D6E4E5' },
            }}
          />
          <Stack.Screen
            name="UserProfileOverview"
            component={UserProfileScreen}
            options={{
              title: 'Profile Overview',
              headerStyle: { backgroundColor: '#EFF5F5' },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersContextProvider>
  );
}
