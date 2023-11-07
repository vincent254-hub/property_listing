import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './NewArrivals.style';
import {Ionicons} from "@expo/vector-icons";
import { ProductList } from '../components';

const NewArrivals = ({navigation, route}) => {
    // const { item } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.upperRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons
                            style={{marginHorizontal:"auto"}} 
                            name="chevron-back-circle" 
                            size={30}
                        />
                    </TouchableOpacity>

                    <Text style={styles.productHeader}>Products</Text>
                </View>
                <ProductList />
            </View>
        </SafeAreaView>
    )
}

export default NewArrivals;