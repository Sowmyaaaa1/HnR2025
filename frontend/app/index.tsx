import { Text, View } from "react-native";
import { Redirect, RelativePathString } from "expo-router";

const remindersPath: RelativePathString = './reminders';
export default function Index() {
  return (
    <View>
        <Redirect href={remindersPath} />
    </View>
    
  );
}