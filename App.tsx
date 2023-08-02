import { StyleSheet, Text, StatusBar } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import SignUp from "./components/signup/SignUp";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import CheckOut from "./components/checkout/CheckOut";
import Card from "./components/checkout/Card";
import Details from "./components/details/Details";
import Profile from "./components/profile/Profile";
import EditProfileScreen from "./components/profile/Update";
import Register from "./components/signup/Register"
import SignIn from "./components/signin/SignIn";
import { useState } from "react";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();





function App() {
  const [isUser, setIsUser] = useState(false);
  const data = { "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } }
  return (<>
    {/* <SignUp /> */}

    {isUser ? 
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
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
          },
        })}

        tabBarOptions={{
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
        <Tab.Screen name="home" component={Home} options={{ 'title': "Products" }} />
        <Tab.Screen name="Profile" component={Profile} options={{ title: 'User Profile' }} />
        <Tab.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Details" component={Card} />
      </Tab.Navigator>
    </NavigationContainer>
    
        :

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signin" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>}


    {/* <CheckOut /> */}
    {/* <Card /> */}
    {/* <Details props={data} /> */}
    {/* <SignIn /> */}
    {/* <Register /> */}
    {/* <StatusBar backgroundColor='#fff' barStyle={'dark-content'} /> */}
  </>
  );
}

const styles = StyleSheet.create({

});

export default App;
