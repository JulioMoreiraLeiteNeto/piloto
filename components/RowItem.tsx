import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";

type Itens = {
    title: string;
    subtitle?: string;
    rightIcon?: JSX.Element;
    onPress?: () => void;
    itens: string[];
    };

export const RowItem = ({ title, subtitle, rightIcon, onPress }: Itens ) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <View style={styles.rowText}>
      <Text style={styles.title}>{title}</Text>

    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
    {rightIcon}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowText: {
    alignContent: "center",
  },
  title: {
    fontSize: 16,
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
});