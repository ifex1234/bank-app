import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icons from "@expo/vector-icons/Octicons";
import Icons2 from "@expo/vector-icons/MaterialIcons";
import Icons3 from "@expo/vector-icons/Ionicons";

type IconsProp1 = {
  iconName: "arrow-switch";
  iconSize: number;
  onpress: () => void;
  iconColor: string;
  textLabel: string;
};
export function Octicon({
  iconName,
  iconSize,
  iconColor,
  onpress,
  textLabel,
}: IconsProp1) {
  return (
    <TouchableOpacity style={styles.itemBar} onPress={onpress}>
      <Text style={styles.text}>{textLabel}</Text>
      <Icons name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}
export function MaterialIcons() {
  return (
    <View style={styles.itemBar}>
      <Text style={styles.text}>QUICK TRANSFERS</Text>
      <Icons2 name="arrow-switch" size={30} color="#fff" />
    </View>
  );
}
export function Ionicons() {
  return (
    <View style={styles.itemBar}>
      <Text style={styles.text}>QUICK TRANSFERS</Text>
      <Icons3 name="arrow-switch" size={30} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  itemBar: {
    backgroundColor: "#ff5722",
    width: 105,
    height: 100,
    margin: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
