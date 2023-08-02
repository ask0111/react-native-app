import { StyleSheet, Text, StatusBar } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import React, { useState } from "react";
import TabNavigation from "./components/Navigator/Tab";

const Stack = createStackNavigator();


function App() {
  const [isUser, setIsUser] = useState(AsyncStorage.getItem('myKey') || false); 
 
 return (<>
    {!isUser ? <TabNavigation /> :
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="signup" component={SignUp} options={{
          title: "Welcome",
          headerTitle: () => (
            <HeaderTitleWithDescription
              title="Welcome"
              description="Signup into your account"
            />
          ),
          headerTintColor: 'white',
        }} />
          <Stack.Screen name="signin" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>}
</>);
}

const HeaderTitleWithDescription = ({ title, description }) => {
  return (
    <React.Fragment>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ fontSize: 12, color: 'gray' }}>{description}</Text>
    </React.Fragment>
  );
};

export default App;
