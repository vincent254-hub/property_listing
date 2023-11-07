import { FlatList, ActivityIndicator, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SIZES, COLORS } from '../../constants';
import ProductCardView from './ProductCardView';
import styles from './ProductRow.styles';
import useFetch from '../../hook/useFetch';



const ProductRow = () => {
  const {data, isLoading, error} = useFetch();
  return (
    <View style={styles.container}>
            
        {isLoading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        ): error ? (
          <Text> Oops! Something went wrong. </Text>
        ):(
          <FlatList 
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({item})=> <ProductCardView item = {item} />}
          horizontal
          contentContainerStyle={{columnGap:SIZES.medium}}
        />
        )}
    </View>
  );
};

export default ProductRow
