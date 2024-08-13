import {Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { styles } from "./styles";

export function Product() {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Carne</Text>

            <TouchableOpacity style={styles.button}>
                <Text>-</Text>
            </TouchableOpacity>
        </View>
    )
}