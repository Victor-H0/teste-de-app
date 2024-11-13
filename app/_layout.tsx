import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: "#2b1d62" },
      headerTintColor: "#fff",
    }}>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="agradecimentos" options={{ headerShown: false }}/>
      <Stack.Screen name="relatorio" options={{title: "Relatório", headerStyle: { backgroundColor: "#2b1d62" }}}/>
    </Stack>
  );
}
