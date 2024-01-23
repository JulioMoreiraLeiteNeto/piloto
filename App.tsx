import { Alert, Button, Pressable, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { PizzaItem } from './components/PizzaItem';
import { RowItem } from './components/RowItem';
import { useState } from 'react';

export default function App() {

  const [ingredientes, setIngredientes] = useState(
    [
      "Queijo X",
      "Queijo Y",
      "Queijo Z"
    ]);


  const handleButton = () =>{
    Alert.alert("Oiiii");
  }

  const handleNewingredient = () => {
    setIngredientes((prev) => [...prev, "Novo Ingrediente"]);
  }
  return (
    <SafeAreaView style={styles.container}>
     {
        ingredientes.map((ingrediente) => {
          return <Text style={styles.texto}>{ingrediente}</Text>
        })
     }
    <Button title='Adicionar Novo Item'onPress={handleNewingredient}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignContent: 'center',
    justifyContent: 'center',
    color: '#000',  
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});