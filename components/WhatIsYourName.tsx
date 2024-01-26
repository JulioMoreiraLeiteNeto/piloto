import { useState } from "react";
import {
    Alert,
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput
} from "react-native";

  type Props = {
    setNameInput: (newName: string) => void;
  }
  
  export const WhatIsYourName = ({ setNameInput }: Props) => {
    const [nameInput2, setNameInput2] = useState("");

    const handleClick = () => {
      if (nameInput2 === "") {
        Alert.alert("Ops", "Você não digitou seu nome");
        return;
      }
      setNameInput(nameInput2);
    }

    return (
      <SafeAreaView style={styles.container}>
          <>
            <Text style={styles.texto}>Como podemos chamar Você?</Text>
            <TextInput
              placeholder="Digite seu nome"
              style={styles.input}
              value={nameInput2}
              onChangeText={setNameInput2}
            />
            <Button title="Salvar" onPress={handleClick}></Button>
          </>
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

  export default WhatIsYourName;
  