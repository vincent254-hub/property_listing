import {StyleSheet} from "react-native";
import { COLORS, SIZES} from "../constants/index";


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:COLORS.lightwhite,
                
    },
    upperRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        zIndex:999,
        marginHorizontal:20,
        alignItems:"center",
        position:"absolute",
        top:SIZES.xxLarge,
        width:SIZES.width -44,

    },
    Image:{
        aspectRatio:1,
        resizeMode:"cover"
    },
    details:{
        marginTop:-SIZES.large,
        backgroundColor:COLORS.lightwhite,
        width:SIZES.width,
        borderTopLeftRadius:SIZES.medium,
        borderTopRightRadius:SIZES.medium,

    },

    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // padding:0,
        width:SIZES.width -44,        
        top:20,
    },

    title:{
        fontFamily:"bold",
        fontSize:SIZES.large,
    },

    price:{
        paddingHorizontal:10,        
        fontFamily:"semibold",
        fontSize:SIZES.large,
    },

    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.large,

    },
    ratingRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // padding:0,
        width:SIZES.width -10,        
        top:5,
    },
    rating:{
        top:SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginHorizontal:SIZES.large
    },

    ratingText:{
        color:COLORS.gray,
        fontFamily:"medium",
        paddingHorizontal:SIZES.xSmall,

    },

    descriptionWrapper:{
        marginTop:SIZES.large*2,
        marginHorizontal:SIZES.small,
        // alignItems:"center",
    },
    descriptionTitle:{
        fontFamily:"medium",
        fontSize:SIZES.large,
        textAlign:"justify"
        
    },
    descText:{
        fontFamily:"regular",
        fontSize:SIZES.small,
        textAlign:"justify",
        marginBottom:SIZES.small

    },
    location:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:COLORS.secondary,
        padding:5,
        paddingHorizontal:6,
        marginHorizontal:SIZES.small,
        borderRadius:SIZES.large,

    },
    cartRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width,

    },
    cartBtn:{
        width:SIZES.width*0.5,
        backgroundColor:COLORS.black,
        padding:SIZES.small/2,
        borderRadius:SIZES.large,
        marginLeft:SIZES.small,

    },
    btnText:{
        color:COLORS.lightwhite,
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        textAlign:"left",
        marginLeft:SIZES.small,
        


    },
    addCart:{
        width:37,
        height:37,
        borderRadius:50,
        margin:SIZES.small,
        backgroundColor:COLORS.black,
        alignItems:"center",
        justifyContent:"center",
    },
})

export default styles;