import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "Raining",
        subtile: "For more info look outside",
        icon: "ios-rainy"
    },
    Clear: {
        colors:["#FEF253", "#FF7300"],
        title: "Sunny",
        subtile: "For more info look outside",
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm",
        subtile: "For more info look outside",
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        title: "Cloudy",
        subtile: "For more info look outside",
        icon: 'ios-cloud'
    },
    Snow: {
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Snowy",
        subtile: "For more info look outside",
        icon: 'ios-sonw'
    },
    Drizzle: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtile: "For more info look outside",
        icon: 'ios-rainy-outline'
    },
    Haze: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtile: "For more info look outside",
        icon: 'ios-rainy-outline'
    }
}

function Weather({ weatherName, temp }) {
    return(
        <LinearGradient 
            colors={weatherCases[weatherName].colors}
            style={styles.container}>
            
            <View style={styles.upper}>
               <Ionicons 
               color="white" 
               size={130} 
               name={weatherCases[weatherName].icon}/>
               
               <Text style={styles.temp}>{temp}`</Text>
           </View>
           <View style={styles.lower}>
               <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
    <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
           </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 45,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontFamily: "sans-serif-thin",
        fontWeight: "normal"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
});