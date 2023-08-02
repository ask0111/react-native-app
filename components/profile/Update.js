// src/screens/EditProfileScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditProfileScreen = ({ route, navigation }) => {
  const { userData } = route.params;
  const [name, setName] = useState(userData.name);
  const [dob, setDob] = useState(userData.dob);
  const [email, setEmail] = useState(userData.email);
  const [mobile, setMobile] = useState(userData.mobile);

  // Function to handle profile update
  const handleUpdateProfile = () => {
    // Replace this with your update profile logic (e.g., API call to backend)
    // For simplicity, we will just update the local state
    setUserData({ name, dob, email, mobile });
    navigation.goBack(); // Go back to the UserProfileScreen after update
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={dob}
        onChangeText={setDob}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default EditProfileScreen;
