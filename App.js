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
} from "react-native";
import { MenuProvider } from "react-native-popup-menu";

import sign from "./apiService";
import "react-native-gesture-handler";
import Homescreen from "./homescreen";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  useGestureHandlerRef,
} from "@react-navigation/stack";
import First from "./firstlogin";
import Screen5 from "./ftest";
const Stack = createStackNavigator();
import Login from "./login";
import { useContext, useEffect } from "react";
import stateContext from "./stateContext";
import State from "./state";
import { firebase } from "@react-native-firebase/auth";
import { useState } from "react";
function MyStack() {
  const state = useContext(stateContext);

  const i = "Homescreen";
  const [cuser, setCuser] = useState(null);
  const userHandler = (user) => {
    user ? setCuser(user) : setCuser(null);
  };
  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => userHandler(user));
  }, []);
  return (
    // <Stack.Navigator initialRouteName={state.sign}>
    //   <Stack.Screen
    //     name="login"
    //     component={Login}
    //     options={{ header: () => null }}
    //   />

    //   <Stack.Screen
    //     name="Homescreen"
    //     component={Homescreen}
    //     options={{ header: () => null }}
    //   />
    // </Stack.Navigator>
    <>{cuser ? <Homescreen /> : <Login />}</>
  );
}

export default function App() {
  return (
    <State>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </State>
    // <Screen5 />
  );
}
