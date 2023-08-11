import { Text, View ,StyleSheet,Image,TextInput,ScrollView, SafeAreaView} from 'react-native';
function Search(){
    return(
        <SafeAreaView>
        <ScrollView>
        <TextInput style={{backgroundColor:'grey', marginLeft:5,borderRadius:13, marginRight:5 ,height:40 ,marginBottom:20,padding:10}} placeholder="Search"/>
        <View style={{flexDirection:'row'}}>
        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/1.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/2.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/3.jpeg')} />
        </View>
        <View style={{flexDirection:'row'}}>
        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/1.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/2.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/3.jpeg')} />
        </View>
        <View style={{flexDirection:'row'}}>
        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/4.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/5.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/4.jpeg')} />
        </View>
        <View style={{flexDirection:'row'}}>
        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/2.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/1.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/5.jpeg')} />
        </View>
        <View style={{flexDirection:'row'}}>
        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/1.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/2.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/3.jpeg')} />
        </View>
        <View style={{flexDirection:'row'}}>
        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/1.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/5.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/3.jpeg')} />
        </View>
        <View style={{flexDirection:'row'}}>
        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/1.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/5.jpeg')} />

        <Image style={{height:125,width:127.5,margin:1}} source={require('./src/3.jpeg')} />
        </View>
        

</ScrollView>
</SafeAreaView>
    )
};
export default Search;
