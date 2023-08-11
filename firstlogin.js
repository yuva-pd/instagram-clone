import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  Button,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import Homescreen from './homescreen';
// import {auth} from './insta';
import { firebase,firestore } from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function First({navigation}) {
  const Stack = createStackNavigator();

  function Signup({navigation}){
    const [Name, setName] = useState(''); 

  // const [Email, setEmail] = useState(''); 
  // const [Password, setPassword] = useState('');
    
    return (
      <View>
        <SafeAreaView>
          <View>
            <Text style={{margin: 50, marginLeft: 123, fontSize: 35}}>
              Instagram
            </Text>
            <TextInput
              value={Name}
              onChangeText={text => {
                setName(text);
              }}
              style={{
                backgroundColor: '#FAFAFA',
                marginLeft: 50,
                borderRadius: 7,
                marginRight: 50,
                height: 55,
                borderWidth: 0.5,
                marginBottom: 20,
                padding: 10,
              }}
              placeholder="Enter name"
            />
            <TextInput
              value={Email}
              onChangeText={text => {
                setEmail(text);
              }}
              style={{
                backgroundColor: '#FAFAFA',
                marginLeft: 50,
                borderRadius: 7,
                marginRight: 50,
                height: 55,
                borderWidth: 0.5,
                marginBottom: 20,
                padding: 10,
              }}
              placeholder="Phone number,Username or Email address"
            />
  
            <TextInput
              value={Password}
              onChangeText={text => {
                setPassword(text);
              }}
              style={{
                backgroundColor: '#FAFAFA',
                marginLeft: 50,
                borderRadius: 7,
                marginRight: 50,
                height: 55,
                borderWidth: 0.5,
                marginBottom: 20,
                padding: 10,
              }}
              secureTextEntry={true}
              placeholder="Password..."
            />
            <TouchableOpacity onPress={handleSignup}>
              <Text
                style={{
                  backgroundColor: 'skyblue',
                  padding: 20,
                  marginLeft: 50,
                  marginRight: 50,
                  textAlign: 'center',
                  marginBottom: 20,
                }}>
                Signup
              </Text>
            </TouchableOpacity>
           
          </View>
        </SafeAreaView>
      </View>
    );
  }
  const Login=({navigation})=>{
    
    
  const [Email, setEmail] = useState(''); 
  const [Password, setPassword] = useState('');
  return (
    <View>
      <SafeAreaView>
        <View>
          <Text style={{margin: 50, marginLeft: 123, fontSize: 35}}>
            Instagram
          </Text>
          
          <TextInput
            value={Email}
            onChangeText={text => {
              setEmail(text);
            }}
            style={{
              backgroundColor: '#FAFAFA',
              marginLeft: 50,
              borderRadius: 7,
              marginRight: 50,
              height: 55,
              borderWidth: 0.5,
              marginBottom: 20,
              padding: 10,
            }}
            placeholder="Phone number,Username or Email address"
          />

          <TextInput
            value={Password}
            onChangeText={text => {
              setPassword(text);
            }}
            style={{
              backgroundColor: '#FAFAFA',
              marginLeft: 50,
              borderRadius: 7,
              marginRight: 50,
              height: 55,
              borderWidth: 0.5,
              marginBottom: 20,
              padding: 10,
            }}
            secureTextEntry={true}
            placeholder="Password..."
          />
          <TouchableOpacity onPress={Sign}>
            <Text
              style={{
                backgroundColor: 'skyblue',
                padding: 20,
                marginLeft: 50,
                marginRight: 50,
                textAlign: 'center',
                marginBottom: 20,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          
          <Text style={{textAlign: 'center', marginBottom: 13}}>
            Forgot your login details?
            <Text style={{fontWeight: 'bold'}}>Get help signing in</Text>
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: 'black',
                marginLeft: 50,
              }}
            />
            <View>
              <Text style={{width: 50, textAlign: 'center'}}>or</Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: 'black',
                marginRight: 50,
              }}
            />
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate("Register")}}>
            <Text
              style={{
                backgroundColor: 'skyblue',
                padding: 20,
                marginLeft: 50,
                marginRight: 50,
                textAlign: 'center',
                marginBottom: 20,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
const stack=createStackNavigator();

  return(
   
    <Stack.Navigator>
    <Stack.Screen name="login" component={Login} 	options={{header: () => null}}
/>
    <Stack.Screen name="Register" component={Signup} 	options={{header: () => null}}
/>
  </Stack.Navigator>

  );}

export default First;
