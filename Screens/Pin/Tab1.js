import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Left, Right, ListItem } from 'native-base';
import PinsCard from '../../Components/PinsCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CustomInput from '../../Components/Input';
import CustomButton from '../../Components/Button';
import CustomPicker from '../../Components/PickerComp';

class Tab1 extends React.Component {
  render() {
    return (
      // <ScrollView style={{ flex: 1 }}>
      <>
        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 6,
            // backgroundColor: "red"
          }}>
          <Text style={{ alignSelf: 'flex-end', textAlign: 'left' }}>
            Private
          </Text>
          <TextInput placeholder="Search.." style={styles.input} />
          <Text style={{ alignSelf: 'flex-end' }}>Sort By</Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View>
            <Text style={styles.title}>Toys</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View>
            <Text style={styles.title}>Food</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View>
            <Text style={styles.title}>Phones</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View>
            <Text style={styles.title}>Other</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigate.navigate('Product')}>
                <PinsCard
                  text="Toys"
                  img="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </>

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
    marginLeft: 6,
  },
  input: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    width: 250,
    paddingVertical: 6,
    marginLeft: 8,
    marginRight: 8,
  },
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tab1);
