import React, { Component } from "react";
import { View, Text, StatusBar, Alert } from "react-native";
import TravelGuide from "../Guide/TravelGuide";
import { ScrollView } from "react-native-gesture-handler";

import { AppRegistry, FlatList, StyleSheet } from "react-native";

export default class Local extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    // const response = await fetch("http://10.113.50.196:9000/api/MSscholarship");
    const response = await fetch(
      "http://newsbuzz-server.herokuapp.com/api/BSscholarship"
    );
    const data = await response.json();
    this.setState({
      data,
    });
    // console.log(this.state.data);
  };

  render() {
    return (
      <ScrollView
        vertical
        showsVerticalScrollIndicator={true}
        style={{ marginTop: 24 }}
      >
        <Text
          style={{ paddingHorizontal: 20, fontSize: 24, fontWeight: "700" }}
        >
          Bachelor Scholarships
        </Text>
        <View
          style={{
            height: "auto",
            width: "auto",
            margin: 5,
            // backgroundColor: "#fff",
            border: 2.9,
            borderColor: "black",
            // alignSelf: "center",
          }}
        >
          <FlatList
            data={this.state.data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View>
                <TravelGuide
                  placeUri={{
                    uri: "https://source.unsplash.com/random",

                    // "https://images.unsplash.com/photo-1503971090465-19d3c80f81f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=845&q=80"
                  }}
                  placeName={item.tilte}
                  placeDes={item.discription}
                />
              </View>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </ScrollView>
    );
  }
}
