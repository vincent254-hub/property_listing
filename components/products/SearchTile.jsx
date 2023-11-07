import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './SearchTile.style'

const SearchTile = () => {
  return (
    <View>
        <TouchableOpacity style={styles.container}>
            <View style={styles.image}>
                <Image 
                    source={{uri: item.imageUrl}}
                    style={styles.productImg}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productTitle}>{item.title}</Text>

                <Text style={styles.vendor}>{item.vendor}</Text>

                <Text style={styles.price}>{item.price}</Text>

            </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTile