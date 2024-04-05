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
type IconsProp2 = {
  iconName:
    | "send-to-mobile"
    | "qr-code-2"
    | "account-balance-wallet"
    | "help-outline"
    | "account-balance"
    | "person-pin-circle";
  iconSize: number;
  onpress: () => void;
  iconColor: string;
  textLabel: string;
};
type IconsProp3 = {
  iconName: "compass-outline" | "arrow-redo-outline";
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
export function MaterialIcons({
  iconName,
  iconSize,
  iconColor,
  onpress,
  textLabel,
}: IconsProp2) {
  return (
    <TouchableOpacity style={styles.itemBar} onPress={onpress}>
      <Text style={styles.text}>{textLabel}</Text>
      <Icons2 name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}
export function Ionicons({
  iconName,
  iconSize,
  iconColor,
  onpress,
  textLabel,
}: IconsProp3) {
  return (
    <TouchableOpacity style={styles.itemBar} onPress={onpress}>
      <Text style={styles.text}>{textLabel}</Text>
      <Icons3 name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
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
