
import {View, Text, TouchableOpacity,  Image} from "react-native";
import styles  from "./styles";
import Logo from "./src/assets/mcLogo.png";
import Coleta from "./src/assets/drive.png";

 const App:React.FC  = () => {


return (
    <View style={styles.container}>
      <Image source ={Logo}style={styles.imageLogo} /> 
      
      <View style={styles.InicioDois}>
     <TouchableOpacity style={styles.buttonPeca}> 
     <Text>Peça e Retire</Text></TouchableOpacity>
    <TouchableOpacity style={styles.buttonDelivery}>
      <Text style={styles.textDelivery}>McDelivery</Text></TouchableOpacity>
      </View>

      <Text style={styles.Inf} >Retire o seu pedido na loja mais próxima ou peça a entrega a domicílio.</Text>
      <Text style={styles.Desc}>Escolha novos métodos de coleta no local ou aguarde seu pedido no conforto da sua casa.</Text>
      
      <Image source ={Coleta}style={styles.imageColeta} />

      <TouchableOpacity style={styles.buttonPedido}>
        <Text>Iniciar Pedido</Text>
      </TouchableOpacity>
      </View>
    
  );

 };
 export default App;