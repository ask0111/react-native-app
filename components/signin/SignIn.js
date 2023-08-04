import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert, Button, StyleSheet, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const handleShowAlert = () => {
  Alert.alert(
      'OTP',
      "354624",
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'cancel', // Apply style to this button (e.g., 'default', 'cancel', 'destructive')
        },
      ],
      { cancelable: false }
    );
    }
const handleShowAler = () => {
  Alert.alert(
      'Wrong OTP',
      "",
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'cancel', // Apply style to this button (e.g., 'default', 'cancel', 'destructive')
        },
      ],
      { cancelable: false }
    );
    }

function SignIn() {
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('+91 1234567890');
  
  const [code, setCode] = useState('');



  function onAuthStateChanged(user) {
    if (user) {
      
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  
  async function signInWithPhoneNumber(number='+91 1234567890') {
    // console.log("before", number)
    const confirmation = await auth().signInWithPhoneNumber(number);
    // console.log(confirmation, "after")
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      const res = await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  
  const [otp1, setOtp1] = useState('');
  const [otpOrg1, setOtpOrg1] = useState('');
  const [userLogin, setUserLogin] = useState('');
  // const [showOtp, setShowOtp] = useState(false);
  // const [varified, setVerified] = useState(false);

  const SendOTPHandler = async()=>{
      const res = await AsyncStorage.getItem('users');
      const usersAll = JSON.parse(res);
    
      usersAll.map((user)=>{
        if(user.mobile == phoneNumber){
          const otp = Math.floor(Math.random(6) * (1000000));
          setOtpOrg1(otp);
          setOtp1(otp);
          setConfirm(true);
          setUserLogin(user);
          handleShowAlert()
        }
      })
      handleShowAler()
  }


  const ConfirmOTP = async()=>{
    if(354624 == 354624){
      await AsyncStorage.setItem('user', JSON.parse({person: userLogin, isPresent: true}))
    }
  }

  return (
    <>
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        

        {confirm ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              value={'354624'}  // 441727
              onChangeText={setOtp1}
            />
            <TouchableOpacity style={styles.button} onPress={ConfirmOTP}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button} onPress={confirmCode}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity> */}
          </>
        ) : 
        <Button title='otp' style={styles.button} onPress={()=>SendOTPHandler()}/>
        // <Button title='otp' style={styles.button} onPress={signInWithPhoneNumber(phoneNumber)}/>
        
        }

      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignIn;