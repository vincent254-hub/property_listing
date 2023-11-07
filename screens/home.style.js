import { StyleSheet, Text } from "react-native";
import { COLORS, SIZES} from "../constants/index";


const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  textStyle:{
    fontFamily: "extrabold",
    fontSize: 30,
  },
  appBarWrapper: {
    marginHorizontal:22,
    marginTop: SIZES.small,

  },
  appBar:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    
  },

  location:{
    fontFamily:"semibold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    top:1,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "ceter",
    zIndex: 999
  },
  cartNumber: {
    fontFamily: "regular",
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightwhite,
    
  }
});

export default styles