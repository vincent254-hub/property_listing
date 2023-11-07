import {  Dimensions  } from 'react-native';
const { height, width } = Dimensions.get('window');

const COLORS = {
    primary: "#2A4D50",
    secondary:"#DDF0FF",
    tertiary: "#ff7754",

    gray: "#83829A",
    gray2: "#cac0c8",

    offwhite: "#f3f4f8",
    white: "#ffffff",
    black: "#000000",
    red: "#e81e4d",
    green: "#00c135",
    lightwhite: "#fafafc",
};

const SIZES = {
    xSmall:10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:5.84,
        elevation:5,
    },    

};

export { COLORS, SIZES, SHADOWS};
