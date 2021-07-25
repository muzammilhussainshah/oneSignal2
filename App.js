import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes'

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Routes />
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//   },
// });

// export default App;




export default class App extends React.Component {
  componentWillMount() {
    console.disableYellowBox = true
  }
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

