import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView, SafeAreaView,
    Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Accordion } from 'native-base';
import PinsCard from '../../Components/PinsCard';
import Carousel from 'simple-carousel-react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import ImageSlider from 'react-native-image-slider';

// const imagesUri = [
//     'https://placeimg.com/640/640/nature',
//     'https://placeimg.com/640/640/people',
//     'https://placeimg.com/640/640/animals',
//     'https://placeimg.com/640/640/beer',
// ];
// import AppContainer from "../../Components/AppContainer";
const screenWidth = Dimensions.get('screen').width;
class FullViewItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesUri: []
        };
    }
    componentWillMount() {
        let dataRecive = this.props.navigation.getParam('data')

        let imagesUri = []
        for (var key in dataRecive.productImage) {
            console.log(key)
            imagesUri.push(dataRecive.productImage[key])
        }
        this.setState({
            fullItemData: dataRecive,
            imagesUri: imagesUri,
        })
        console.log(imagesUri, "-------", dataRecive)
        // dataRecive.productImage
    }
    render() {
        const { imagesUri, fullItemData } = this.state
        return (
            // <AppContainer navigation={this.props.navigation}>
            <View style={{ flex: 1, }}>
                <SafeAreaView style={styles.container}>
                    <ImageSlider
                        // loopBothSides
                        autoPlayWithInterval={8000}
                        images={imagesUri}
                        customSlide={({ index, item, style, width }) => (
                            // It's important to put style here because it's got offset inside
                            <View key={index} style={[style, styles.customSlide]}>
                                <Image resizeMode={"cover"} source={{ uri: item }} style={styles.customImage} />
                            </View>
                        )} />
                </SafeAreaView>
                <View style={{ flex: 0.65, }}>
                    <ScrollView style={{}}>
                        <View style={{ padding: 15 }}>

                            <View style={{ borderBottomColor: "#E4ECE8", borderBottomWidth: 0.3, paddingVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
                                <View>

                                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                        $ {fullItemData.price}
                                    </Text>
                                    <Text style={{ fontSize: 17 }}>
                                        {fullItemData.title}
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("IncludeDetails", { catogery: fullItemData.categoryType,fullItemDataForEdit:fullItemData })}>
                                    <AntDesign name="edit" style={{ color: "#003366", fontWeight: 'bold', fontSize: 20 }} />
                                </TouchableOpacity>
                            </View>


                            <View style={{ borderBottomColor: "#E4ECE8", marginTop: 15, borderBottomWidth: 0.3, paddingVertical: 10 }}>

                                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                    Details
                        </Text>
                                <View style={{}}>

                                    <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
                                        <View style={{ flex: 1 }}>

                                            <Text style={{ fontSize: 12, marginTop: 5 }}>
                                                Catogery : {fullItemData.categoryType}
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: 12, marginTop: 5 }}>
                                                Packing : {fullItemData.packing ? "Yes" : "No"}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{}}>

                                    <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
                                        <View style={{ flex: 1 }}>

                                            <Text style={{ fontSize: 12, marginTop: 5 }}>
                                                Phone :  {fullItemData.phone}
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: 12, marginTop: 5 }}>
                                                Addres :  {fullItemData.address}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{}}>

                                    <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
                                        <View style={{ flex: 1 }}>

                                            <Text style={{ fontSize: 12, marginTop: 5 }}>
                                                Weight :  {fullItemData.waight}
                                            </Text>
                                        </View>
                                        {/* <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: 12, marginTop: 5 }}>
                                                Addres : R-592
                                            </Text>
                                        </View> */}
                                    </View>
                                </View>
                            </View>
                            <View style={{ borderBottomColor: "#E4ECE8", marginTop: 15, borderBottomWidth: 0.3, paddingVertical: 10 }}>

                                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                    Description
                            </Text>
                                <Text style={{ fontSize: 14, marginTop: 5 }}>
                                    {fullItemData.description}
                                </Text>
                            </View>

                        </View>

                    </ScrollView>
                </View>

            </View>
            // </AppContainer>
        );
    }
}

const styles = StyleSheet.create({
    holder: {
        flex: 0.25,
        justifyContent: 'center',
    },
    contentContainer: {
        paddingBottom: 60,
        backgroundColor: "white",

    },
    container: {
        flex: 0.35, backgroundColor: "red"

    },
    containerForModal: {
        // flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // width:"100%"
    },
    textareaContainer: {
        height: "30%",
        width: "95%",
        padding: 5,
        // backgroundColor: '#F8F8F8',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 100,
        fontSize: 14,
        // color: '#333',
    },
    customSlide: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    customImage: {
        width: "100%",
        height: "100%",
    },
    listView: {
        width: "100%", height: 40, marginTop: 15,
        borderBottomWidth: 0.5, borderBottomColor: "#BEBCBC",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    listTextOption: {
        marginLeft: 10, color: "#000", fontWeight: "bold", fontSize: 12
    },
    listTextOptionValue: {
        marginLeft: 10, color: "#6a6a6a", textAlign: "right",
    },
    input: { justifyContent: 'center', alignItems: 'center', width: '95%', },
});


export default FullViewItemCard;
