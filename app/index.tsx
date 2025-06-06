import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {

  const router = useRouter();
  
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <Text>¡Bienvenido a KaizenApp!</Text>
      <Pressable onPress={() => router.replace("/about")}>
        <Text style={{ color: "blue", marginTop: 16 }}>Ir a About</Text>
      </Pressable>
    </View>
  );
}