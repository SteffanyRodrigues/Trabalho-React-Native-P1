import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //Pagina login
  containerDois: {
  
  width:'80%',
  display:'flex',
  
 
  
  
  },
  Inicio:{
    flexDirection:'row',
    padding:15,
    margin:10,
    fontSize: 18,
    paddingHorizontal: 8,
    
    alignItems:'center',
  },

 text:{
 
  marginLeft:10,
 },
  label: {
    fontSize:11, 
   marginBottom:70,
    marginLeft:10,
    color:'blue',
    
  },

  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
 
  },
  button: {
    backgroundColor: '#ffbc0d',
    width:'110%',
    height:60,
    borderRadius: 8,
    paddingVertical: 12,
    
    margin:20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    margin:2,
  },
    buttonRede:{
      flexDirection: 'row',
      padding:20,
      margin:10,
      width: '80%',
      height: 60,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginBottom: 16,
      paddingHorizontal: 8,
      alignItems:'center',
      fontWeight: 'bold',
     

    },
    imageFace:{
      flexDirection: 'row',
      width:25,
      height: 25,
      margin:5,
      
      alignItems:'center',
    },
  
  //Pagina pedidos 
  container: {
    alignItems:'center',
    flex:20, 
  
   
   
   },
  imageLogo:{
    width:47,
    height:40,
    margin:12,
    paddingTop:10,
    alignItems: 'center',

  },
  InicioDois:{
    flexDirection:'row',
    padding:15,
    fontSize: 18,
    paddingHorizontal: 8,
    alignItems:'center',
  },
  buttonPeca:{
   flexDirection:'row',
   padding:20,
   backgroundColor:'#ffbc0d',
   
   marginLeft:1,
   borderRadius:25,
   width:180,
   position:'absolute',
   fontWeight: 'bold',
   zIndex: 1,
  },
  textDelivery:{
  
    textAlign:'center',

    marginLeft:100,
  },
  buttonDelivery:{
    flexDirection:'row',
    padding:20,
    backgroundColor:'rgba(169, 169, 169, 0.2)',
   
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    position: 'relative',
    borderRadius:25,
    marginLeft:120,
    width:220,

    
  },
  imageColeta:{
    width: 300,
    height: 300,
    padding:50,
    margin:5,
    alignItems: 'center',
  },
  buttonPedido:{
    backgroundColor:'#ffbc0d',
   borderRadius:4,
   padding:10,
   margin:5,
   width:350,
   height: 50,
   alignItems:'center',
   marginVertical:4,
   fontWeight: 'bold'
  },

  Inf:{
    backgroundColor: '#ffff',
    fontSize: 30,
    fontWeight: 'bold',
    margin:50,
    alignItems:'flex-end'
  
 },
 Desc:{
  color: '#606060',
  fontSize: 10,
  alignItems:'flex-end'
 },
});

export default styles;
