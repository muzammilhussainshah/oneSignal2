import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { connect } from 'react-redux'
import axios from 'axios';

class YardCard extends React.Component {
  constructor() {
    super()
    this.state = {
      myYardsData: []
    }
  }


  componentDidMount() {
    console.log("Work")
    axios({
      method: 'get',
      url: `${this.props.mainUrl}products/getproduct/${this.props.userInfo._id}`,
      // url: `${this.props.mainUrl}products/getproduct/${123}`,

    })
      .then(data => {
        console.log(data, "rrrrrrrr")
        let myYardsData = data.data.data
        let totalYard = 0
        for (var i = 0; i < myYardsData.length; i++) {
          totalYard = totalYard + myYardsData[i].price
        }
        this.setState({
          myYardsData, totalYard
        })
      })
      .catch(err => {
        let error = JSON.parse(JSON.stringify(err))
        console.log(error, 'ERRROR',err)
        if (error.message && error.message === "Request failed with status code 409") {
          // alert("")
        }
      })
  }
  deleteYard(uid) {
    console.log(`${this.props.mainUrl}getproduct/${uid}`)
    axios({
      method: 'DELETE',
      url: `${this.props.mainUrl}products/deleteproduct/${uid}`,

    })
      .then(data => {
        console.log(data, "delete")
        // let myYardsData = data.data.data
        // let totalYard = 0
        // for (var i = 0; i < myYardsData.length; i++) {
        //   totalYard = totalYard + myYardsData[i].price
        // }
        // this.setState({
        //   myYardsData, totalYard
        // })
        this.props.navigation.push("Home")
      })
      .catch(err => {
        // this.props.navigation.push("Home")

        let error = JSON.parse(JSON.stringify(err))
        console.log(JSON.parse(JSON.stringify(err)), 'ERRROR')
        if (error.message && error.message === "Request failed with status code 409") {
        }
      })
  }
  render() {
    const { totalYard, myYardsData } = this.state
    console.log(totalYard, myYardsData, "totalYard,myYardsData")
    return (
      <View style={{ padding: 5, flex: 8, }}>
        <View>
          <Text style={styles.top_title}>Your Yard: ${totalYard}</Text>
        </View>
        <View>
          {myYardsData&&
            myYardsData.map((e, index) => {
              // console.log(e.productImage.image1Url, "ëeee")
              return (
                <TouchableOpacity onPress={()=>this.props.navigation.push("FullViewItemCard",{data:e})} activeOpacity={0.9} style={styles.yard_card}>
                  <Image
                    resizeMode="contain"
                    source={{
                      uri: e.productImage.image1Url,
                    }}
                    style={{ width: 80, height: 80, }}
                  />
                  <View style={styles.card_body}>
                    <View style={styles.body_1}>
                      <Text style={styles.card_title}>{e.title}</Text>
                      <Text style={styles.card_views}>{e.views} Views</Text>
                    </View>
                    <View style={styles.body_2}>
                      <TouchableOpacity
                        onPress={()=>this.deleteYard(e._id)}
                        style={styles.card_btn}>
                        <Fontisto
                          name="trash"
                          style={{ color: 'white', fontSize: 14, marginRight: 6 }}
                        />
                        <Text style={{ color: 'white' }}>Delete</Text>
                      </TouchableOpacity>
                      <Text style={styles.card_price}>${e.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }
            )
          }
        </View>
        {/* <View style={{ backgroundColor: "red", width: 60, height: 60, borderRadius: 60, justifyContent: "center", alignItems: "center", position: "absolute", zIndex: 2 }}>
              <TouchableOpacity>
                <Text style={{color:"#fff"}}>add</Text>
              </TouchableOpacity>
            </View> */}
      </View>
    );
  }
}

// const ItemCard = props => {
//   const { img, views, price, title } = props;
//   return (
//     <View style={styles.yard_card}>
//       <Image
//         resizeMode="contain"
//         source={{
//           uri: img,
//         }}
//         style={{ width: 80, height: 80, }}
//       />
//       <View style={styles.card_body}>
//         <View style={styles.body_1}>
//           <Text style={styles.card_title}>{title}</Text>
//           <Text style={styles.card_views}>{views} Views</Text>
//         </View>
//         <View style={styles.body_2}>
//           <TouchableOpacity
//             onPress={props.deleteYard()}
//             style={styles.card_btn}>
//             <Fontisto
//               name="trash"
//               style={{ color: 'white', fontSize: 14, marginRight: 6 }}
//             />
//             <Text style={{ color: 'white' }}>Delete</Text>
//           </TouchableOpacity>
//           <Text style={styles.card_price}>${price}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  top_title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 4,
  },
  yard_card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 4,
  },
  card_body: {
    flex: 1,
  },
  body_1: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body_2: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card_title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  card_views: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginLeft: 'auto',
  },
  card_btn: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: '#ff4444',
    color: 'white',
    flexDirection: 'row',
    margin: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  card_price: {
    marginLeft: 10,
    fontWeight: 'bold',
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
)(YardCard);


// export default YardCard;
