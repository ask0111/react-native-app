import { ScrollView, StatusBar, Button, StyleSheet, TouchableOpacity, Text, TextInput, View } from "react-native";
import React, { useState } from 'react';




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

  // Function to handle Signup button press
  const handleSignUp = () => {
      navigation.push('home')
    console.log('Signup Data:', { name, email, password, mobileNumber });
  };


  const handleLinkPress = () => {
    // Replace 'YOUR_URL' with the desired URL you want to open
    const url = 'YOUR_URL';
    Linking.openURL(url);
  };


  const HandleLogin = ()=>{
    navigation.navigate('signin');
  }

  return (<>
    <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
    <View style={styles.signcontainer}>
      <View style={styles.upperbox}>
        <View >
          <Text style={styles.subhead}>Welcome</Text>
          <Text>Signup into your account</Text>
        </View>
      </View>
      <ScrollView style={styles.box}>
        <Text style={styles.text} >Sign Up</Text>
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
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'blue',
    // borderBottomLeftRadius: 80,
    // borderTopRightRadius: 80,
    // backgroundColor: 'blue',
    // marginTop: 10,
    // padding: 16,
    // paddingBottom: 10,
    // paddingTop: 20,
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