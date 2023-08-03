import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Profile({ navigation }) {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    mobileNumber: '1234567890',
  })
  
  const getdata = async () => {
    const res = await AsyncStorage.getItem('user');
    const user = JSON.parse(res);
    setUserData(user);
    console.log(user, 'this is')
  }
 
  getdata();

  // const [userData, setUserData] = useState({
  //   name: 'John Doe',
  //   dob: '1990-01-01',
  //   email: 'johndoe@example.com',
  //   mobile: '1234567890',
  //   photo: 'https://via.placeholder.com/150', // Placeholder image URL
  // });


  return (<>
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.photo} />
      <Text style={styles.infoText}>Name: {userData.person.name}</Text>
      <Text style={styles.infoText}>Email: {userData.person.email}</Text>
      <Text style={styles.infoText}>Mobile: {userData.person.mobileNumber}</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile', { userData })} />
    </View>
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
});
