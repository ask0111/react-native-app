import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, Button, StyleSheet } from 'react-native';



export default function Profile({navigation}){

  // const user = useSelector (state => state.user);
  // console.log(user, 'br')

    const [userData, setUserData] = useState({
        name: 'John Doe',
        dob: '1990-01-01',
        email: 'johndoe@example.com',
        mobile: '1234567890',
        photo: 'https://via.placeholder.com/150', // Placeholder image URL
      });
    return(<>
         <View style={styles.container}>
      <Image source={{ uri: userData.photo }} style={styles.photo} />
      <Text style={styles.infoText}>Name: {userData.name}</Text>
      <Text style={styles.infoText}>Date of Birth: {userData.dob}</Text>
      <Text style={styles.infoText}>Email: {userData.email}</Text>
      <Text style={styles.infoText}>Mobile: {userData.mobile}</Text>
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
