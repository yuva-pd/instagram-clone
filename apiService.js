
import React, { useState } from "react";
import Auth from "@react-native-firebase/auth";
import Homescreen from "./homescreen";
import First from "./firstlogin";
import firestore from "@react-native-firebase/firestore";
// import {}
import App from "./App";
import Login from "./login";
import { useContext } from "react";
import stateContext from "./stateContext";

// const [sign,setSign]=useState();
// let sign=true;

export const SignUpUser = (email, password, navigation) => {
  return new Promise(function (resolve, reject) {
    Auth()
      .createUserWithEmailAndPassword(email, password, navigation)
      .then(() => {
        navigation.navigate(App);
        // navigation.navigate(Homescreen);
     
        resolve("Signd Up Successfully");

        // resolve(navigation.navigate(Homescreen));
      })
      .catch((error) => {
        reject("ai"+error);
      });
  });
};
export const SignInUser = (email, password, navigation) => {
  return new Promise(function (resolve, reject) {
    Auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate(App);
        resolve("Signed In Successfully");
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const SignOutUser = (navigation) => {
  return new Promise(function (resolve, reject) {
    Auth()
      .signOut()
      .then(() => {
        navigation.push(Login);
        resolve("Signed Out Successfully");
      })
      .catch((error) => {
        reject(error);
      });
  });
};








