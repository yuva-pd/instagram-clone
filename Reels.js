import React, { useState, useRef, useEffect } from "react";
import Reels from "react-native-instagram-reels";

import Video from "react-native-video";
import Svg, { Path } from "react-native-svg";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
const { height, width } = Dimensions.get("window");

import { transparent } from "react-native-paper/lib/typescript/styles/colors";
import { onChange } from "react-native-reanimated";
export default Rls = () => {
  const data = [
    {
      uri: "https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sample.mp4",
    },
    {
      uri: "https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sampleLandscape.mp4",
    },
    {
      uri: "https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4",
    },
  ];
  const vedioRef = useRef(null);
  const [copy, setCopy] = useState(true);
  const onBuffer = (e) => {
    console.log("buffer" + e);
  };
  const onError = (e) => {
    console.log("error" + e);
  };
  const onChangeIndex = ({ index }) => {
    console.log("ewfrgtjyrewqrtyREWRTYJH" + index);
    setIndex(index);
  };
  const [mute,setMute]= useState(false);
  function muteee(){
    setMute(!mute)
  }
  const [cindex, setIndex] = useState(0);
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, height: 800 }}>
        <Video
          source={{
            uri: item.uri,
          }} // Can be a URL or a local file.
          ref={vedioRef} // Store reference
          onBuffer={onBuffer} // Callback when remote video is buffering
          onError={onError}
          resizeMode="cover"
          muted={mute}
          paused={cindex!==index}
        //   paused={true} 
          style={styles.backgroundVideo}
        />
        <SafeAreaView>
          <View>
            <View style={{ left: 331, top: 331 }}>
              <Pressable
                onPress={() => {
                  //   const copy = true
                  setCopy(!copy);
                  console.log("liked");
                }}
              >
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                  width={40}
                  height={40}
                  margin={11}
                  fill={copy ? "red" : "transparent"}
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </Svg>
              </Pressable>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
                width={40}
                height={40}
                margin={11}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </Svg>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
                width={31}
                height={31}
                margin={14.3}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12zm0 0h7.5"
                />
              </Svg>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
                width={40}
                height={40}
                margin={11}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"
                />
              </Svg>
            </View>
          </View>
          <View style={{ top: 300, flexDirection: "row" }}>
            <Image
              source={require("./src/1.jpeg")}
              style={{
                height: 55,
                width: 55,
                marginLeft: 5,
                borderRadius: 100,
              }}
            ></Image>
            <Text
              style={{
                color: "white",
                marginTop: 13,
                fontWeight: "bold",
                marginLeft: 13,
                fontSize: 20,
              }}
            >
              Geek
            </Text>
            <TouchableOpacity onPress={muteee}>
              <Text
                style={{
                  padding: 11,
                  bottom: 6,
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  color: "white",
                  borderRadius: 6,
                  borderColor: "white",
                  borderWidth: 1,
                  marginTop: 13,
                  marginBottom: 13,
                  margin: 13,
                }}
              >
                follow
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                top: 301,
                marginLeft:13,
                color: "white",


              }}
            >
              Description :
              
            </Text>
            <Text  style={{
               
               top: 304,
               color: "white",
               marginLeft:13,

             }}>
               hii ,this was the Reels which was implemented by me.
             </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <SwiperFlatList
        data={data}
        renderItem={renderItem}
        vertical={true}
        keyExtractor={(item, index) => index.toString()}
        onChangeIndex={onChangeIndex}
      />

      <View style={{ position: "absolute", top: 40, left: 16 }}>
        <Text style={styles.textstyle}>Reels</Text>
      </View>
      <View style={{ position: "absolute", top: 40, right: 16 }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          height={50}
          width={50}
          color={"white"}
        >
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316z"
          />
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm2.25-2.25h.008v.008h-.008V10.5z"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    height: 800,
    width: width,
  },
  flexhorizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textstyle: {
    fontSize: 29,
    fontWeight: "bold",
    marginLeft: 20,
    color: "white",
  },
});
