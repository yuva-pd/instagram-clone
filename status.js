import { Text, View ,StyleSheet,Image,ScrollView} from 'react-native';
import InstaStory from 'react-native-insta-story';
import Story from 'react-native-story'

import  {useState,useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';

import storage from '@react-native-firebase/storage';

import Topnav from './topnav';
export const data = [
  {
      user_id: 1,
      user_image: "https://images.news18.com/ibnlive/uploads/2022/04/allu-arjun-ram-charan.jpg",
      user_name: "Salman",
      stories: [
          {
              story_id: 1,
              story_image: "https://images.app.goo.gl/iCAeJFPE28qdtp2PA",
              // swipeText:'Custom swipe text for this story',
              // onPress: () => console.log('story 1 swiped'),
          },
          {
              story_id: 2,
              story_image:  "https://images.news18.com/ibnlive/uploads/2022/04/allu-arjun-ram-charan.jpg",   }]
  },
  {
    user_id: 2,
    user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: "Test User",
    stories: [
        {
            story_id: 1,
            story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CIO",
            swipeText:'Custom swipe text for this story',
            onPress: () => console.log('story 1 swiped'),
        },
        {
            story_id: 2,
            story_image: "://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
            swipeText:'Custom swipe text for this story',
            onPress: () => console.log('story 2 swiped'),
        }]
},
{
  user_id:3,
  user_image:"https://img.mensxp.com/media/content/2021/May/Allu-Arjun-Dance-Numbers-1_60af55bd3e9dc.jpeg",
   user_name: "Test User",
  stories: [
      {
          story_id: 1,
          story_image:"https://img.mensxp.com/media/content/2021/May/Allu-Arjun-Dance-Numbers-1_60af55bd3e9dc.jpeg",
          swipeText:'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
      },
      {
          story_id: 2,
          story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
          swipeText:'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
      }]
},

];

  
function Status() {

useEffect(async ()=>{
  let userData=await firestore().collection("users").doc(Auth().currentUser.uid).get();    
        setPhoto(userData.data()["profileurl"])
 },[])
    const [photo,setPhoto]=useState();
  return (
     <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection:'row'}}>
          <Image style={styles.image} source={{uri:photo}} />
          {/* data={[data[0]] */}
          <InstaStory data={data}
            duration={5}
            // onStart={item => console.log(item)}
            // onClose={item => console.log('close: ', item)}
            
/>
<Text></Text>
          {/* <Image style={styles.image} source={require('./src/2.jpeg')} />

          <Image style={styles.image} source={require('./src/3.jpeg')} />

          <Image style={styles.image} source={require('./src/4.jpeg')} />

          <Image style={styles.image} source={require('./src/5.jpeg')} />
          <Image style={styles.image} source={require('./src/1.jpeg')} />
          <Image style={styles.image} source={require('./src/2.jpeg')} />

          <Image style={styles.image} source={require('./src/3.jpeg')} />

          <Image style={styles.image} source={require('./src/4.jpeg')} />

          <Image style={styles.image} source={require('./src/5.jpeg')} />
          <Image style={styles.image} source={require('./src/1.jpeg')} />
          <Image style={styles.image} source={require('./src/2.jpeg')} />

          <Image style={styles.image} source={require('./src/3.jpeg')} /> */}


          </View>
          </ScrollView>
  );
}

export default Status;

const styles = StyleSheet.create({
   
    image: {
      height: 70,
      width: 70,
      borderRadius: 55,
      margin:2,
    }
  });
  