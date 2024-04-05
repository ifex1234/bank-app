import Icons from "@expo/vector-icons/Octicons";
import Icons2 from "@expo/vector-icons/MaterialIcons";
import Icons3 from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Octicon, MaterialIcons, Ionicons } from "./homeIconTab";
import React, { useState } from "react";
import { Link } from "expo-router";
const Home = () => {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            color: "#b23c17",
            fontSize: 30,
            fontWeight: "800",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          IFEXPAY
        </Text>
        <View style={{ position: "absolute", top: 25, right: 15 }}>
          <Icons2 name="notifications" size={25} color="#ff784e" />
        </View>
        <Text style={{ position: "absolute", top: 16, right: 18 }}>5</Text>
      </View>

      <View style={styles.iconBars}>
        <Octicon
          iconName="arrow-switch"
          iconSize={30}
          iconColor="#fff"
          onpress={() => {}}
          textLabel="QUICK TRANSFERS"
        />
        <MaterialIcons
          iconName="send-to-mobile"
          iconSize={30}
          iconColor="#fff"
          onpress={() => {}}
          textLabel="QUICK TRANSFERS"
        />
        <MaterialIcons
          iconName="qr-code-2"
          iconSize={30}
          iconColor="#fff"
          onpress={() => {}}
          textLabel="QUICK QR"
        />
        <View style={styles.itemBar}>
          <Text style={styles.text}>BALANCE ENQUIRY</Text>
          <Icons2 name="account-balance-wallet" size={30} color="#fff" />
        </View>
        <View style={styles.itemBar}>
          <Text style={styles.text}>HELP/CONTACT</Text>
          <Icons2 name="help-outline" size={30} color="#fff" />
        </View>
        <View style={styles.itemBar}>
          <Text style={styles.text}>INTERNET BANKING</Text>
          <Icons2 name="account-balance" size={30} color="#fff" />
        </View>
        <View style={styles.itemBar}>
          <Text style={styles.text}>ATM/BRANCH</Text>
          <Icons3 name="compass-outline" size={30} color="#fff" />
        </View>
        <View style={styles.itemBar}>
          <Text style={styles.text}>AGENT LOCATOR</Text>
          <Icons2 name="person-pin-circle" size={30} color="#fff" />
        </View>
        <View style={styles.itemBar}>
          <Text style={styles.text}>FIRST REFER</Text>
          <Icons3 name="arrow-redo-outline" size={30} color="#fff" />
        </View>
      </View>
      <View style={styles.input}>
        <Text style={styles.text}>Enter your Pin to login</Text>
        <TextInput
          style={styles.inputBox}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.print}>
        <Icons2 name="fingerprint" size={20} color="#fff" />
        <Text style={styles.text}>LOGIN WITH FINGERPRINT</Text>
        <Link href="/(tabs)">
          <Text>home</Text>
        </Link>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#25292e",
  },
  header: {
    height: 120,
    position: "relative",
  },
  iconBars: {
    height: 340,
    width: 350,
    margin: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
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
  input: {
    backgroundColor: "#ff5722",
    height: 130,
    width: 340,
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    paddingTop: 10,
  },
  inputBox: {
    width: 200,
    height: 50,
    backgroundColor: "#fff",
    margin: 20,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  print: {
    backgroundColor: "#ff5722",
    marginHorizontal: 15,
    marginVertical: 8,
    height: 50,
    width: 340,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
{
  /* <FlatList
          data={splashScreen}
          renderItem={({ item }) => (
            <Item title={item.title} {<Icons name={item.title}/>} key={item.id} />
          )}
          keyExtractor={(itemKey) => itemKey.id}
          numColumns={3}
        /> */
}
