import React, { useState } from "react";
import "react-native-gesture-handler";
import Auth from "@react-native-firebase/auth";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import {
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Svg, { Path } from "react-native-svg";
import First from "./firstlogin";
import { SignInUser, SignOutUser, SignUpUser } from "./apiService";
import { useNavigation } from "@react-navigation/native";

const Perprofile = ({ navigation }) => {
  const [ray, setRay] = useState("follow");
  return (
    <SafeAreaView style={{ height: 800 }}>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 25,
                marginLeft: 15,
                margin: 5,
                fontWeight: "bold",
              }}
            >
              {" "}
              Yuva{" "}
            </Text>
            <Text></Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ margin: 5, marginLeft: 5 }}>
              {/* <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="black"
    className="w-6 h-6"
    width={40}
    height={40}
    
  >
    <Path
      
      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  </Svg> */}
            </View>
            <Text style={{ marginTop: 11, margin: 11 }}>
              {/* <Svg
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
  </Svg> */}
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
            <Image style={styles.image} source={require("./src/1.jpeg")} />
          </View>
          <View style={{ fontWeight: "bold", marginTop: 40 }}>
            <Text style={{ fontWeight: "bold" }}>0</Text>
            <Text>Posts</Text>
          </View>
          <View style={{ fontWeight: "bold", marginTop: 40 }}>
            <Text style={{ fontWeight: "bold" }}>113</Text>
            <Text>Followers</Text>
          </View>
          <View style={{ fontWeight: "bold", marginTop: 40, marginRight: 15 }}>
            <Text style={{ fontWeight: "bold" }}>103</Text>
            <Text>Following</Text>
          </View>
        </View>
        <View style={{ marginLeft: 15, fontWeight: "bold" }}>
          <Text>yuva</Text>
          <Text>matter</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              setRay(!ray);
              //  {ray?setRay("follow"):setRay("unfollow")}
            }}
          >
            <Text
              style={{
                backgroundColor: ray ? "skyblue" : "silver",
                textAlign: "center",
                width: 375,
                padding: 5,
                fontWeight: "bold",
                marginLeft: 5,
                marginTop: 5,
              }}
            >
              {ray ? "follow" : "unfollow"}
            </Text>
          </Pressable>
        </View>
        {/* <View style={{marginLeft:5}}>
            <Text style={{fontWeight:'bold'}}>Story highlights</Text>
            <Text>Keep your favourite stories on your profile</Text>
        </View> */}
        <View>
          <View style={{ right: 130, top: 31 }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
              height={50}
              weight={50}
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z"
              />
            </Svg>
          </View>
          <View style={{ left: 100, bottom: 13 }}>
            <Text style={{ fontWeight: "bold" }}>This Account is Private</Text>
            <Text numberOfLines={3}>
              Follow this account to see their photos and videos
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Perprofile;
const styles = StyleSheet.create({
  image: {
    height: 105,
    width: 105,
    borderRadius: 55,
    margin: 11,
  },
});
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
