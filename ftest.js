import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {SignInUser, SignOutUser, SignUpUser} from './apiService';
import Auth from '@react-native-firebase/auth';
export default function Screen5() {
  const [usr, setUsr] = useState({
    email: '',
    pass: '',
  });
  const [nusr, setNusr] = useState({
    email: '',
    pass: '',
  });
  const [user, setUser] = useState();
  const onAuthStateChanged = user => {
    setUser(user);
  };
  const signIn = () => {
    SignInUser(usr.email, usr.pass)
      .then(data => {
        alert(data);
      })
      .catch(error => {
        alert(error);
      });
    setUsr({...usr, email: '', pass: ''});
  };
  const signUp = () => {
    SignUpUser(nusr.email, nusr.pass)
      .then(data => {
        alert(data);
      })
      .catch(error => {
        alert(error);
      });
    setNusr({...nusr, email: '', pass: ''});
  };
  const signOut = () => {
    SignOutUser()
      .then(data => {
        alert(data);
      })
      .catch(error => {
        alert(error);
      });
  };
  useEffect(() => {
    const suscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return suscriber;
  }, []);
  return (
    <>
      <View style={styles.container}>
      {user && <Button title="Log Out" onPress={signOut} />}
        <Text>Log In</Text>
        <TextInput
          value={usr.email}
          onChangeText={text => {
            setUsr({...usr, email: text});
          }}
          placeholder="Email"
          style={styles.textBoxes}
        />
        <TextInput
          value={usr.pass}
          onChangeText={text => {
            setUsr({...usr, pass: text});
          }}
          placeholder="Password"
          style={styles.textBoxes}
          secureTextEntry
        />
        <Button testID="LogIn" title="Log In" onPress={signIn} />
      </View>
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <TextInput
          value={nusr.email}
          onChangeText={text => {
            setNusr({...nusr, email: text});
          }}
          placeholder="Email"
          style={styles.textBoxes}
        />
        <TextInput
          value={nusr.pass}
          onChangeText={text => {
            setNusr({...nusr, pass: text});
          }}
          placeholder="Password"
          style={styles.textBoxes}
          secureTextEntry
        />
        <Button title="Sign Up" onPress={signUp} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
    width: '90%',
    marginBottom: 5,
    marginTop: 5,
    fontSize: 18,
    padding: 12,
    borderColor: 'grey',
    borderWidth: 0.2,
    borderRadius: 10,
  },
});