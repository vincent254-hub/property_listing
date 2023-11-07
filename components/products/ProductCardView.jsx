import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import styles from './ProductCardView.style';
import {Ionicons} from "@expo/vector-icons";
import { COLORS } from '../../constants';

const ProductCardView = ({item}) => {
    const navigation = useNavigation();
  return (
   <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", {item})}>
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{
                    uri:item.imageUrl
                }}
            />
        </View>
        <View style={styles.details}>

            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.vendor} numberOfLines={1}>{item.vendor}</Text>
            <Text style={styles.price}>KES.{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
            <Ionicons 
                name='add-circle' size={35} color={COLORS.primary}
            />
        </TouchableOpacity>
    </View>

   </TouchableOpacity>
  )
}

export default ProductCardView