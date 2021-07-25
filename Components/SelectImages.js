import React, { Component } from 'react';
import {
    StyleSheet,
    Text, Image,
    View, TouchableOpacity, TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DocumentPicker from 'react-native-document-picker';

export default class SelectImages extends Component {
    constructor() {
        super()
        this.state = {
            selectedImages: []
        }
        _panResponder = {};
    }
    async browsImage() {
        try {
            console.log(DocumentPicker.pickMultiple({}), "DocumentPicker.pickMultiple")
            const selectedImages = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.images],
            });
            for (const res of selectedImages) {
                obj = {
                    uri: res.uri,
                    type: res.type,
                    name: res.name,
                    size: res.size
                }
            }
            if (selectedImages.length > 6) {
                selectedImages.splice(6)
            }
            this.setState({ selectedImages: selectedImages })
            this.props.func(selectedImages)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }

    }
    removeImage(index) {
        let selectedImagesClone = this.state.selectedImages
        selectedImagesClone.splice(index, 1);
        this.setState({
            selectedImages: selectedImagesClone
        })
        this.props.func(selectedImagesClone)

    }
    componentWillMount() {
        let editImage = this.props.editImage
        if(editImage){
            let selectedImages = []
            console.log(editImage, "editImageeditImageeditImage")
            for (var key in editImage.productImage) {
                selectedImages.push({uri:editImage.productImage[key]})
            }
            this.setState({
                selectedImages
            })
            console.log(selectedImages, "selectedImagesselectedImages")
        }
       

    }
    render() {
        let { selectedImages } = this.state;
        return (
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity
                        onPress={() => this.browsImage()}
                        style={styles.selectedImages}
                    >
                        {
                            selectedImages && selectedImages[0]  &&selectedImages[0].uri&&
                            <TouchableOpacity onPress={() => this.removeImage(0)} style={styles.crosIcon}>
                                <Text style={styles.text}>X</Text>
                            </TouchableOpacity>
                        }
                        {
                            (selectedImages && selectedImages[0]&&selectedImages[0].uri ) ?
                                (
                                    <Image style={{ width: 100, height: 100 }}
                                        source={{ uri: selectedImages[0].uri }}
                                    />
                                ) :
                                (
                                    <>
                                        <MaterialIcons name='add-a-photo' style={{ color: "#6774FC", fontWeight: "bold", fontSize: 35 }} />
                                        <Text style={{ color: "#6774FC" }}>Add Photo</Text>
                                    </>
                                )
                        }
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.browsImage()}
                        style={[styles.selectedImages, { borderColor: "#878C8A" }]}>
                        {selectedImages && selectedImages[1] && selectedImages[1].uri &&
                            <TouchableOpacity onPress={() => this.removeImage(1)} style={styles.crosIcon}>
                                <Text style={styles.text}>X</Text>
                            </TouchableOpacity>
                        }
                        {(selectedImages && selectedImages[1] && selectedImages[1].uri) ?
                            (
                                <Image
                                    style={{ width: 100, height: 100 }}
                                    source={{ uri: selectedImages[1].uri }}
                                />
                            ) :
                            (
                                <MaterialIcons name='add-a-photo' style={{ color: "#878C8A", fontWeight: "bold", fontSize: 35, }} />
                            )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.browsImage()}
                        style={[styles.selectedImages, { borderColor: "#878C8A" }]}>
                        {selectedImages && selectedImages[2] && selectedImages[2].uri &&
                            <TouchableOpacity onPress={() => this.removeImage(2)} style={styles.crosIcon}>
                                <Text style={styles.text}>X</Text>
                            </TouchableOpacity>
                        }
                        {(selectedImages && selectedImages[2] && selectedImages[2].uri) ?
                            (
                                <Image
                                    style={{ width: 100, height: 100 }}
                                    source={{ uri: selectedImages[2].uri }}
                                />
                            ) :
                            (
                                <MaterialIcons name='add-a-photo' style={{ color: "#878C8A", fontWeight: "bold", fontSize: 35, }} />
                            )}
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "3%" }}>
                    <TouchableOpacity
                        onPress={() => this.browsImage()}
                        style={[styles.selectedImages, { borderColor: "#878C8A" }]}>
                        {selectedImages && selectedImages[3] && selectedImages[3].uri &&
                            <TouchableOpacity onPress={() => this.removeImage(3)} style={styles.crosIcon}>
                                <Text style={styles.text}>X</Text>
                            </TouchableOpacity>
                        }
                        {(selectedImages && selectedImages[3] && selectedImages[3].uri) ?
                            (
                                <Image
                                    style={{ width: 100, height: 100 }}
                                    source={{ uri: selectedImages[3].uri }}
                                />
                            ) :
                            (
                                <MaterialIcons name='add-a-photo' style={{ color: "#878C8A", fontWeight: "bold", fontSize: 35, }} />
                            )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.browsImage()}
                        style={[styles.selectedImages, { borderColor: "#878C8A" }]}>
                        {selectedImages && selectedImages[4] && selectedImages[4].uri &&
                            <TouchableOpacity onPress={() => this.removeImage(4)} style={styles.crosIcon}>
                                <Text style={styles.text}>X</Text>
                            </TouchableOpacity>
                        }
                        {(selectedImages && selectedImages[4] && selectedImages[4].uri) ?
                            (
                                <Image
                                    style={{ width: 100, height: 100 }}
                                    source={{ uri: selectedImages[4].uri }}
                                />
                            ) :
                            (
                                <MaterialIcons name='add-a-photo' style={{ color: "#878C8A", fontWeight: "bold", fontSize: 35, }} />
                            )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.browsImage()}
                        style={[styles.selectedImages, { borderColor: "#878C8A" }]}>
                        {selectedImages && selectedImages[5] && selectedImages[5].uri &&
                            <TouchableOpacity onPress={() => this.removeImage(5)} style={styles.crosIcon}>
                                <Text style={styles.text}>X</Text>
                            </TouchableOpacity>
                        }
                        {(selectedImages && selectedImages[5] && selectedImages[5].uri) ?
                            (
                                <Image
                                    style={{ width: 100, height: 100 }}
                                    source={{ uri: selectedImages[5].uri }}
                                />
                            ) :
                            (
                                <MaterialIcons name='add-a-photo' style={{ color: "#878C8A", fontWeight: "bold", fontSize: 35, }} />
                            )}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    selectedImages: {
        width: 105, height: 105, borderColor: "#6774FC", borderWidth: 0.3, justifyContent: "center", alignItems: 'center'
    },
    crosIcon: {
        width: 30, height: 30, position: "absolute", zIndex: 1, right: 0, top: 0
    },
    text: {
        textAlign: "center", color: "red", fontWeight: "bold", fontSize: 17
    },

});