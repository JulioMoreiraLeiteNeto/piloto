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
    nameInput: string;
    handleClearName: () => void;
  }
  
  export const HereIsYourName = ({nameInput, handleClearName}: Props) => {

    return (
      <SafeAreaView style={styles.container}>
          <>
            <Text style={styles.texto}>Olá {nameInput}, é um prazer ter-lo aqui</Text>
            <Button title="Voltar" onPress={handleClearName}></Button>
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

  export default HereIsYourName;
  