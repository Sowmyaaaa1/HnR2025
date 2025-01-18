import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={screenStyle.safeArea}>
            <View style={screenStyle.screen}>
                <Text style = {screenStyle.headingtext}>Home Meow Meow</Text>
            </View>
    </SafeAreaView>
  );
}


const screenStyle = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e6f2ff',
      opacity : 1,
    },
    headingtext: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#000000',
    },
    subtext: {
      backgroundColor: 'transparent',
      fontSize: 12,
      color: '#000000',
    },
    tile: {
      backgroundColor: '#ffffff',
      padding: 10,
      borderRadius: 5,
    },
    safeArea: {
        flex : 1,
        backgroundColor : "#ffff00",
    }

  });


