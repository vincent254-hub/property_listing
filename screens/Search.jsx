import {TextInput, TouchableOpacity, View, Image, Text } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from "./search.style";
import {Feather, Ionicons} from "@expo/vector-icons";
import {SIZES, COLORS} from "../constants";
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import SearchTile from '../components/products/SearchTile';


const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // console.log(searchResults)
  const handleSearch = async() => {
    try {
      const response = await axios.get(`http://192.168.43.225:8000/api/products/search/${searchKey}`);
      // console.log(response.data)
    } catch (error) {
      console.log("failed to load data", error)
      
    }
  }
  // console.log(searchKey);
  return (
    <SafeAreaView>
       <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge} 
              style={styles.searchIcon}

              />

        </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput 
              style={styles.searchInput}
              value={searchKey}
              onChangeText={setSearchKey}
              placeholder='Search products'
            />
          </View>
          <View>
              <TouchableOpacity
                onPress={() => handleSearch()}
                style={styles.searchBtn}>
                <Feather name='search' size={24}
                  color={COLORS.lightwhite}
                  
                  /> 
                </TouchableOpacity>
          </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{flex:1}}>
          <Image 
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ): (
        <FlatList 
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => (<SearchTile item={item}/>)}
        />
      )}
    </SafeAreaView>
  )
}

export default Search
