import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  ListItem,
  Right,
  Separator,
  Left,
  Body,
  Container,
  List,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Accordion } from 'native-base';
import PinsCard from '../../Components/PinsCard';
import Carousel from 'simple-carousel-react-native';
import Modal from 'react-native-modal';
import Tooltip from 'react-native-walkthrough-tooltip';
import { DataTable } from 'react-native-paper';
const screenWidth = Dimensions.get('screen').width;
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import { Button, ToggleButton } from 'react-native-paper';

class EstablishmentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
      status: true,
    };
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={{ width: '100%' }}>
          <Carousel
            color="#8e24aa"
            dimmedColor="gray"
            height={200}
            width={screenWidth - 10}>
            <View>
              <Image
                source={{
                  uri:
                    'https://images.pexels.com/photos/2805384/pexels-photo-2805384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
                style={{ width: '100%', height: 200 }}
              />
            </View>
            <View>
              <Image
                source={{
                  uri:
                    'https://images.pexels.com/photos/2555800/pexels-photo-2555800.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
                style={{ width: '100%', height: 200 }}
              />
            </View>
          </Carousel>
        </View>
        <View style={styles.group_icons}>
          <TouchableOpacity
            style={styles.btn_stars}
            onPress={() => this.setState({ modalState: !this.state.modalState })}>
            {[0, 1, 2, 3].map((e, index) => (
              <AntDesign
                name="star"
                style={{ fontSize: 20, color: '#ffbb33' }}
                key={index}
              />
            ))}
          </TouchableOpacity>
          <View style={styles.btn_normal}>
            <Tooltip
              isVisible={this.state.tooltip_3}
              content={
                <View style={{ flex: 1 }}>
                  <List>
                    <ListItem>
                      <Text>someone@example.com</Text>
                    </ListItem>
                    <ListItem>
                      <Text>Abc. Market opposite to Jinnah Garden</Text>
                    </ListItem>
                    <ListItem>
                      <Text>+96325698745</Text>
                    </ListItem>
                  </List>
                </View>
              }
              placement="top"
              onClose={() => this.setState({ tooltip_3: false })}>
              <TouchableOpacity
                style={{ flexDirection: 'row' }}
                onPress={() => this.setState({ tooltip_3: true })}>
                <AntDesign
                  name="contacts"
                  style={{ fontSize: 30, color: '#33b5e5' }}
                />
              </TouchableOpacity>
            </Tooltip>
          </View>

          <TouchableOpacity style={styles.btn_normal} onPress={() => alert("Open default map app!")}>
            <Feather name="map-pin" style={{ fontSize: 30, color: '#ff4444' }} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', marginTop: 10, marginBottom: 10 }}>
          {['Starters', 'Main', 'Pudding', 'Side'].map((e, index) => {
            return (
              <Collapse>
                <CollapseHeader>
                  <Separator bordered>
                    <Text style={styles.list_title}>{e}</Text>
                  </Separator>
                </CollapseHeader>
                <CollapseBody>
                  <ListItem>
                    <Text>Soup: </Text>
                    <Right>
                      <Text>$9</Text>
                    </Right>
                  </ListItem>
                  <ListItem>
                    <Text>Milk: </Text>
                    <Right>
                      <Text>$5</Text>
                    </Right>
                  </ListItem>
                  <ListItem>
                    <Text>Water: </Text>
                    <Right>
                      <Text>$11</Text>
                    </Right>
                  </ListItem>
                </CollapseBody>
              </Collapse>
            );
          })}
        </View>

        <View
          style={{
            width: '100%',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri:
                'https://www.vertical-leap.uk/wp-content/uploads/2017/11/map.jpg',
            }}
            style={{ width: '100%', height: 200 }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Accordion
            icon="add"
            expandedIcon="remove"
            dataArray={[
              {
                title: 'Policy',
                content:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
              },
            ]}
          />
        </View>
        <View style={{ flex: 1, margin: 10 }}>
          <View>
            <Text style={styles.text_heading}>Nearby:</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <PinsCard
                text="Dairy"
                img="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <PinsCard
                text="Dairy"
                img="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <PinsCard
                text="Dairy"
                img="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </ScrollView>
          </View>
          <View>
            <Text style={styles.text_heading}>Same Brands:</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <PinsCard
                text="Dairy"
                img="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <PinsCard
                text="Dairy"
                img="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <PinsCard
                text="Dairy"
                img="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </ScrollView>
          </View>
          <View>
            <Text style={styles.text_heading}>Same Services:</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <PinsCard
                text="Dairy"
                img="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <PinsCard
                text="Dairy"
                img="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <PinsCard
                text="Dairy"
                img="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </ScrollView>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Accordion
            icon="add"
            expanded={0}
            expandedIcon="remove"
            dataArray={[
              {
                title: 'OOAA Services',
                content:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
              },
            ]}
          />
        </View>
        <View>
          <Modal isVisible={this.state.modalState}>
            <View style={styles.modal}>
              <Text style={styles.modal_title}>Ratings</Text>
              <View style={styles.modal_list}>
                <TouchableOpacity
                  style={
                    this.state.status == true
                      ? styles.toggle
                      : styles.toggle_unchecked
                  }
                  onPress={() => {
                    this.setState({ status: !this.state.status });
                  }}>
                  <Text
                    style={
                      this.state.status == true
                        ? styles.toggle_txt
                        : styles.toggle_txt_unchecked
                    }>
                    Cleanlinesss
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    this.state.status == true
                      ? styles.toggle
                      : styles.toggle_unchecked
                  }
                  onPress={() => {
                    this.setState({ status: !this.state.status });
                  }}>
                  <Text
                    style={
                      this.state.status == true
                        ? styles.toggle_txt
                        : styles.toggle_txt_unchecked
                    }>
                    Good Employee Interaction
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    this.state.status == true
                      ? styles.toggle
                      : styles.toggle_unchecked
                  }
                  onPress={() => {
                    this.setState({ status: !this.state.status });
                  }}>
                  <Text
                    style={
                      this.state.status == true
                        ? styles.toggle_txt
                        : styles.toggle_txt_unchecked
                    }>
                    Average Product
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    this.state.status == true
                      ? styles.toggle
                      : styles.toggle_unchecked
                  }
                  onPress={() => {
                    this.setState({ status: !this.state.status });
                  }}>
                  <Text
                    style={
                      this.state.status == true
                        ? styles.toggle_txt
                        : styles.toggle_txt_unchecked
                    }>
                    Lightening
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    this.state.status == true
                      ? styles.toggle
                      : styles.toggle_unchecked
                  }
                  onPress={() => {
                    this.setState({ status: !this.state.status });
                  }}>
                  <Text
                    style={
                      this.state.status == true
                        ? styles.toggle_txt
                        : styles.toggle_txt_unchecked
                    }>
                    Easy to Navigate
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ margin: 18 }}>
                <Button
                  mode="contained"
                  onPress={() => this.setState({ modalState: false })}>
                  Okay
                </Button>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toggle_unchecked: {
    backgroundColor: 'white',
    padding: 8,
    marginTop: 2,
    margin: 10,
    shadowColor: 'rgba(123,31,162, 0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  toggle_txt_unchecked: {
    color: 'black',
  },
  toggle: {
    backgroundColor: '#efefef',
    padding: 8,
    margin: 10,
    marginTop: 2,
    shadowColor: 'rgba(123,31,162, 0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  toggle_txt: {
    fontWeight: 'bold',
    color: '#7b1fa2',
  },
  card: {
    backgroundColor: 'white',
    padding: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card_img: {},
  group_icons: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
  btn_normal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 2,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  btn_stars: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  text_heading: {
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 15,
    color: '#4444ff',
  },
  list_title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  list_header: {
    padding: 5,
    borderBottomColor: '#333',
    borderBottomWidth: 0.5,
  },
  modal: {
    flex: 1,
    backgroundColor: 'white',
  },
  modal_title: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    margin: 6,
  },
  modal_list: {
    flex: 1,
  },
});
export default EstablishmentCard;
