import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Profile({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isTrue, setIsTrue] = useState(true);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
  })
  
  const getdata = async () => {
    const res = await AsyncStorage.getItem('user');
    const user = JSON.parse(res);
    setUserData(user.person);
    setName(userData.name);
    setMobile(userData.mobileNumber);
    setEmail(userData.email);
    console.log(user, 'this is')
  }
 
  useEffect(()=>{
    getdata();

  }, [])


  const handleUpdateProfile = async() => {
    const res = await AsyncStorage.getItem('user');
    const user = JSON.parse(res);
    const data = 
      {id:user.person.id, name, email, mobileNumber: mobile, password: user.person.password }
    
      await AsyncStorage.setItem('user', JSON.stringify({person: data, isPresent: user.isPresent}))
      const da = await AsyncStorage.getItem('user');
      const updated = JSON.parse(da);
    
    setUserData(updated.person);
    getdata();
    setIsTrue(true);
  };

  const Logout = async()=>{
    await AsyncStorage.removeItem('user');
    navigation.navigate('signup')
  }

  return (<>
   {isTrue ? <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.photo} />
      <Text style={styles.infoText}>Name: {userData.name}</Text>
      <Text style={styles.infoText}>Email: {userData.email}</Text>
      <Text style={styles.infoText}>Mobile: {userData.mobileNumber}</Text>
      <Button title="Edit Profile" onPress={() => setIsTrue(false)} />
      <Button title="Logout user" mode="contained" style={styles.button}  onPress={() => Logout()} />
    </View>
    :
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
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile"
        value={mobile}
        onChangeText={setMobile}
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
    
    }
  </>)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
  },
});
