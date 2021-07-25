import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, TextInput,
} from 'react-native';
import Textarea from 'react-native-textarea';
import { Madoka } from 'react-native-textinput-effects';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SelectImages from '../Components/SelectImages'
import { CheckBox } from 'react-native-elements';
import CustomButton from '../Components/Button'
import { connect } from 'react-redux';
import { array } from 'prop-types';

class CreateYardsInputs extends Component {
    constructor() {
        super()
        this.state = {
            isDrawer: false,
            isFilter: false,
            // checked: true,
            loader: false,
            description: "",
            phone: "",
            checked: true,
            title: "",
            address: "",
            price: "",
            weight: "",
            packing: false,
            flag: false,
            standard: {
                vegan: false, OvoVegetarian: false, LactoVegetarian: false, LactoOvoVegetarian: false, pescetarian: false
            },
            religious: {
                bahai: false, Buddhism: false, Christianity: false, Hinduism: false, Judaism: false, Islam: false
            },
            common: {
                Peanut: false, Milk: false, Egg: false, Wheat: false, Soy: false, Fish: false, Shellfish: false, Other: false,
            },
        }
        _panResponder = {};
    }
    post(catogery) {
        this.setState({
            loader: !this.state.loader
        })
        const { title, description, selectedImages, price, weight, address, phone, packing, common, religious, standard } = this.state
        let myYard = {
            title, description, selectedImages, price, weight, address, phone, packing, catogery,
            time: new Date().getTime()
        }



        let subCatogeries = []
        if (catogery === "Food") {
            subCatogeries.push(common)
            subCatogeries.push(religious)
            subCatogeries.push(standard)
            myYard.subcatory = subCatogeries
        }
        var bodyFormData = new FormData();

        // for (var key in cloneData) {
        //     if (cloneData[key] && cloneData[key] !== undefined && cloneData[key].length !== 0) {
        //         if (Array.isArray(cloneData[key]&&cloneData[key]!=="selectedImages")) {
        //             // var arr = cloneData[key];
        //             // for (var i = 0; i < arr.length; i++) {
        //                 bodyFormData.append(key, JSON.stringify(cloneData[key]));
        //             // }
        //         }
        //         else {
        //             bodyFormData.append(key, cloneData[key]);
        //         }
        //     }
        // }



        console.log(myYard, "/////////////")
        var bodyFormData = new FormData();
        bodyFormData.append('packing', myYard.packing);
        bodyFormData.append('title', myYard.title);
        bodyFormData.append('description', myYard.description);
        bodyFormData.append('price', myYard.price);
        bodyFormData.append('address', myYard.address);
        bodyFormData.append('phone', myYard.phone);
        bodyFormData.append('categoryType', myYard.catogery);
        bodyFormData.append('userId', this.props.userInfo._id);
        bodyFormData.append('waight', myYard.weight);

        if (catogery === "Food") {
            bodyFormData.append('subcatory', JSON.stringify(subCatogeries));
        }
        // for (var i = 0; i < subCatogeries.length; i++) {
        //     bodyFormData.append(`subcatory${i+1}`, subCatogeries[i]);
        // }
        if(selectedImages){

            for (var i = 0; i < selectedImages.length; i++) {
                bodyFormData.append('imgs', myYard.selectedImages[i]);
            }
        }
        // bodyFormData.append('address',myYard.address );
        console.log(bodyFormData, "bodyyyyyyyyy")
        let url;
        if(this.props.editDataRecieve){
            url=`${this.props.mainUrl}addproduct/update`
        
            bodyFormData.append('productImage', JSON.stringify(this.props.editDataRecieve.productImage) );

        }
        else{
            url=`${this.props.mainUrl}addproduct/`

        }
        var options = {
            method: 'POST',
            // url: `http://192.168.10.12:3002/resetpassword/verifycode`,
            url: url,
            headers:
            {
                contentType: 'application/json',
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },
            data: bodyFormData
        };
        axios(options)
            .then((data) => {
                console.log(data, "data")
                alert(data.data.message)
                this.props.navigation.push("Home")
                this.setState({
                    loader: !this.state.loader
                })
            }).catch((err) => {
                let errr = JSON.parse(JSON.stringify(err))
                // JSON.parse(errr)
                console.log("-------err", errr)
                alert("ssss")
                this.setState({
                    loader: !this.state.loader
                })
            })

    }
    componentWillMount() {
        console.log(this.props.editDataRecieve, "/*/sss*/*/*")
        let editDataRecieve =this.props.editDataRecieve
        if (this.props.editDataRecieve) {
            this.setState({
                title:editDataRecieve.title,
                description:editDataRecieve.description,
                editImage:editDataRecieve.productImage,
                price:JSON.stringify(editDataRecieve.price),
                weight:editDataRecieve.waight,
                address:editDataRecieve.address,
                phone:editDataRecieve.phone,
                packing:editDataRecieve.packing,
                // title:editDataRecieve.title,

            })

        }
    }
    render() {

        // console.log("proppppppppppps",this.props.userInfo)
        let { description, isFilter, isDrawer, darkBody, packing, phone, price, weight, address } = this.state;
        return (
            <>
                 <View style={{ paddingHorizontal: "5%", marginVertical: 5 }}>
                    <View style={{ justifyContent: "center", paddingHorizontal: 3 }}>
                        <Text style={{ fontWeight: "bold" }}>Title:</Text>
                    </View>
                    <TextInput
                        keyboardType="numeric"
                        style={{ height: 40, borderBottomColor: '#878C8A', borderBottomWidth: 1 }}
                        onChangeText={title => this.setState({ title })}
                        value={this.state.title}
                        placeholder={"Phone"}
                    />
                </View>
                <View style={styles.container}>
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        onChangeText={(description) => this.setState({ description })}
                        defaultValue={description}
                        maxLength={4096}
                        placeholder={'Description'}
                        // placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                <View style={{ paddingHorizontal: "5%", paddingVertical: "2%" }}>
                    <SelectImages func={(selectedImages) => this.setState({ selectedImages })} editImage={this.props.editDataRecieve?this.props.editDataRecieve:null}/>
                </View>

                <View style={{ flexDirection: "row", flex: 1, paddingHorizontal: "5%", }}>
                    <View style={{ flex: 3, height: 80, justifyContent: "center" }}>
                        <View style={{ justifyContent: "center", paddingHorizontal: 3 }}>
                            <Text style={{ fontWeight: "bold" }}>Price:</Text>
                        </View>
                        <TextInput
                            keyboardType="numeric"
                            style={{ height: 40, borderBottomColor: '#878C8A', borderBottomWidth: 1 }}
                            onChangeText={price => this.setState({ price })}
                            value={price}
                            defaultValue={price}
                            placeholder={"Price"}
                        />
                    </View>
                    <View style={{ flex: 3, height: 80, justifyContent: "center", marginLeft: "5%" }}>
                        <View style={{ justifyContent: "center", paddingHorizontal: 3 }}>
                            <Text style={{ fontWeight: "bold" }}>Weight:</Text>
                        </View>
                        <TextInput
                            keyboardType="numeric"
                            style={{ height: 40, borderBottomColor: '#878C8A', borderBottomWidth: 1 }}
                            onChangeText={weight => this.setState({ weight })}
                            value={weight}
                            defaultValue={weight}
                            placeholder={"Weight"}
                        />
                    </View>
                </View>
                <View style={{ paddingHorizontal: "5%" }}>
                    <View style={{ justifyContent: "center", paddingHorizontal: 3 }}>
                        <Text style={{ fontWeight: "bold" }}>Address:</Text>
                    </View>
                    <TextInput
                        style={{ height: 40, borderBottomColor: '#878C8A', borderBottomWidth: 1 }}
                        onChangeText={address => this.setState({ address })}
                        value={address}
                        placeholder={"Address"}
                    />
                </View>
                <View style={{ paddingHorizontal: "5%", marginVertical: 5 }}>
                    <View style={{ justifyContent: "center", paddingHorizontal: 3 }}>
                        <Text style={{ fontWeight: "bold" }}>Phone:</Text>
                    </View>
                    <TextInput
                        keyboardType="numeric"
                        style={{ height: 40, borderBottomColor: '#878C8A', borderBottomWidth: 1 }}
                        onChangeText={phone => this.setState({ phone })}
                        value={phone}
                        placeholder={"Phone"}
                    />
                </View>

                {this.props.catogery === "Food" &&
                    <>
                        <View style={{ paddingHorizontal: "5%" }}>
                            <Text style={{ fontWeight: "bold", marginVertical: 5 }}>Standard dietary requirement:</Text>
                            <View style={{ fontWeight: "bold", marginVertical: 5 }}>
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Vegan"
                                    checked={this.state.standard.vegan}
                                    onPress={() => {
                                        let standard = this.state.standard
                                        standard.vegan = !this.state.standard.vegan
                                        this.setState({ standard: standard })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Ovo-Vegetarian"
                                    checked={this.state.standard.OvoVegetarian}
                                    onPress={() => {
                                        let standard = this.state.standard
                                        standard.OvoVegetarian = !this.state.standard.OvoVegetarian
                                        this.setState({ standard: standard })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Lacto-Vegetarian"
                                    checked={this.state.standard.LactoVegetarian}
                                    onPress={() => {
                                        let standard = this.state.standard
                                        standard.LactoVegetarian = !this.state.standard.LactoVegetarian
                                        this.setState({ standard: standard })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Lacto-Ovo Vegetarian"
                                    checked={this.state.standard.LactoOvoVegetarian}
                                    onPress={() => {
                                        let standard = this.state.standard
                                        standard.LactoOvoVegetarian = !this.state.standard.LactoOvoVegetarian
                                        this.setState({ standard: standard })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Pescetarian"
                                    checked={this.state.standard.pescetarian}
                                    onPress={() => {
                                        let standard = this.state.standard
                                        standard.pescetarian = !this.state.standard.pescetarian
                                        this.setState({ standard: standard })
                                    }}
                                />
                            </View>
                        </View>


                        <View style={{ paddingHorizontal: "5%" }}>
                            <Text style={{ fontWeight: "bold", marginVertical: 5 }}>Religious restrictions:</Text>
                            <View style={{ fontWeight: "bold", marginVertical: 5 }}>
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Bahå'i"
                                    checked={this.state.religious.bahai}
                                    onPress={() => {
                                        let religious = this.state.religious
                                        religious.bahai = !this.state.religious.bahai
                                        this.setState({ religious: religious })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Buddhism"
                                    checked={this.state.religious.Buddhism}
                                    onPress={() => {
                                        let religious = this.state.religious
                                        religious.Buddhism = !this.state.religious.Buddhism
                                        this.setState({ religious: religious })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Christianity"
                                    checked={this.state.religious.Christianity}
                                    onPress={() => {
                                        let religious = this.state.religious
                                        religious.Christianity = !this.state.religious.Christianity
                                        this.setState({ religious: religious })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Hinduism"
                                    checked={this.state.religious.Hinduism}
                                    onPress={() => {
                                        let religious = this.state.religious
                                        religious.Hinduism = !this.state.religious.Hinduism
                                        this.setState({ religious: religious })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Judaism"
                                    checked={this.state.religious.Judaism}
                                    onPress={() => {
                                        let religious = this.state.religious
                                        religious.Judaism = !this.state.religious.Judaism
                                        this.setState({ religious: religious })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Islam"
                                    checked={this.state.religious.Islam}
                                    onPress={() => {
                                        let religious = this.state.religious
                                        religious.Islam = !this.state.religious.Islam
                                        this.setState({ religious: religious })
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{ paddingHorizontal: "5%" }}>
                            <Text style={{ fontWeight: "bold", marginVertical: 5 }}>Common food allergies:</Text>
                            <View style={{ fontWeight: "bold", marginVertical: 5 }}>
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Peanut"
                                    checked={this.state.common.Peanut}
                                    onPress={() => {
                                        let common = this.state.common
                                        common.Peanut = !this.state.common.Peanut
                                        this.setState({ common: common })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Milk"
                                    checked={this.state.common.Milk}
                                    onPress={() => {
                                        let common = this.state.common
                                        common.Milk = !this.state.common.Milk
                                        this.setState({ common: common })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Egg"
                                    checked={this.state.common.Egg}
                                    onPress={() => {
                                        let common = this.state.common
                                        common.Egg = !this.state.common.Egg
                                        this.setState({ common: common })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Wheat"
                                    checked={this.state.common.Wheat}
                                    onPress={() => {
                                        let common = this.state.common
                                        common.Wheat = !this.state.common.Wheat
                                        this.setState({ common: common })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Soy"
                                    checked={this.state.common.Soy}
                                    onPress={() => {
                                        let common = this.state.common
                                        common.Soy = !this.state.common.Soy
                                        this.setState({ common: common })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Fish"
                                    checked={this.state.common.Fish}
                                    onPress={() => {
                                        let common = this.state.common
                                        common.Fish = !this.state.common.Fish
                                        this.setState({ common: common })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Shellfish"
                                    checked={this.state.common.Shellfish}
                                    onPress={() => {
                                        let common = this.state.common
                                        common.Shellfish = !this.state.common.Shellfish
                                        this.setState({ common: common })
                                    }}
                                />
                                <CheckBox
                                    containerStyle={{ height: 30, justifyContent: 'center' }}
                                    textStyle={{ fontSize: 11 }}
                                    size={20}
                                    title="Other"
                                    checked={this.state.common.Other}
                                    onPress={() => {
                                        let common = this.state.common
                                        common.Other = !this.state.common.Other
                                        this.setState({ common: common })
                                    }}
                                />

                            </View>
                        </View>

                    </>
                }







                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', margin: 12 }}
                        onPress={() => this.setState({ packing: !packing })}
                    >
                        <Icon size={19} name={packing ? 'check-box-outline' : 'checkbox-blank-outline'} />
                        <Text style={{ fontSize: 15 }}> Do you provide packing? </Text>
                    </TouchableOpacity>
                </View>
                <CustomButton label={'Post Yard'}
                    loader={this.state.loader}
                    onClick={() => this.post(this.props.catogery)}
                    backgroundColor={'#1273de'}
                    color={'#fff'} />
            </>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:"pink"
    },
    textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: 'rgba(52, 52, 52, .1)',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: 'black',
    },
});


function mapStateToProps(state) {
    return {
        mainUrl: state.root.mainUrl,
        userInfo: state.root.user,

    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreateYardsInputs);