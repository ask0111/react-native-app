
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../home/Home';
import Profile from '../profile/Profile';
import Card from '../checkout/Card';
import StackNavigation from './Stack';
import StackNavDetails from './StackDetails';

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (<>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions=
            {({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => 
              {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? 'home-sharp' : 'home-outline';
                  size = focused ? size + 8 : size + 4;
                } else if (route.name === 'Cart') {
                  iconName = focused ? 'cart-sharp' : 'cart-outline';
                  size = focused ? size + 8 : size + 4;
                } else if (route.name === 'Profile') {
                  iconName = focused ? 'user' : 'user';
                  size = focused ? size + 8 : size + 4;
                } else if (route.name === 'Details') {
                  iconName = focused ? 'exit' : 'exit-outline';
                  size = focused ? size + 8 : size + 4;
                }
                return <Icon name={iconName} size={size} color={color} />;
              }
            })}
  
            tabBarOptions=
            {{
              activeTintColor: 'blue',
              inactiveTintColor: 'gray',
              showLabel: true,
              style: {
                backgroundColor: 'pink',
                heigth: 100,
                fontSize: 32,
              }
            }}
          >
            
            <Tab.Screen name="home" component={StackNavDetails} options={{ title: "Products" }} />
            <Tab.Screen name="profile" component={Profile} options={{ title: 'User Profile' }} />
            <Tab.Screen name="cart" component={StackNavigation} />
            <Tab.Screen name="card" component={Card} />
          </Tab.Navigator>
        </NavigationContainer>
  
    </>
    );
  }

  export default TabNavigation;