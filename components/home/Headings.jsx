import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {COLORS} from "../../constants";
import React from 'react';
import styles from "./headings.styles";
import {Ionicons} from "@expo/vector-icons";

const Headings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>New Arrivals</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
                <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
            </TouchableOpacity>
        </View>      
    </View>
  )
}

export default Headings;