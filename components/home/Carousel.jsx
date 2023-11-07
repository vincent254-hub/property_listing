import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box';
import {COLORS} from "../../constants";
import useFetch from '../../hook/useFetch';
import { getProducts } from '../../apiCalls';

const Carousel = () => {

  const {data, isLoading, error} = useFetch();
    const slides = [
        "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1279109/pexels-photo-1279109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/16347/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://media.istockphoto.com/id/1018122120/photo/there-are-various-funitures-in-the-livingroom.webp?s=1024x1024&w=is&k=20&c=mtiWS90mkb-TncL1ZBgmzHtNNLVlo3l9W-zMDRpJhzw=",
        "https://images.pexels.com/photos/7601121/pexels-photo-7601121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox images={slides}
      dotColor= {COLORS.primary}
      inactiveDotColor = {COLORS.secondary}
      ImageComponentStyle = {{borderRadius:15, width:"93%", marginTop:15}}
      autoplay
      circleLoop
       />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems:"center",
    }
})