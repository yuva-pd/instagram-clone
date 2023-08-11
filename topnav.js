import "react-native-gesture-handler";
import { MenuProvider } from "react-native-popup-menu";

import * as React from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import {
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Svg, { Path } from "react-native-svg";
import Messanger from "./messanger";
import { FirebaseStorageTypes } from "@react-native-firebase/storage";
function messange() {
  return (
    // <View>
    // <Messanger/>
    // </View>
    alert("fvbhj")
  );
}

const Topnav = ({ navigation }) => {
  // const { navigate } = this.props.navigation;
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        {/* <Text style={{ fontSize: 25, margin: 5, fontWeight: "bold" }}>
          <Image
            source={require("./src/head.png")}
            style={{ height: 40, width: 130, marginLeft: 5 }}
          ></Image>
          </Text> */}
        <MenuProvider>
          <Menu>
            <MenuTrigger>
              <Image
                source={require("./src/head.png")}
                style={{ height: 40, width: 130, marginLeft: 5 }}
              ></Image>
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={() => alert("Save")} text="Save" />
              <MenuOption onSelect={() => alert("Delete")} text="Delete" />
            </MenuOptions>
          </Menu>
        </MenuProvider>

        {/* <Text style={{marginTop: 13}} >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth={1.5}
            stroke="black"
            width={22}
            height={22}>
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </Svg>
        </Text> */}
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ margin: 5, marginLeft: 5 }}>
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
        </View>
        <Text
          style={{ marginTop: 11, margin: 11 }}
          onPress={() => {
            return (
              <View>
                <Messanger />
              </View>
              // alert("fvbhj")
            );
          }}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width={31}
            height={31}
            stroke="black"
          >
            <Path d="M25 2C12.348 2 2 11.598 2 23.5c0 6.508 3.133 12.285 8 16.219v8.937l1.469-.781 7.219-3.75C20.703 44.665 22.8 45 25 45c12.652 0 23-9.598 23-21.5S37.652 2 25 2Zm0 2c11.645 0 21 8.758 21 19.5S36.645 43 25 43c-2.164 0-4.258-.313-6.219-.875l-.375-.094-.343.188L12 45.375v-6.563l-.375-.28C6.961 34.941 4 29.538 4 23.5 4 12.758 13.355 4 25 4Zm-2.281 13.719-12.032 12.75L21.5 24.406l5.781 6.188 11.875-12.875-10.531 5.906Z" />
          </Svg>
        </Text>
      </View>
    </View>
  );
};
export default Topnav;
