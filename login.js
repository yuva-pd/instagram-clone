// import React from 'react';
import { useState, useEffect } from "react";
import { SignInUser, SignOutUser, SignUpUser } from "./apiService";
import Auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import FilePicker, { types } from "react-native-document-picker";
import storage from "@react-native-firebase/storage";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  Button,
  View,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const Lgin = ({ navigation }) => {
  const [sign, setSign] = useState();
  const [uuser, setUuser] = useState();

  useEffect(() => {
    const suscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return suscriber;
  }, []);
  const [nusr, setNusr] = useState({
    email: "",
    pass: "",
  });
  const onAuthStateChanged = (user) => {
    setUuser(user);
  };
  const signIn = () => {
    // alert(Auth().currentUser.uid);

    SignInUser(nusr.email, nusr.pass, navigation)
      .then((data) => {
        alert(data);
        alert(Auth().currentUser.uid);
      })
      .catch((error) => {
        alert(error);
      });
    console.log(nusr.email, nusr.pass);
    setUsr({ ...usr, email: "", pass: "" });
  };
  const [usr, setUsr] = useState({
    email: "",
    pass: "",
  });

  return (
    <SafeAreaView>
      <View>
        <View style={{ marginLeft: 80 }}>
          <Text style={{ marginTop: 50, marginBottom: 50 }}>
            <Image
              source={require("./src/head.png")}
              style={{ height: 65, width: 215 }}
            ></Image>
          </Text>
        </View>

        <TextInput
          value={nusr.email}
          onChangeText={(text) => {
            setNusr({ ...nusr, email: text });
          }}
          style={{
            backgroundColor: "#FAFAFA",
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
          value={nusr.pass}
          onChangeText={(text) => {
            setNusr({ ...nusr, pass: text });
          }}
          style={{
            backgroundColor: "#FAFAFA",
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
        <TouchableOpacity onPress={signIn}>
          <Text
            style={{
              backgroundColor: "skyblue",
              color: "white",
              padding: 20,
              marginLeft: 50,
              marginRight: 50,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", marginBottom: 13 }}>
          Forgot your login details?
          <Text style={{ fontWeight: "bold" }}>Get help signing in</Text>
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "black",
              marginLeft: 50,
            }}
          />
          <View>
            <Text style={{ width: 50, textAlign: "center" }}>or</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "black",
              marginRight: 50,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              backgroundColor: "skyblue",
              padding: 20,
              marginLeft: 50,
              marginRight: 50,
              textAlign: "center",
              marginBottom: 20,
              color: "white",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const Sgin = ({ navigation }) => {
  const ffs = firestore().collection("users");
  useEffect(() => {
    const suscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return suscriber;
  }, []);
  const [Name, setName] = useState("");
  // const [fileData, setFileData] = useState([]);
  // const handleFilePicker = async () => {
  //   try {
  //     const response = await FilePicker.pick({
  //       presentationStyle: 'fullScreen',
  //       allowMultiSelection: true,
  //       type: [types.images],
  //     });

  //     setFileData([...fileData, response]);
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const submitPost = async index => {
  //   console.log(fileData[index][0].uri);
  //   console.log("hiiii")

  //   const uploadUri = fileData[index][0].uri;
  //   console.log("EWFRGHTRTEW"+uploadUri)

  //   url = await storage()
  //   .ref('users')
  //   .child(Auth().currentUser.uid)
  //   .getDownloadURL();
  //   try {
  //     await storage().ref("users").child(Auth().currentUser.uid).putFile(uploadUri);
  //     url = await storage()
  //     .ref('users')
  //     .child(Auth().currentUser.uid)
  //     .getDownloadURL();
  //           Alert.alert(
  //       'Image Uploaded',
  //       'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
  //     );
  //   } catch (e) {
  //     // console.log(e);
  //   }
  // };
  const [text, setText] = useState([]);
  const [fileData, setFileData] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const handleFilePicker = async () => {
    try {
      const response = await FilePicker.pick({
        presentationStyle: "fullScreen",
        allowMultiSelection: true,
        type: [types.images],
      });

      // setFileData(response);
      setFileData([...fileData, response]);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const [url, setUrl] = useState("");
  const submitPost = async (index) => {
    const uniqueId = Date.now().toString();
    console.log(index);
    // console.log(fileData[0].uri);
    const uploadUri = fileData[index][0].uri;

    console.log(uniqueId);

    setUploading(true);
    setTransferred(0);

    try {
      console.log(uploadUri);
      await storage()
        .ref("users")
        .child(uniqueId)

        .putFile(uploadUri);
      let tempurl = await storage()
        .ref("users")
        .child(uniqueId)

        .getDownloadURL();
      setUrl(tempurl);
      console.log(url);
      Alert.alert(
        "Image Uploaded",
        "Your image has been uploaded to the Firebase Cloud Storage Successfully!"
      );
      setUploading(false);
      // setFileData([]);
    } catch (e) {
      console.log(e);
    }
  };

  const signUp = () => {
    SignUpUser(nusr.email, nusr.pass, navigation)
      .then((data) => {
        console.log(Auth().currentUser.uid);
        firestore().collection("users").doc(Auth().currentUser.uid).set({
          user: Name,
          email: nusr.email,
          following: [],
          followers: [],
          profileurl: url,
          postes:[],
          uid: Auth().currentUser.uid,
        });
        alert(data);
      })
      .catch((error) => {
        alert(error);
      });
    setNusr({ ...nusr, email: "", pass: "" });
  };
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    setUser(user);
  };
  const [nusr, setNusr] = useState({
    email: "",
    pass: "",
  });
  const signOut = () => {
    SignOutUser()
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            marginLeft: 75,
            marginRight: 75,
            marginTop: 75,
            marginBottom: 25,
          }}
        >
          <Image
            source={require("./src/head.png")}
            style={{ height: 65, width: 215 }}
          ></Image>
        </Text>
        {/* <View >
      {fileData.length > 0
        ? fileData.map((ls, index) => {
            return (
              <View key={index}>
                <Image
                  source={{uri: ls.uri}}
                  style={{height: 130, width: 130}}
                />
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                  </View>
                <TouchableOpacity
                  style={{backgroundColor: 'blue',
                  paddingHorizontal: 20,
                  paddingVertical: 15,}}
                  onPress={() => submitPost()}>
                  <Text style={{color: 'white'}}>Upload</Text>
                </TouchableOpacity>
              </View>
            );
          })
        : null}
      <TouchableOpacity
        style={{
          backgroundColor:'#FAFAFA',
        paddingHorizontal: 20,
        paddingVertical: 15,
      marginRight:50,
    marginLeft:50,
  borderWidth:0.5,
borderRadius:5,
marginBottom:15}}
        onPress={() => handleFilePicker()}>
        <Text >pick a profile pic</Text>
      </TouchableOpacity>
    </View> */}
        <View>
          {fileData.length > 0
            ? fileData.map((ls, index) => {
                return (
                  <View key={index}>
                    <Image
                      source={{ uri: ls[0].uri }}
                      style={{
                        height: 130,
                        width: 130,
                        marginLeft: 135,
                        margin: 5,
                      }}
                    />
                    {uploading ? (
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text>{transferred} % completed!</Text>
                        <ActivityIndicator size="large" />
                      </View>
                    ) : null}

                    <TouchableOpacity onPress={() => submitPost(index)}>
                      <Text
                        style={{
                          textAlign: "center",
                          justifyContent: "center",
                          marginBottom: 31,
                          color: "white",
                          backgroundColor: "silver",
                          padding: 13,
                          marginLeft: 50,
                          marginRight: 50,
                          borderRadius: 50,
                        }}
                      >
                        post
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })
            : null}
          <TouchableOpacity onPress={() => handleFilePicker()}>
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                marginBottom: 31,
                color: "white",
                backgroundColor: "silver",
                padding: 13,
                marginLeft: 50,
                marginRight: 50,
                borderRadius: 50,
              }}
            >
              select image
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          value={Name}
          onChangeText={(text) => {
            setName(text);
          }}
          style={{
            backgroundColor: "#FAFAFA",
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
          value={nusr.email}
          onChangeText={(text) => {
            setNusr({ ...nusr, email: text });
          }}
          style={{
            backgroundColor: "#FAFAFA",
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
          value={nusr.pass}
          onChangeText={(text) => {
            setNusr({ ...nusr, pass: text });
          }}
          style={{
            backgroundColor: "#FAFAFA",
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
        <TouchableOpacity onPress={signUp}>
          <Text
            style={{
              backgroundColor: "skyblue",
              color: "white",
              padding: 20,
              marginLeft: 50,
              marginRight: 50,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Signup
          </Text>
        </TouchableOpacity>
        {/* {user && <Button title="Log Out" onPress={signOut} />} */}
      </View>
    </SafeAreaView>
  );
};
function Login() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Lgin}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Register"
        component={Sgin}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
export default Login;
