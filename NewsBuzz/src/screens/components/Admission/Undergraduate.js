import React, { Component } from "react";
import { View, Text, StatusBar, Alert } from "react-native";
import TravelGuide from "../Guide/TravelGuide";
import { ScrollView } from "react-native-gesture-handler";

import { AppRegistry, FlatList, StyleSheet } from "react-native";

export default class Undergraduate extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    // const response = await fetch("http://10.113.50.196:9000/api/admission");
    const response = await fetch("http://192.168.0.3:9000/api/BSadmission");
    const data = await response.json();
    this.setState({
      data
    });
    // console.log(this.state.data);
  };

  render() {
    return (
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: StatusBar.currentHeight
        }}
      >
        <View
          style={{
            height: "auto",
            width: "auto",
            margin: 5,
            // backgroundColor: "#fff",
            border: 2.9,
            borderColor: "black"
            // alignSelf: "center",
          }}
        >
          <FlatList
            data={this.state.data}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <TravelGuide
                placeUri={{
                  uri: "https://source.unsplash.com/random"

                  // uri: "https://images.unsplash.com/photo-1503971090465-19d3c80f81f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=845&q=80"
                }}
                placeName={""}
                placeDes={item.discription}
              />
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
