import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the Home Screen For my App</Text>

      <Link href="/(tabs)" asChild>
        <Button title="To app" />
      </Link>
    </View>
  );
}
