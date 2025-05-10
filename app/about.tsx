import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function About() {

  const router = useRouter();
  
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <Text>About what??</Text>
      <Pressable onPress={() => router.replace("/")}>
        <Text style={{ color: "blue", marginTop: 16 }}>Ir a Home</Text>
      </Pressable>
    </View>
  );
}