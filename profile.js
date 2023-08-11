// import React from 'react';
import React, { useState, useEffect } from "react";
import { useContext } from "react";

import storage from "@react-native-firebase/storage";
import { utils } from "@react-native-firebase/app";
// import firestore from '@react-native-firebase/firestore';
import "react-native-gesture-handler";
import Auth from "@react-native-firebase/auth";
import FilePicker, { types } from "react-native-document-picker";
import firestore from "@react-native-firebase/firestore";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { BottomSheet } from "react-native-btr";

import {
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  TextInput,
} from "react-native";
import stateContext from "./stateContext";

import Homes from "./homes"
import {
  NavigationContainer,
  NavigationHelpersContext,
} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Svg, { Path } from "react-native-svg";
import First from "./firstlogin";
import { SignInUser, SignOutUser, SignUpUser } from "./apiService";
import { useNavigation } from "@react-navigation/native";

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// const Tab = createMaterialTopTabNavigator();

function Profilee({ navigation }) {
  const [following, setFollowing] = useState(0);
  const [follower, setFollower] = useState(0);
  const dataGredpped = useContext(stateContext);
  const data = dataGredpped.data;
  const postee = [];
  const allusers = dataGredpped.allusers;
  const alluser = [];

  const [dummy1, setDummy1] = useState([]);
  const [po, setpo] = useState([{}]);

  const [name, setName] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    setFollowing(data["following"].length);
    setFollower(data["followers"].length);
    setName(data["user"]);
    setPhoto(data["profileurl"]);
    setpo(data["postes"].length);

    for (let i = 0; i < data["postes"].length; i++) {
      dummy1.push(data["postes"][i]["postUrl"]);
    }
  }, []);
  console.log("efrtyutrew"+dummy1)
  for (let i = 0; i < po; i++) {
    postee.push(
      dummy1[i] != undefined ? (
        <View style={{backgroundColor:'green',margin:3}}>
          <Image
            style={{ height: 131, width: 123 }}
            source={{ uri: dummy1[i] }}
          />
        </View>
      ) : (
        alert("no image")
      )
    );
  }
  console.log("1234567890" + dummy1);
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  // const handleSignOut=()=>{
  //   auth
  //   .signOut()
  //   .then(()=>{ navigation.replace(First)})
  //   .catch(error =>console.log(error.message ))
  // }
  // const navigation = useNavigation();

  const signOut = () => {
    //  navigation.navigate
    SignOutUser(navigation)
      .then((data) => {
        alert("profile" + data);
      })
      .catch((error) => {
        alert("p" + error);
      });
  };
  const [user, setUser] = useState();

  const [visibl, setVisibl] = useState(false);
  const toggleBottomNavigation = () => {
    //Toggling the visibility state of the bottom sheet
    setVisibl(!visibl);
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
                width={22}
                height={22}
                marginTop={11}
                marginLeft={5}
                // {...props}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z"
                />
              </Svg>
              <Text style={{ fontSize: 25, margin: 5, fontWeight: "bold" }}>
                {name}
                {/* {name.data()["user"]} */}
              </Text>
              <Text style={{ marginTop: 13, marginLeft: 3 }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="black"
                  width={22}
                  height={22}
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </Svg>
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={{ margin: 5, marginLeft: 5 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(Posts);
                  }}
                >
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6"
                    width={40}
                    height={40}
                  >
                    <Path d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </Svg>
                </TouchableOpacity>
              </View>

              <Text
                onPress={toggleBottomNavigationView}
                style={{ marginTop: 11, margin: 11 }}
              >
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6"
                  width={31}
                  height={31}
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </Svg>
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              {photo != undefined ? (
                <View>
                  <Image style={styles.image} source={{ uri: photo }} />
                </View>
              ) : null}
            </View>
            <View style={{ fontWeight: "bold", marginTop: 40 }}>
              <Text style={{ fontWeight: "bold" }}>
                {data["postes"].length}
              </Text>
              <Text >Posts</Text>
            </View>
            <View style={{ fontWeight: "bold", marginTop: 40 }}>
              <Text style={{ fontWeight: "bold" }}>{follower}</Text>
              <Text>Followers</Text>
            </View>
            <View
              style={{ fontWeight: "bold", marginTop: 40, marginRight: 15 }}
            >
              <Text style={{ fontWeight: "bold" }}>{following}</Text>
              <Text>Following</Text>
            </View>
          </View>
          <View style={{ marginLeft: 15, fontWeight: "bold" }}>
            <Text>yuva</Text>
            <Text>matter</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                backgroundColor: "silver",
                textAlign: "center",
                width: 350,
                padding: 5,
                fontWeight: "bold",
                marginLeft: 5,
                marginTop: 5,
              }}
              onPress={() => {
                navigation.navigate(editProfile);
              }}
            >
              Edit profile
            </Text>
            <Text
              style={{
                backgroundColor: "silver",
                textAlign: "center",
                width: 25,
                padding: 5,
                fontWeight: "bold",
                marginLeft: 5,
                marginTop: 5,
              }}
            >
              +
            </Text>
          </View>
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontWeight: "bold" }}>Story highlights</Text>
            <Text>Keep your favourite stories on your profile</Text>
          </View>
          <View>
            {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}
            {/* <Button title="signout" onPress={signOut}></Button> */}
            {/* {user && <Button title="Log Out" onPress={signOut} />} */}
            <Text>____________________________________________________</Text>
          </View>

          {/* <View style={{margin: 5}}>
          {fileData.length > 0 ? (
            <Image
              style={{height: 130, width: 130}}
              source={{uri: fileData[0].uri}}
            />
          ) : null}
        </View> */}
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {postee}
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomSheet
        visible={visible}
        //setting the visibility state of the bottom shee
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state on the click of the back botton
        onBackdropPress={toggleBottomNavigationView}
        //Toggling the visibility state on the clicking out side of the sheet
      >
        {/*Bottom Sheet inner View*/}
        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              bottom: 60,
              right: 130,
            }}
          >
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
                height={31}
                width={31}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                />
              </Svg>
            </View>

            <Text style={{ marginLeft: 13, fontWeight: "bold" }}>Settings</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              bottom: 50,
              right: 130,
            }}
          >
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
                height={31}
                width={31}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </Svg>
            </View>

            <Text style={{ marginLeft: 13, fontWeight: "bold" }}>Archive</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              bottom: 40,
              right: 130,
            }}
          >
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
                height={31}
                width={31}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5z"
                />
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 6.75h.75v.75h-.75v-.75zm0 9.75h.75v.75h-.75v-.75zm9.75-9.75h.75v.75h-.75v-.75zm-3 6.75h.75v.75h-.75v-.75zm0 6h.75v.75h-.75v-.75zm6-6h.75v.75h-.75v-.75zm0 6h.75v.75h-.75v-.75zm-3-3h.75v.75h-.75v-.75z"
                />
              </Svg>
            </View>

            <Text style={{ marginLeft: 13, fontWeight: "bold" }}>Qr code</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              bottom: 30,
              right: 130,
            }}
          >
            <View style={{ right: 13 }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
                height={31}
                width={31}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z"
                />
              </Svg>
            </View>

            <Text style={{ left: 3, fontWeight: "bold" }}>Saved</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              bottom: 20,
              right: 130,
            }}
          >
            <View style={{ left: 13 }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
                height={31}
                width={31}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </Svg>
            </View>

            <Text style={{ marginLeft: 13, left: 15, fontWeight: "bold" }}>
              close friends
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              bottom: 10,
              right: 130,
            }}
          >
            <View style={{ left: 3 }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
                height={31}
                width={31}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z"
                />
              </Svg>
            </View>

            <Text style={{ marginLeft: 13, left: 3, fontWeight: "bold" }}>
              Favourite
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              bottom: 0,
              right: 130,
            }}
          >
            <View style={{ left: 28 }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
                height={31}
                width={31}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796a3.754 3.754 0 0 1-.88 1.388 3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
                />
              </Svg>
            </View>

            <Text style={{ marginLeft: 13, left: 26, fontWeight: "bold" }}>
              COVID-19 center
            </Text>
          </View>
          <View>
            <Button title="signout" onPress={signOut}></Button>
          </View>
        </View>
      </BottomSheet>
    </>
  );
}
function Posts() {
  const handleFilePicker = async () => {
    try {
      const response = await FilePicker.pick({
        presentationStyle: "overFullScreen",
        allowMultiSelection: false,
        type: [types.images],
      });

      // setFileData(response);
      setFileData([...fileData, response]);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // userData= firesore().collection("users").doc(auth().currentUser.uid).get();
  // userData.data()['username']
  const [text, setText] = useState([]);
  const [fileData, setFileData] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const submitPost = async (index) => {
    // console.log(fileData[index][0].uri);
    let userData = {};
    firestore()
      .collection("users")
      .doc(Auth().currentUser.uid)
      .onSnapshot((documentSnapshot) => {
        // console.log(documentSnapshot.data());
        userData = documentSnapshot.data();
      });

    // console.log(fileData[0].uri);
    const uploadUri = fileData[index][0].uri;
    let filename = uploadUri.substring(uploadUri.lastIndexOf("/") + 1);
    let url = "";
    //done to manage same file name gets override
    const extension = filename.split(".").pop();
    const name = filename.split(".").slice(0, -1).join(".");
    filename = name + Date.now() + "." + extension;
    const uniqueId = Date.now().toString();
    const task = await storage()
      .ref("posts")
      .child(Auth().currentUser.uid)
      .child(uniqueId)
      .putFile(uploadUri);
    url = await storage()
      .ref("posts")
      .child(Auth().currentUser.uid)
      .child(uniqueId)
      .getDownloadURL();
    setUploading(true);
    setTransferred(0);

    // task.on('state_changed', taskSnapshot => {
    //   console.log(
    //     `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
    //   );

    //   setTransferred(
    //     (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100,
    //   );
    // });

    try {
      console.log(filename, uploadUri);

      await storage()
        .ref("posts")
        .child(Auth().currentUser.uid)
        .child(uniqueId)
        .putFile(uploadUri);
      url = await storage()
        .ref("posts")
        .child(Auth().currentUser.uid)
        .child(uniqueId)
        .getDownloadURL();

      // await firestore().collection('users').doc(uniqueId).collection("posts").doc(uniqueId).add({
      await firestore()
        .collection("users")
        .doc(Auth().currentUser.uid)
        .update({
          postes: [
            ...userData["postes"],
            { likes: [], postUrl: url, text: text },
          ],
        });
        
      console.log(url);
      Alert.alert(
        "Image Uploaded",
        "Your image has been uploaded to the Firebase Cloud Storage Successfully!"
      );
      setUploading(false);
      setFileData([]);
      naviagtion.navigate(Homes);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={{ margin: 31 }}>
      <Text onPress={handleFilePicker}>Post an image</Text>
      <View style={{ flex: 1, margin: 31 }}>
        {fileData.length > 0
          ? fileData.map((ls, index) => {
              return (
                <View key={index}  style={{left:40}}>
                  <Image
                    source={{ uri: ls[0].uri }}
                    style={{ right: 31, height: 130, width: 130 }}
                  />
                  {uploading ? (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        top:500,
                      }}
                    >
                      <Text>{transferred} % completed!</Text>
                      <ActivityIndicator size="large" color="blue" />
                    </View>
                  ) : null}
                  <TextInput
                    autoFocus
                    value={text}
                    onChangeText={(te) => {
                      setText(te);
                    }}
                    style={{
                      backgroundColor: "silver",
                      left: 100,
                      bottom: 130,
                      height: 130,
                      width:130
                    }}
                    placeholder="enter description"
                  ></TextInput>
                  <View >
                  <TouchableOpacity
                    style={{
                      right:40,
                      backgroundColor: "orange",
                      paddingHorizontal: 45,
                      paddingVertical: 5,

                      
                    }}
                    onPress={() => submitPost(index)}
                  >
                    <Text
                      style={{
                        color: "white",
                        alignItems: "center",
                        justifyContent: "center",
                        alignContent:'center',
                        marginLeft:65
                      }}
                    >
                      post
                    </Text>
                  </TouchableOpacity>
                  </View>
                </View>
              );
            })
          : null}
        {/* <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              paddingHorizontal: 20,
              paddingVertical: 15,
            }}
            onPress={() => handleFilePicker()}>
            <Text style={{color: 'white'}}>OPEN</Text>
          </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
function editProfile() {
  return (
    <SafeAreaView>
      <View style={{ top: 31 }}>
        <View
          style={{
            height: 100,
            width: 100,
            borderWidth: 1,
            left: 131,
            bottom: 31,
            borderRadius: 100,
          }}
        ></View>
        <View style={{right:13,bottom:20}} >
        <Button title="change profile"></Button>
        </View>
        <View style={{ top: 31 }}>
          <Text style={{ fontSize: 25 }}>name:</Text>
          <TextInput
            style={{
              backgroundColor: "silver",
              height: 31,
              left: 80,
              bottom: 31,
            }}
          ></TextInput>
          <Text style={{ fontSize: 25 }}>bio:</Text>
          <TextInput
            style={{
              backgroundColor: "silver",
              height: 31,
              left: 75,
              bottom: 31,
            }}
          ></TextInput>

          <Button title="update the details"></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default function Profile() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profilee"
        component={Profilee}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="Posts"
        component={Posts}
        // options={{ header: () => null }}
      />
      <Stack.Screen
        name="editProfile"
        component={editProfile}
        // options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 103,
    width: 103,
    borderRadius: 55,
    margin: 11,
  },
  container: {
    flex: 1,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F7FA",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
});
