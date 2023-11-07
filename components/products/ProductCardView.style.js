import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width:182,
        height:240,
        marginEnd:22,
        borderRadius: SIZES.medium,
        backgroundColor:COLORS.secondary,

    },

    imageContainer: {
        flex:1,
        width:170,
        marginLeft:SIZES.small/2,
        marginTop:SIZES.small/2,
        borderRadius:SIZES.small,
        overflow:"hidden",
        marginRight:SIZES.small/2,
    },
    image:{
        aspectRatio:1,
        resizeMode:"cover",

    },
    details:{
        padding:SIZES.small,
        marginBottom:30,

    },

    title:{
       fontFamily:"bold",
       fontSize:SIZES.large,
       marginBottom:2,
    },

    vendor:{
       fontFamily:"regular",
       fontSize:SIZES.small,
       marginBottom:2,
       
        
    },

    price:{
       fontFamily:"bold",
       fontSize:SIZES.medium,
       marginBottom:2,
        
    },

    addBtn:{
      position:"absolute",
      bottom:SIZES.xSmall,
      right: SIZES.xSmall, 
      marginBottom:25,

    },
})

export default styles;


