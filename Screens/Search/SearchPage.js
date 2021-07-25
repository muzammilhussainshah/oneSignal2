import React from 'react';
import { Text, StyleSheet, TextInput, View, ScrollView } from 'react-native';

import { Left, Right, ListItem } from 'native-base'
import PinsCard from '../../Components/PinsCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import CustomInput from '../../Components/Input'
import CustomButton from '../../Components/Button'
import CustomPicker from '../../Components/PickerComp'

class SearchPage extends React.Component {
    render() {
        return (
            <ScrollView>

                <View style={{ marginTop: 10 }}>
                    <Text style={styles.title}>Food</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <PinsCard text='Dairy' img='https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                        <PinsCard text='Vegitables' img='https://images.pexels.com/photos/952476/pexels-photo-952476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                        <PinsCard text='Meet' img='https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                    </ScrollView>
                </View>


                <View>
                    <Text style={styles.title}>Home</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <PinsCard text='Tissues' img='https://images.pexels.com/photos/2062424/pexels-photo-2062424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                        <PinsCard text='Tech' img='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                        <PinsCard text='Cleanings' img='https://images.pexels.com/photos/216794/pexels-photo-216794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    </ScrollView>
                </View>



                <View>
                    <Text style={styles.title}>Popular</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <PinsCard text='' img='https://images.pexels.com/photos/518530/pexels-photo-518530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                        <PinsCard text='' img='https://images.pexels.com/photos/983831/pexels-photo-983831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                        <PinsCard text='' img='https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    </ScrollView>
                </View>



                <View>
                    <Text style={styles.title}>Seasonal</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <PinsCard text='Clothes' img='https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                        <PinsCard text='Christmas' img='https://images.pexels.com/photos/716658/pexels-photo-716658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                        <PinsCard text='Easter' img='https://images.pexels.com/photos/41376/celebration-colored-colorful-decoration-41376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                    </ScrollView>
                </View>


            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 1,
        textTransform: 'uppercase',
        marginLeft: 6
    },
    input: {
        borderBottomColor: '#333',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        width: 250,
        paddingVertical: 6,
        marginLeft: 8, marginRight: 8,
    }
})


function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchPage)
