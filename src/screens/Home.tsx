import { StyleSheet, TouchableOpacity, View, Text, TextInput } from "react-native";

export function Home() {
  const handleProductAdd = () => {
    console.log("Adicionei o produto");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <Text style={styles.todaysDate}>Segunda-feira, 05 de Agosto de 2024</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          placeholderTextColor="#BDBABA"
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleProductAdd}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.listTitle}>Compras Pendentes</Text>

      <View style={styles.list}>
        <Text style={styles.listEmptyText}>
          Comprou todos os produtos? Adicione produtos a sua lista de compras.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    padding: 24,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    height: 56,
    padding: 16,
    fontSize: 16,
    borderRadius: 5,
    marginRight: 16,
  },
  button: {
    backgroundColor: "#31C667",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textButton: {
    fontSize: 24,
    color: "#fff",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 18,
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  todaysDate: {
    color: "#000",
    fontSize: 16,
    fontWeight: "normal",
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 36,
  },
  listEmptyText: {
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "center",
  },
  list: {
    flex: 1,
    justifyContent: "center",
  },
});