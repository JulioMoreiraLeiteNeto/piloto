import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { PizzaItem } from "./components/PizzaItem";
import { RowItem } from "./components/RowItem";
import { useState } from "react";

export default function App() {
  const [nameInput, setNameInput] = useState("");
  const [nameInput2, setNameInput2] = useState("");

  const handleSaveName = () => {
    setNameInput2(nameInput);
    Alert.alert("Nome salvo com sucesso!");
  };
  return (
    <SafeAreaView style={styles.container}>
      {nameInput2 === "" ? (
        <>
          <Text style={styles.texto}>Como podemos chamar Você?</Text>
          <TextInput
            placeholder="Digite seu nome"
            style={styles.input}
            value={nameInput}
            onChangeText={(text) => setNameInput(text)}
          />
          <Button title="Salvar" onPress={handleSaveName}></Button>
        </>
      ) : (
        <>
          <Text style={styles.texto}>
            Olá {nameInput}, seja muito bem vindo!
          </Text>
          <Button title="Voltar" onPress={() => setNameInput2('')}></Button>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignContent: "center",
    justifyContent: "center",
    color: "#000",
  },
  texto: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  input: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    backgroundColor: "#EEE",
  },
  btn: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    backgroundColor: "green",
  },
});
