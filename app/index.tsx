import { Text, View, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();

  return (
    <View style={estilos.raiz}>
      <View style={estilos.escondido}>
        <Pressable onPress={() => router.back()}></Pressable>
      </View>

      <View style={estilos.titulo}>
        <Text style={estilos.textao}>O que você achou da Pesquisa 2024?</Text>
      </View>

      <View style={estilos.botoes}>
        <Link href="/agradecimentos" asChild>
          <TouchableOpacity style={estilos.escolha}>
              <Image style={{height: 75, width: 75}} source={require('@/assets/images/pessimo.png')} />
              <Text style={estilos.feedback}>Péssimo</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/agradecimentos" asChild>
          <TouchableOpacity style={estilos.escolha}>
              <Image style={{height: 75, width: 75}} source={require('@/assets/images/ruim.png')} />
              <Text style={estilos.feedback}>Ruim</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/agradecimentos" asChild>
          <TouchableOpacity style={estilos.escolha}>
              <Image style={{height: 75, width: 75}} source={require('@/assets/images/neutro.png')} />
              <Text style={estilos.feedback}>Neutro</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/agradecimentos" asChild>
          <TouchableOpacity style={estilos.escolha}>
              <Image style={{height: 75, width: 75}} source={require('@/assets/images/bom.png')} />
              <Text style={estilos.feedback}>Bom</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/agradecimentos" asChild>
          <TouchableOpacity style={estilos.escolha}>
              <Image style={{height: 75, width: 75}} source={require('@/assets/images/excelente.png')} />
              <Text style={estilos.feedback}>Excelente</Text>
          </TouchableOpacity>        
        </Link>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  raiz: {
    flex: 1,
    backgroundColor: "#372775",
    padding: 10
  },
  escondido: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    position: 'absolute'
  },
  titulo: {
    flex: 1/3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  textao: {
    fontSize: 30,
    color: 'white',
    fontWeight: "bold",
    textAlign: "center"
  },
  botoes: {
    flex: 2/3,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  escolha: {
    flexDirection: 'row', 
    alignItems: 'center',
    left: 30
  },
  feedback: {
    left: 50,
    fontSize: 25,
    color: 'white',
    fontWeight: 'semibold'
  }
});
