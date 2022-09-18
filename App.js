import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import Home from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FriendFinderScreen from "./src/pages/FriendFinderScreen";
import FriendChatScreen from "./src/pages/FriendChatScreen";

//import { updateFriends } from './src/friend-manager';

export default function App() {
  /*useEffect(() => {
  //const tickInterval = setInterval(() => update(), 1000);
  //const friendTickInterval = setInterval(() => updateFriends(), 1800000);
  return () => {
    //clearInterval(tickInterval);
    //clearInterval(friendTickInterval);
  };
}, []);*/

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FriendFinderScreen" component={FriendFinderScreen} />
        <Stack.Screen name="FriendChatScreen" component={FriendChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    backgroundColor: "#eee",
  },
});
