import {  StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',    
      },
      header:{
        backgroundColor:'#edaf44',
      
      },
      item:{
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth:1,
        paddingVertical:5,
        borderColor:'#aaaaaa'

      },
      titulo:{
        fontSize:16,
        fontWeight:'bold',
        color:'#000',
      },
      textoLista:{
        flexDirection:'column',
        color:'#fff'
      }
})

export default styles;