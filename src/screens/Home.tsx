import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";

export function Home() {

    function handleProductAdd() {
        console.log('Adicionei o Produto!')
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Lista de Compras</Text>
        <Text>Segunda-feira, 05 de Agosto de 2024</Text>
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                placeholderTextColor= "#BDBABA"
                keyboardType="default"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleProductAdd}
            >

                <Text style={styles.textButton}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#EAEAEA',
      padding: 24,
      paddingTop: 100,    
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#fff',
        fontSize: 16,
        padding: 16,
        borderRadius: 5,
        marginRight: 16,
    },
    button: {
        backgroundColor: '#31C667',
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 24,
        color: '#fff'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 18,
    },
    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    todaysDate: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'normal',
    },
  });
