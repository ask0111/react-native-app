import { StyleSheet, Text } from "react-native";
import SignUp from "./components/signup/SignUp";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import CheckOut from "./components/checkout/CheckOut";
import Card from "./components/checkout/Card";
import Details from "./components/details/Details";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


function App() {
  const data = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
  return (<>
   <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Signup" component={SignUp} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  {/* <SignUp /> */}
  {/* <Text>Hare Krishna</Text> */}
  {/* <Home /> */}
  {/* <Cart /> */}
  {/* <CheckOut /> */}
  {/* <Card /> */}

  {/* <Details props={data} /> */}
  </>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
