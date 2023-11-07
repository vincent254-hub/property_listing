import {StyleSheet} from "react-native";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        
    },
    container:{
       alignItems:"center",
       paddingTop:SIZES.xxLarge,
       paddingLeft:SIZES.small/2,
       
    },
    separator:{
        height:16,
        

    }
});

export default styles;