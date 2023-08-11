import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Perprofile from "./perprofile";
// import {useState} from 'react-native'
import First from "./firstlogin";
import Homescreen from "./homes";
import hello from "./homes";
import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";
import Auth from "@react-native-firebase/auth";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuProvider } from "react-native-popup-menu";
import stateContext from "./stateContext";
import { BottomSheet } from "react-native-btr";

const Stack = createStackNavigator();
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";

import InstaStory from "react-native-insta-story";

import Topnav from "./topnav";
import Status from "./status";
import Svg, { Path } from "react-native-svg";
import { TextInput } from "react-native-gesture-handler";
// import Homepage from './homepage';
import Login from "./login";
import datae from "./data";
import { Button } from "react-native-paper";
export default function Homes({ navigation }) {
  const [suggest, setSuggest] = useState(false);
  const Stack = createStackNavigator();
  const [po, setpo] = useState([{}]);
  const [photo, setPhoto] = useState();
  const [user, SetUser] = useState([]);
  const [dummy1, SetDummy1] = useState([]);
  const [dummy2, SetDummy2] = useState([]);
  const [users, setUsers] = useState([]);
  const dataGredpped = useContext(stateContext);
  const data = dataGredpped.data;
  const allusers = dataGredpped.allusers;
  const alluser = [];
  const [ray, setRay] = useState([]);
  const [text, setText] = useState();
  const posts = [];
  const [likeArray, setLikeArray] = useState([false, false, false, false]);
  const [userInput, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [followingPosts, setFollowingPosts] = useState([]);

  for (i = 0; i < allusers.length; i++) {
    if (allusers[i]["uid"] === Auth().currentUser.uid) {
      null;
    } else {
      alluser.push(allusers[i]);
    }
  }
  let followingposts = [];

  // followingposts.push(data);
  // for (i = 0; i < alluser.length; i++) {
  //   if (data["following"].includes(alluser[i]["uid"])) {
  //     followingposts.push(alluser[i]);
  //   }
  //   console.log("hi",followingposts[i])
  // }
  // const store = async () => {
    followingposts.push(data);
  for (i = 0; i < alluser.length; i++) {
    if (data["following"].includes(alluser[i]["uid"])) {
       followingposts.push(alluser[i]);
      
    }
  }
    // await AsyncStorage.setItem("qwe", JSON.stringify(followingposts));
    // const value = await AsyncStorage.getItem("qwe");
    // console.log("value",value.length);

  // };
  // store();
  // console.log(followingposts);

  //  AsyncStorage.setItem("followingposts", followingposts);
  //     console.log("AsyncStorage.getItem('@storage_Key')"+AsyncStorage.getItem('followingposts'))
  function Scrolldata({ navigation }) {
    // alert("load"+load)
    const [visible, setVisible] = useState(false);
    const toggleBottomNavigationView = () => {
      //Toggling the visibility state of the bottom sheet
      setVisible(!visible);
    };

    useEffect(async () => {
      SetUser(data["user"]);
      setPhoto(data["profileurl"]);
      setpo(data["postes"].length);
      for (let i = 0; i < po; i++) {
        dummy1.push(data["postes"][i]["postUrl"]);
      }
    }, []);
    // console.log("dummy1" + dummy1);
    function submitHandler() {
      if (userInput == "") {
        return alert("enter comment");
      } else {
        setTodos((prevState) => [...prevState, { title: userInput }]);
        setInput("");
      }
    }
    function renderItem({ item }) {
      return (
        <View style={{ marginLeft: 13 }}>
          <Text>{item.title}</Text>
        </View>
      );
    }
    // console.log(po);
    // if (po % 2 == 0) {
    // setSuggest(true);
    // }
    const suggestions = [];
    let array = ray;
    for (i = 0; i < alluser.length; i++) {
      if (data["following"].includes(alluser[i]["uid"])) {
        array.push(false);
      } else {
        array.push(true);
      }
      setRay(array);
      const index = i;
      suggestions.push(
        <View
          style={{
            backgroundColor: "white",
            left: 13,
            height: 250,
            width: 200,
            margin: 5,
          }}
        >
          <Image
            style={{
              height: 130,
              width: 130,
              borderRadius: 130,
              marginLeft: 31,
              marginTop: 31,
              marginRight: 13,
            }}
            source={{ uri: alluser[i]["profileurl"] }}
          />
          <Text style={{ marginLeft: 69, fontWeight: "bold", top: 13 }}>
            {alluser[i]["user"]}
          </Text>
          <Pressable
            style={{
              top: 31,
              left: 40,
              backgroundColor: "",
              width: 20,
            }}
            onPress={() => {
              const array = [...ray];
              array[index] = !ray[index];
              setRay(array);
              if (array[index] === false) {
                if (data["following"].includes(alluser[index]["uid"])) {
                  //do nothing
                } else {
                  data["following"] = [
                    ...data["following"],
                    alluser[index]["uid"],
                  ];
                  alluser[index]["followers"] = [
                    ...alluser[index]["followers"],
                    data["uid"],
                  ];
                }
              } else if (array[index] === true) {
                data["following"].splice(alluser[index]["uid"], 1);
                alluser[index]["followers"].splice(data["uid"], 1);
                // alert("Qwe");
              }

              // alert(data["following"]);
              //updating the users backend firebase
              firestore()
                .collection("users")
                .doc(Auth().currentUser.uid)
                .update({
                  following: data["following"],
                })
                .then(() => {
                  console.log("User updated!");
                });

              firestore()
                .collection("users")
                .doc(alluser[index]["uid"])
                .update({
                  followers: alluser[index]["followers"],
                })
                .then(() => {
                  console.log("User followes updated!");
                });
            }}
          >
            <Text
              style={{
                backgroundColor: Boolean(ray[i]) ? "skyblue" : "silver",
                textAlign: "center",
                width: 100,
                padding: 5,
                fontWeight: "bold",
                marginLeft: 5,
                marginTop: 5,
              }}
            >
              {Boolean(ray[i]) ? "follow" : "unfollow"}
            </Text>
          </Pressable>
        </View>
      );
    }
    console.log("followingposts", followingposts);

    for (let i = 0; i < followingposts.length; i++) {
      console.log("followingposts2", followingposts);

      // for (j = 0; j < followingposts[i]["postes"].length; j++) {
      posts.push(
        <View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <View style={{ flexDirection: "row" }}>
              {/* <Image style={styles.image} source={images[0]} /> */}

              <TouchableOpacity
                onPress={({}) => {
                  navigation.navigate(HeLlo);
                }}
                style={{ flexDirection: "row" }}
              >
                <Image
                  style={styles.image}
                  source={{ uri: followingposts[i]["profileurl"] }}
                />

                {/* <InstaStory data={[data[0]]} style={styles.image}/> */}

                <Text style={{ marginTop: 20, fontWeight: "500" }}>
                  {followingposts[i]["user"]}
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              Text
              onPress={toggleBottomNavigationView}
              style={{ marginTop: 20 }}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
                width={24}
                height={24}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"
                />
              </Svg>
              <Text>i</Text>
            </Text>
          </View>
          {dummy1[i] != undefined ? (
            <Image
              style={{ height: 500, width: 390 }}
              source={{ uri: dummy1[i] }}
            />
          ) : // alert("no image")
          null}
          {/* {alert(dummy1[i]["postUrl"])} */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <View>
                <Pressable
                  onPress={() => {
                    const copy = [...likeArray];
                    copy[i] = !copy[i];
                    setLikeArray(copy);

                    // setLikeArray(preveArr => {
                    //   let copy = [...preveArr]
                    //   copy[i] = !copy[i]
                    //   return c
                    // })
                    console.log("liked");
                  }}
                >
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6"
                    width={31}
                    height={31}
                    margin={11}
                    fill={likeArray[i] ? "red" : "white"}
                  >
                    <Path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </Svg>
                </Pressable>
              </View>
              <Pressable onPress={() => alert("hi")}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6"
                  width={31}
                  height={31}
                  margin={11}
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </Svg>
              </Pressable>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
                width={31}
                height={31}
                margin={11}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12zm0 0h7.5"
                />
              </Svg>
            </View>
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
                width={31}
                height={31}
                margin={11}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z"
                />
              </Svg>
            </View>
          </View>
          <View>
            <Text style={{ marginLeft: 20 }}>Liked by 103</Text>
            <Text style={{ marginLeft: 20 }}>
              <Text style={{ fontWeight: "500" }}>Yuva: {dummy2[i]}</Text>
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <FlatList
              data={todos}
              renderItem={renderItem}
              // keyExtractor={item => item.id}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <TextInput
                  onChangeText={(val) => setInput(val)}
                  value={userInput}
                  // style={styles.text_input}
                  placeholder="write a task"
                  style={{ margin: 5 }}
                ></TextInput>
              </View>
              <View>
                <TouchableOpacity onPress={submitHandler}>
                  <Text style={{ backgroundColor: "lightgreen", padding: 5 }}>
                    post
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <View>
      <TextInput
        textAlign="center"
        onSubmitEditing={this.onSubmitEdit} 
        defaultValue={text}
        onChangeText={(i)=>{setText(i)}}
        />
      <TouchableOpacity onPress={()=><Text>{text}</Text>}>
        <Text>Press this button to submit editing</Text>
      </TouchableOpacity>
    </View> */}
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
              <View>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      bottom: 59,
                      right: 130,
                    }}
                  >
                    <View
                      style={{
                        borderWidth: 1,
                        padding: 11,
                        borderRadius: 31,
                        right: 13,
                      }}
                    >
                      <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="black"
                        className="w-6 h-6"
                        height={40}
                        width={40}
                      >
                        <Path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185z"
                        />
                      </Svg>
                    </View>
                  </View>
                  <Text style={{ bottom: 50, right: 130 }}>Share</Text>
                </View>
                <View style={{ bottom: 100 }}></View>
                <Text style={{ bottom: 70 }}>hi</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  right: 97,
                  bottom: 40,
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
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z"
                    />
                  </Svg>
                </View>

                <Text style={{ marginLeft: 13, fontWeight: "bold" }}>
                  Add to favourites
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  bottom: 110,
                  right: 130,
                }}
              >
                <View style={{ top: 83, left: 3 }}>
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </Svg>
                </View>

                <Text
                  style={{
                    marginLeft: 13,
                    top: 83,
                    left: 3,
                    fontWeight: "bold",
                  }}
                >
                  Unfollow
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  bottom: 110,
                  right: 130,
                }}
              >
                <View style={{ top: 93, left: 68 }}>
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
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </Svg>
                </View>

                <Text
                  style={{
                    marginLeft: 13,
                    fontWeight: "bold",
                    top: 93,
                    left: 68,
                  }}
                >
                  Why you're seeing this post
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  bottom: 103,
                  right: 130,
                }}
              >
                <View style={{ top: 103, left: 38 }}>
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
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                    />
                  </Svg>
                </View>

                <Text
                  style={{
                    marginLeft: 13,
                    fontWeight: "bold",
                    top: 103,
                    left: 38,
                  }}
                >
                  About this account
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  bottom: 50,
                  right: 130,
                }}
              >
                <View style={{ top: 70 }}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="red"
                    className="w-6 h-6"
                    height={31}
                    width={31}
                  >
                    <Path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                    />
                  </Svg>
                </View>

                <Text
                  style={{
                    marginLeft: 13,
                    fontWeight: "bold",
                    top: 68,
                    color: "red",
                  }}
                >
                  Report
                </Text>
              </View>
            </View>
          </BottomSheet>
          {true ? (
            <View style={{ height: 351 }}>
              <Text style={{ fontWeight: "bold", left: 13, margin: 13 }}>
                Suggested for you
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {suggestions}
              </ScrollView>
            </View>
          ) : (
            alert("suggest not visible")
          )}
        </View>
      );
      // }
      // }
    }
  // }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Status />
        {posts}
      </ScrollView>
    );
  }

  function HomeScreen({ navigation }) {
    return (
      <View style={{ marginTop: 55 }}>
        {/* <Homepage/> */}

        <Topnav />

        <Scrolldata />
      </View>
    );
  }
  function HeLlo({ navigation }) {
    return (
      <View style={{ color: "red", marginTop: 55 }}>
        <Perprofile />
      </View>
    );
  }
  return (
    // <HomeScreen />
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={HomeScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Hello"
        component={HeLlo}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 35,
    width: 35,
    borderRadius: 15,
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
    height: 391,
    justifyContent: "center",
    alignItems: "center",
  },
});
