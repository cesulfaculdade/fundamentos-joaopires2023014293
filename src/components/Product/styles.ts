import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center',
    }
})