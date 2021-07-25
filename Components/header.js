import React, { Component } from 'react'
import { TextInput, View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchBar from '../Components/searchBar'


// export default CloseProfile = (props,func) => {

export default Header = (props) => {
    console.log(props)
    return (
        <View style={{ height: 55, backgroundColor: "#003366" }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <TouchableOpacity
                    onPress={() => props.func()}
                    style={{ flex: 2, justifyContent: "center", alignItems: "center" }} >
                    <Entypo name='menu' style={{ color: "#ffff", fontWeight: "bold", fontSize: 23, }} />
                </TouchableOpacity>

                <View style={{ flex: 8, justifyContent: "center", alignItems: "center", }} >
               {(props.title)?(
                  <Text style={{color:"#fff"}}>{props.title}</Text>
               ):(
                  <SearchBar darkBody={() => props.darkBody()} />
               )}  
                </View>

                <TouchableOpacity
                    onPress={() => props.func2()}
                    style={{ flex: 2, justifyContent: "center", alignItems: "center", }} >
                    <AntDesign name='filter' style={{ color: "#ffff", fontWeight: "bold", fontSize: 23, }} />
                </TouchableOpacity>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    buttonView: {
        height: 45,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#141414',
        borderWidth: .3,
        marginVertical: 6,
        borderRadius: 5
    },
    btnText: { color: "#141414", fontSize: 17, fontWeight: "700" }
})
