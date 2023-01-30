import * as React from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  SafeAreaView,
  SectionList,
  StatusBar,
} from "react-native";
import Card from "../components/Card";

const DATA = [
  {
    title: "Buoy reading",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Wind",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Forecast",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Rating",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles}>
      <SafeAreaView style={styles.container}>
        <Card title="Conditions">
          <Text>
            Mix of primary/easing WNW swell and secondary NNE windswell. NE wind
            persists in the morning, then could see winds rotate ENE-E for the
            afternoon. Quality would gradually improve as a result.
          </Text>
        </Card>
        <Card title="Buoy">
          <Text>3.8ft 17s NW 315</Text>
          <Text>2.1ft 17s NW 320</Text>
          <Text>4.5ft 7s N 355</Text>
        </Card>
        <Card title="Wind">
          <Text>20mph NE 29</Text>
        </Card>
      </SafeAreaView>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default HomeScreen;
