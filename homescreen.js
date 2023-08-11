import * as React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import Topnav from './topnav';
// import Status from './status';
import Svg, { Path } from "react-native-svg";
// import Scrolldata from './scroll_data';
import { createStackNavigator } from "@react-navigation/stack";

import Search from "./search";
import Profile from "./profile";
import Homes from "./homes";
import Rls from "./Reels";
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ color: "red", marginTop: 55 }}>
      <Homepage />
      {/* <Topnav/>
       <Scrolldata/>  */}
    </View>
  );
}
// function Reels(){
//   <Reels />
// }
function SettingsScreen() {
  return <Search />;
}
function profile() {
  return <Profile />;
}
const Tab = createMaterialBottomTabNavigator();

export default function Homescreen() {
  return (
    // <NavigationContainer>
    // <Topnav/>
    <Tab.Navigator
      // screenOptions={{ tabBarStyle: { backgroundColor: "red" } }}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Home"
        component={Homes}
        options={{
          tabBarIcon: () => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
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
                d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </Svg>
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
              />
            </Svg>
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="reels"
        component={Rls}
        options={{
          tabBarIcon: () => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
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
                d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182zm-5.598-3.18c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182z"
              />
            </Svg>
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="like"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </Svg>
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={profile}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ height: 40, width: 40, borderRadius: 55 }}
              source={require("./src/5.jpeg")}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

// import * as React from 'react';
// import { Text, View ,Button} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import storage from '@react-native-firebase/storage';
// import * as Progress from 'react-native-progress';
// export default function Homescreen() {
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [transferred, setTransferred] = useState(0);
//   const selectImage = () => {
//     const options = {
//       maxWidth: 2000,
//       maxHeight: 2000,
//       storageOptions: {
//         skipBackup: true,
//         path: 'images'
//       }
//     };
//     ImagePicker.showImagePicker(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         const source = { uri: response.uri };
//         console.log(source);
//         setImage(source);
//       }
//     });
//   };
//   const uploadImage = async () => {
//     const { uri } = image;
//     const filename = uri.substring(uri.lastIndexOf('/') + 1);
//     const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
//     setUploading(true);
//     setTransferred(0);
//     const task = storage()
//       .ref(filename)
//       .putFile(uploadUri);
//     // set progress state
//     task.on('state_changed', snapshot => {
//       setTransferred(
//         Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
//       );
//     });
//     try {
//       await task;
//     } catch (e) {
//       console.error(e);
//     }
//     setUploading(false);
//     Alert.alert(
//       'Photo uploaded!',
//       'Your photo has been uploaded to Firebase Cloud Storage!'
//     );
//     setImage(null);
//   };
//   return (
//     <Text>djhfbkliukythrgfdsfghjkl;';likujhgfdsa</Text>
//   );
// }
