import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PizzaItem } from './components/PizzaItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pizzaria Toscana</Text>
      <Text style={styles.subtitle}>A melhor da região</Text>
      <PizzaItem  />
      <PizzaItem  />
      <PizzaItem  />
      <PizzaItem  />
      <PizzaItem  />
      <PizzaItem  />
      <PizzaItem  />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems:'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
  },
});
