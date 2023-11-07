import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";


const styles = StyleSheet.create({
 container:{
    flex:1,
    backgroundColor:COLORS.lightwhite,


 },
 
 wrapper:{
    flex:1,
    backgroundColor:COLORS.lightwhite,
 },

 upperRow:{
    width:SIZES.width-50,
    flexDirection:"row",
    top:SIZES.large,
    marginHorizontal:SIZES.large,
    justifyContent:"flex-start",
    backgroundColor:COLORS.primary,
    alignItems:"center",
    position:"absolute",
    borderRadius:SIZES.large,
    zIndex:999,

 },

 productHeader:{
   fontFamily:"semibold",
   color:COLORS.lightwhite,
   fontSize:SIZES.medium,
   marginLeft:5,

   
 },

 
});

export default styles;