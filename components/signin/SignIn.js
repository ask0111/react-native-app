import { Button, StyleSheet, Text, TextInput, View } from "react-native";




export default function SignIn() {
  return (<>
    <View style={styles.container}>
      <View>
        <View >
          <Text>Welcome</Text>
          <Text>Signup into your account</Text>
        </View>
      </View>
      <View style={styles.box}>
          <Text style={styles.text} >Sign Up</Text>
        <View style={styles.box2}>
          <TextInput style={styles.input} placeholder="Full Name" />
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput style={styles.input}  placeholder="Passward" />
          <TextInput style={styles.input}  placeholder="Mobile Number" />
        </View>
          <Button title="SIGN UP" />
      </View>
    </View>
  </>)
}


const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    width: '100%',
    gap: 30,
    borderWidth: 2,
    borderColor: 'red',
    padding: 20,
  },

  text:{
    fontSize: 40,
    fontWeight: '800',
  },
  box: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderBottomLeftRadius: 80,
    borderTopRightRadius: 80,
    backgroundColor: 'blue',
    margin: 'auto',
    marginTop: 30,
    padding: 16,
    paddingBottom: 100,
    paddingTop: 20,
  },
  box2: {
    width: '100%',
    marginTop: 40,
    marginBottom: 40,
    borderWidth: 4,
    gap: 20,
  },

  input: {
    width:'100%',
    display: 'flex',
    margin: "auto",
    padding: 10,
    fontSize: 30,
    borderWidth: 2,
    borderColor: gray,
    borderRadius: 20,
    gap: 20,
  }


})