import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import database from "./database"

export default class App extends React.Component {
  constructor () {
    super()
    this.state= {
      texto:"",
      mostrartexto:"",
      chunks:[]
    }
  }

  render() {
    return (
      //o componente SafeAreaProvider é tipo o componente pai, que tudo que estiver contido nele, vai receber suas características
           //centerComponent é o componente central (texto, imagem, cabecalho...)
      <SafeAreaProvider>
        <View style={styles.container}>
    
          <Header
            backgroundColor={'black'}
            centerComponent={{
              text: "Dicionario Koo",
              style: { color: 'white', fontSize: 20 },
            }}
          />
         <Image style= {styles.image} source={require("./koo.jpg")}>
         </Image>

          <TextInput style={styles.TextInput}onChangeText= {texto=>{
            this.setState ({texto: texto}) 
          }}value= {this.state.texto}>
          </TextInput>

           <TouchableOpacity style={styles.TouchableOpacity}onPress= {()=>{
             this.setState ({chunks: database[this.state.texto].chunks})
           }}>
             <Text style={styles.TextStyle}>
               enviar
             </Text>

           </TouchableOpacity>

           <View>
           {this.state.chunks.map((item)=>{
             return(
               <TouchableOpacity style={styles.TouchableOpacity}>
              <Text>
              {item}
             </Text>
             </TouchableOpacity>

             )
           })}
           </View>
           
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  TextInput: {
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
    outline: "non"
  },
  TouchableOpacity: {
    width: "60%",
    height: 50,
    justifyContent: "center",
    alignItems:"center",
    alignSelf: "center",
    borderRadius: 10,
    margin: 5,
    backgroundColor: "black"
  },
  TextStyle: {
    color: "white"
  },
  image: {
    width: 450,
    height: 200
  }
});