import { ScrollView, StatusBar, Button, StyleSheet, TouchableOpacity, Text, TextInput, View, Alert } from "react-native";
import React, { useState, version } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userLogin } from "../Redux/Action";
import auth from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux';


export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const [otp, setOtp] = useState('');
  const [otpOrg, setOtpOrg] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [varified, setVerified] = useState(false);
  const handleSendOTP = async () => {
    setShowOtp(!showOtp);
    const otp = Math.floor(Math.random(6) * (1000000));
    setOtpOrg(otp);
    console.log(otp)
    return Alert(otp);
  };
  const handleVerifyOTP = (otp) => {
    if (otp === otpOrg) {
      setVerified(true);
    }
  }



  const dispatch = useDispatch();

  function checkfields() {
    if (!name || !email || !password || !mobileNumber) {
      return false;
    }
    return true;
  }
  const handleSignUp = async () => {
    try {
      if (checkfields()) {
        // const r = await AsyncStorage.removeItem('user') || [];
        const dataJson = await AsyncStorage.getItem('users') || [];
        const res = JSON.parse(dataJson)
        // const res = dataJson
        const person = { id: res.length, name, email, password, mobileNumber }
        if (res.length == 0) {
          await AsyncStorage.setItem('users', JSON.stringify([person]));
        } else {
          await AsyncStorage.setItem('users', JSON.stringify([...res, person]));
        }
        await AsyncStorage.setItem('user', JSON.stringify(person));
        // dispatch(userLogin(person));
        const re = await AsyncStorage.getItem('users');

        console.log(re);
      } else {
        return console.log("not allow")
      }

    } catch (error) {
      console.log('asyncerror', error);
    }
  };



  const HandleLogin = () => {
    navigation.navigate('signin');
  }

  return (<>
    <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />

    <View style={styles.signcontainer}>
      <ScrollView style={styles.box}>
        <Text style={[styles.text, { textAlign: 'center' }]} >Sign Up</Text>
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
            style={[styles.input, varified && { borderColor: 'green' }]}
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
                value={otpOrg}
                onChangeText={setOtp(otpOrg)}
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
                <Text style={styles.buttonText}>Verify OTP</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
            <Text style={styles.signupButtonText}>Signup</Text>
          </TouchableOpacity>
        </View>

        <Text >If you are already signup
          <TouchableOpacity style={{ cursor: 'pointer' }} onPress={HandleLogin}>
            <Text style={{ paddingTop: -30, textAlign: 'center', color: 'blue', fontWeight: '800' }}>
              ` Login`
            </Text>
          </TouchableOpacity>
        </Text>
      </ScrollView>
    </View>
  </>)
}


const styles = StyleSheet.create({
  upperbox: {
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