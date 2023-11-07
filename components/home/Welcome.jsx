import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants"
import {Feather, Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Welcome = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
                
        Find The Most</Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
                
        Luxurious Staffs</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Feather name='search' size={24} style={styles.searchIcon}/>

        </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput 
              style={styles.searchInput}
              value=''
              onPressIn={()=>navigation.navigate("Search")}
              placeholder='Search products'
            />
          </View>
          <View>
              <TouchableOpacity style={styles.searchBtn}>
                <Ionicons 
                  name="camera-outline"
                  size={SIZES.xLarge}
                  color={COLORS.lightwhite}
                  
                  /> 
                </TouchableOpacity>
          </View>
      </View>
     
    </View>
  )
}

export default Welcome