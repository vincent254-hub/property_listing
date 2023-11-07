import { StyleSheet } from "react-native";
import {COLORS, SHADOWS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    container:{
        flx:1,
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        marginBottom:SIZES.small,
        flexDirection:"row",
        padding:SIZES.medium,
        borderRadius:SIZES.small,
        ...SHADOWS.medium,
        shadowColor:COLORS.lightwhite,


    },

    image:{
        width:70,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        justifyContent:"center",
        alignContent:"center",

    },

    productImg:{
        width:"100%",
        height:65,
        borderRadius:SIZES.small,
        resizeMode:"cover",
    },

    textContainer:{
        flex:1,
        marginHorizontal:SIZES.medium,

    },
    productTitle:{
        fontSize:SIZES.medium,
        fontFamily:"bold",
        color:COLORS.primary,
    },
    vendor:{
        fontSize:SIZES.small + 2,
        fontFamily:"regular",
        color:COLORS.gray,
        marginTop:3,
    },
    price:{
        fontSize:SIZES.small + 2,
        fontFamily:"regular",
        color:COLORS.gray,
        marginTop:3,
    }
});

export default styles;