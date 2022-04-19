import * as React from 'react';
import { Button, View, Text, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Detail';
import Search from './screens/Search';
import { Provider } from 'react-redux';
import store from './redux/store';
import FavoriteScreen from './screens/Favorite';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" >
            {() => (
              <Stack.Navigator >
              <Stack.Screen name="Homes" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} options={({ route }) => ({ title: route.params.name })}/>
              <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Favotite" >
          {() => (
              <Stack.Navigator >
              <Stack.Screen name="Favotites" component={FavoriteScreen} />
            </Stack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>         
      </NavigationContainer>
    </Provider>
  );
}

export default App;