import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";

interface Movie {
  titulo: string;
  avatar: string;
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      const req = await fetch("https://api.b7web.com.br/cinema/");
      const json = await req.json();

      if (json) {
        setMovies(json);
      }
      setLoading(false);
    };
    loadMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <>
          <ActivityIndicator size="large" color={"#000"} />
          <Text>Carregando...</Text>
        </>
      )}
      {!loading && (
        <>
          <FlatList
            style={styles.list}
            data={movies}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.titleFilme}>{item.titulo}</Text>
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.avatarFilme}
                />
              </View>
            )}
            keyExtractor={(item) => item.titulo}
          />
          <Text style={styles.totalFilmes}>
            Total de Filmes: {movies.length}
          </Text>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    marginTop: 80,
    marginBottom: 20,
  },
  titleFilme: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  avatarFilme: {
    width: 300,
    height: 600,
    flex: 1,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: -70,
  },
  totalFilmes: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
});
