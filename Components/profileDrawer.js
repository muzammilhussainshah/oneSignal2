import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  SafeAreaView,
  Header,
  Item,
  Icon,
  Button,
  Input,
  TextInput,
  View,
  PanResponder,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Switch, Right, Body, ListItem } from 'native-base';
// import { SearchBar } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'react-native-paper';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';
// import CustomInput from '../../Components/Input'
// import CustomButton from '../../Components/Button'
// import CustomPicker from '../../Components/PickerComp'
// import SearchBar from '../../Components/searchBar'
// import ProfileDrawer from '../../Components/profileDrawer'
// import CloseDrawer from '../../Components/closeDrawer'
import { identifier } from '@babel/types';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
class ProfileDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
      // showPassword: false,
      // showError: false,
      // language: 'english'.
      isDrawer: false,
      darkmode: false,
      // animationStyle: "",
    };
    _panResponder = {};
    this.openYard = this.openYard.bind(this);
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        console.log('move', gestureState.dx);

        // return !(gestureState.dx === 0 && gestureState.dy === 0)
        if (gestureState.dx < -45) {
          console.log('slide close', gestureState.dx);
          this.setState({
            // animationStyle: 'fadeOutLeftBig',
            animationStyle: "fadeOutRightBig"

          });
          this.props.animateParent(false);
        }
      },
      onPanResponderRelease: (evt, gestureState) => { },
    });
    this.setState({
      animationStyle: this.props.animationStyle,
    });
  }
  openYard() {
    // alert(JSON.stringify(this.props));
    this.props.navigation.push('Yard');
  }
  render() {
    let { email, password, showPassword, showError, isDrawer } = this.state;
    // let logo = require('../../Assets/OOAAlogo.jpg')
    var { height, width } = Dimensions.get('window');
    return (
      <Animatable.View
        {...this._panResponder.panHandlers}
        animation={this.state.animationStyle}
        duration={300}
        style={{
          borderRightWidth: 1,
          borderRightRadius: 2,
          borderRightColor: '#ddd',
          borderBottomWidth: 0,
          shadowColor: '#000',
          // shadowOffset: { width: 0, height: 2 },
          // shadowOpacity: 0.8,
          // shadowRadius: 2,
          // elevation: 55,
          flex: 1,
          width: '80%',
          height: '100%',
          position: 'absolute',
          zIndex: 2,
        }}

        // style={{
        //   borderRightWidth: 1,
        //   borderRightRadius: 2,
        //   borderRightColor: '#ddd',
        //   borderBottomWidth: 0,
        //   shadowColor: '#000',
        //   shadowOffset: { width: 0, height: 2 },
        //   shadowOpacity: 0.8,
        //   shadowRadius: 2,
        //   elevation: 55,
        //   flex: 1, width: "80%", height: "100%", position: "absolute", zIndex: 2, right: 0

        // }}
      >
        <View style={{
          flex: 1,
          // backgroundColor: '#C0C7C4'
          backgroundColor: 'white'
        }}>
          <TouchableOpacity onPress={this.openYard}>
            <List.Item title="My Yards" />
          </TouchableOpacity>
          <List.Accordion title="Discounts and Coupens">
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion title="Addresses">
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          {/* <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('DietryRequirements')
            }>
            <List.Item title="Dietry Requirements" />
          </TouchableOpacity> */}
          <List.Item
            title="Dark Mode"
            right={props => (
              <Switch
                value={this.state.darkmode}
                onValueChange={() =>
                  this.setState({ darkmode: !this.state.darkmode })
                }
              />
            )}
          />

          <List.Item title="Logout" />
          <List.Item title="Delete Profile" />
        </View>
      </Animatable.View>
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
)(ProfileDrawer);

/*

<List>
                        <ListItem>
                            <TouchableOpacity onPress={this.openYard}>
                                <Text>My Yards</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <Text>Discount & coupons</Text>
                        </ListItem>
                        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
                        <ListItem>
                            <Text>Address</Text>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Dark mode</Text>
                            </Body>
                            <Right>
                                <Switch value={this.state.darkmode} onValueChange={() => this.setState({darkmode: !this.state.darkmode})} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>Logout</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Delete Profile</Text>
                        </ListItem>
                    </List>


                */
