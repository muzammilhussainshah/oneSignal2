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
const screenWidth = Dimensions.get('screen').width;
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import YardCard from './YardCard';
import { Fab } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppContainer from '../../Components/AppContainer';
import CloseDrawer from '../../Components/closeDrawer'
import ProfileDrawer from '../../Components/profileDrawer'
import FilterDrawer from '../../Components/filterDrawer'
class Yard extends Component {
  constructor() {
    super();
    this.state = {
      isFilter: false,
      isDrawer: false,
      darkBody: false,
    };
  }
  animateParent(fals) {
    setTimeout(() => {
      this.setState({
        isDrawer: false, isFilter: false
      })
    }, 250);
  }
  render() {
    let { isFilter, isDrawer, darkBody } = this.state;

    return (
      <>
        {((isDrawer) && <CloseDrawer func={() => this.setState({ isDrawer: !isDrawer })} />)}
        {(isDrawer && <ProfileDrawer animationStyle="fadeInLeftBig" animateParent={this.animateParent.bind(this)} navigation={this.props.navigation} />)}
        {(isFilter && <FilterDrawer animationStyle="fadeInRightBig" animateParent={this.animateParent.bind(this)} navigation={this.props.navigation} />)}
        {((isFilter) && <CloseDrawer func={() => this.setState({ isFilter: !isFilter })} right={isFilter} />)}
        <View style={{}}>
          <Header
            darkBody={() => { this.setState({ darkBody: !darkBody }) }}
            func2={() => { this.setState({ isFilter: !isFilter }) }}
            func={() => { this.setState({ isDrawer: !isDrawer }) }}
          />
        </View>
        <SafeAreaView style={{ flex: 1 }}>

          <ScrollView>
            <YardCard navigation={this.props.navigation}/>
           

          </ScrollView>
          {/* <View style={{ marginTop: 150 }}> */}
            <Fab onPress={()=>this.props.navigation.navigate("CreateYard")}>
              <AntDesign name="plus" />
            </Fab>
          {/* </View> */}
          {/* <View>
          <Footer navigation={this.props.navigation} />
        </View> */}
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

function mapStateToProps(state) {
  return {

    mainUrl: state.root.mainUrl,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Yard);


/*

<Header
darkBody={() => {
  this.setState({darkBody: !this.state.isFilter});
}}
func2={() => {
  this.setState({isFilter: !this.state.isFilter});
}}
func={() => {
  this.setState({isDrawer: !this.state.isDrawer});
}}
/>
*/