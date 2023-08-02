import { ScrollView, StatusBar, Button, StyleSheet, TouchableOpacity, Text, TextInput, View } from "react-native";
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  // Function to handle OTP verification
  const handleVerifyOTP = () => {
    // Replace this with your OTP verification logic
    // For simplicity, we'll just toggle the showOtp state
    setShowOtp(!showOtp);
  };

  
  const handleSignUp = async() => {
    try {
    
      await AsyncStorage.setItem('myKey', 'false');
      const re = await AsyncStorage.getItem('myKey');
      console.log( re);
    console.log('Signup Data:', { name, email, password, mobileNumber });
    } catch (error) {
      console.log('asyncerror', error);
    }
  };



  const HandleLogin = ()=>{
    navigation.navigate('signin');
  }

  return (<>
    <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />

    <View style={styles.signcontainer}>
      <ScrollView style={styles.box}>
        <Text style={[styles.text, {textAlign: 'center'}]} >Sign Up</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
          {showOtp ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="Enter OTP"
                value={otp}
                onChangeText={setOtp}
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
                <Text style={styles.buttonText}>Verify OTP</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
            <Text style={styles.signupButtonText}>Signup</Text>
          </TouchableOpacity>
        </View>

        <Text >If you are already signup 
        <TouchableOpacity style={{cursor: 'pointer'}} onPress={HandleLogin}>
        <Text style={{paddingTop: -30, textAlign: 'center', color: 'blue', fontWeight: '800' }}>
          ` Login`
        </Text>
      </TouchableOpacity>
        </Text>
      </ScrollView>
    </View>
  </>)
}


const styles = StyleSheet.create({
  upperbox:{
    padding: 15,
    width: '100%',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  signcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderWidth: 0,
    borderColor: 'red',
    padding: 20,
  },

  subhead: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 40,
    fontWeight: '800',
  },
  box: {
    maxWidth: '400px',
    minWidth: '100%'
  },
  container: {
    flex: 1,
    width: '100%',
    marginTop: 40,
    marginBottom: 40,
    borderWidth: 0,
    gap: 10,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

})