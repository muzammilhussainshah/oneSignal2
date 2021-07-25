import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomInput from '../../Components/Input';
import CustomButton from '../../Components/Button';
import CustomPicker from '../../Components/PickerComp';
import EstablishmentCrad from './EstablishmentCrad';
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import AppContainer from '../../Components/AppContainer';
const screenWidth = Dimensions.get('screen').width;

class Gift extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      // <AppContainer navigation={this.props.navigation} route={"gift"}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            <EstablishmentCrad />
          </ScrollView>
          {/* <View>
          <Footer navigation={this.props.navigation} />
        </View> */}
        </SafeAreaView>
      // </AppContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
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
)(Gift);
