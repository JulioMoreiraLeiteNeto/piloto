import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import HereIsYourName from "./components/HereIsYourName";
import WhatIsYourName from "./components/WhatIsYourName";

export default function App() {
  const [nameInput, setNameInput] = useState("");

  const handleClearName = () => {
    setNameInput("");
  };

  return (
    <SafeAreaView style={styles.container}>
      {nameInput == "" && <WhatIsYourName setNameInput={setNameInput}/>}
      {nameInput !== "" && (
        <HereIsYourName
          nameInput={nameInput}
          handleClearName={handleClearName}
        />
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
