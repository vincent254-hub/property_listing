import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react';
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto} from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './ProductDetails.style';
import { COLORS, SIZES } from '../constants';
import useFetch from '../hook/useFetch';



const ProductDetails = ({navigation, route}) => {
  const { item } = route.params;
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count +1)
  }

  const decrement = () => {
    if(count > 1){
      setCount(count -1)
    }
  }
  return (
    // <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.upperRow}>
                  <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' size={30}/>              
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Ionicons name='heart' size={30}  color={COLORS.secondary}/>
                  </TouchableOpacity>
            </View>
              <Image 
                source={{ 
                  uri: item.imageUrl
                 }}
                style={styles.Image}
              />

            <View style={styles.details}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>KES. {item.price}</Text>
                </View>
              </View>

              <View style={styles.ratingRow}>
                <View style={styles.rating}>
                    {[1,2,3,4,5]. map((index)=>(
                      <Ionicons
                      key={index}
                        name='star'
                        size={24}
                        color="gold"
                      />
                    ))}

                    <Text style={styles.ratingText}>(4.9)</Text>
                </View>

                <View style={styles.rating}>
                    <TouchableOpacity onPress={()=>increment()}>
                        <SimpleLineIcons 
                          name='plus'
                          size={20}
                        />
                    </TouchableOpacity>
                    <Text style={styles.ratingText}>{count}</Text>

                    <TouchableOpacity onPress={()=>decrement()}>
                        <SimpleLineIcons 
                          name='minus'
                          size={20}
                        />
                    </TouchableOpacity>
                </View>
              </View>

              <View style={styles.descriptionWrapper}>

                    <Text style={styles.descriptionTitle}>{item.title}</Text>
                      <Text style={styles.descText}>{item.description}</Text>
              </View> 
              <View style={{marginBottom:SIZES.small}}>
                  <View style={styles.location}>
                      <View style={{ flexDirection:"row"}} >
                        <Ionicons name='location-outline' size={20} />
                        <Text> {item.product_location}</Text>
                      </View>

                      <View style={{ flexDirection:"row"}} >
                        <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
                        <Text> Free Delivery </Text>
                      </View>
                  </View>

              </View> 

              <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
                      <Text style={styles.btnText}>BUY NOW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}} style={styles.addCart}>
                      <Fontisto name='shopping-bag' size={20} color={COLORS.lightwhite}/>
                    </TouchableOpacity>
              </View>              
              
            </View>
          
        </View>
    
  )
}

export default ProductDetails
