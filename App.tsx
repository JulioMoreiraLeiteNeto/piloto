import { Alert, Button, Pressable, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { PizzaItem } from './components/PizzaItem';
import { RowItem } from './components/RowItem';

export default function App() {

  const handleButton = () =>{
    Alert.alert("Oiiii");
  }

  return (
    <SafeAreaView style={styles.container}>
      <RowItem title='Oiiii' itens={["Queijo X","Queijo Y","Queijo Z"]}>{}</RowItem>
      {/* <Button title="Press me" onPress={handleButton} /> */}

      {/* <Pressable onPress={handleButton}>
        <Text style={styles.texto}>Press me</Text>
      </Pressable> */}
      <TouchableHighlight onPress={handleButton} underlayColor="black">
        <Text style={styles.texto}>Botão com highlight</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={handleButton} underlayColor="none">
        <Text style={styles.texto}>Botão sem highlight</Text>
      </TouchableHighlight>
      <TouchableOpacity onPress={handleButton}>
        <Text style={styles.texto}>Botão com Opacity</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={handleButton}>
        <Text style={styles.texto}>Botão Sem Resposta</Text>
      </TouchableWithoutFeedback>
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