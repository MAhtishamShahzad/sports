import { AntDesign as AD, FontAwesome as FIcons } from '@expo/vector-icons';
import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Admission from './src/screens/Admission';
import Graduate from './src/screens/components/Admission/Graduate';
import Undergraduate from './src/screens/components/Admission/Undergraduate';
import News from './src/screens/components/News/NewsPage';
import MainPage from './src/screens/components/NewsCategory/MainPage';
import International from './src/screens/components/Scholarship/International';
import Local from './src/screens/components/Scholarship/Local';
import Event from './src/screens/Event';
import HomePage from './src/screens/HomePage';
import Jobs from './src/screens/Jobs';
import Scholarship from './src/screens/Scholarship';
import Search from './src/screens/Search';
import SettingScreen from './src/screens/settings';

// import News from "./src/screens/News";
// import { TransitionPresets } from "@react-navigation/stack";
console.disableYellowBox = true;

const Tabs = createBottomTabNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: "HomePage",
        tabBarIcon: ({ tintColor }) => (
          <AD name="home" color={tintColor} size={24} />
        ),
      },
    },

    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <AD name="search1" color={tintColor} size={24} />
        ),
      },
    },
    News: {
      screen: MainPage,
      navigationOptions: {
        tabBarLabel: "NEWS",
        tabBarIcon: ({ tintColor }) => (
          <FIcons name="newspaper-o" color={tintColor} size={24} />
        ),
      },
    },
    Admission: {
      screen: createStackNavigator({
        Admission: {
          screen: Admission,
          navigationOptions: () => ({
            header: null,
          }),
        },
        Graduate: {
          screen: Graduate,
          navigationOptions: () => ({
            title: "Graduate",
          }),
        },
        UnderGraduate: {
          screen: Undergraduate,
          navigationOptions: () => ({ title: "UnderGraduate" }),
        },
      }),
      navigationOptions: {
        tabBarLabel: "ADMISSIONS",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/seller.png")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },
    Scholarship: {
      screen: createStackNavigator({
        Scholarship: {
          screen: Scholarship,
          navigationOptions: () => ({
            header: null,
          }),
        },
        Local: {
          screen: Local,
          navigationOptions: () => ({
            title: "Local",
          }),
        },
        International: {
          screen: International,
          navigationOptions: () => ({ title: "International" }),
        },
      }),
      navigationOptions: {
        tabBarLabel: "SCHOLARSHIPS",
        tabBarIcon: ({ tintColor }) => (
          <FIcons name="graduation-cap" color={tintColor} size={24} />
        ),
      },
    },
    Jobs: {
      screen: Jobs,
      navigationOptions: {
        tabBarLabel: "JOBS",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/work.png")}
            style={{ height: 28, width: 28, tintColor: tintColor }}
          />
        ),
      },
    },
    Event: {
      screen: Event,
      navigationOptions: {
        tabBarLabel: "EVENTS",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/event.png")}
            style={{ height: 28, width: 28, tintColor: tintColor }}
          />
        ),
      },
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarLabel: "HomePage",
        tabBarIcon: ({ tintColor }) => (
          <AD name="setting" color={tintColor} size={24} />
        ),
      },
    },
  },

  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey",
      showLabel: false,
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 10,
      },
    },
  }
);

export default createAppContainer(Tabs);
