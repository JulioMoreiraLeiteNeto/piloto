import { StyleSheet, Text, View } from "react-native";

export const PizzaItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pizza Calabresa</Text>
      <Text style={styles.subtitle}>R$ 50,00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {    
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        width: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
    subtitle: {
        fontSize: 15,
        color: '#ff0000',
        alignSelf: 'flex-end',
    },
    });
