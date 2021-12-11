import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , TextInput ,Button ,ScrollView ,TouchableOpacity, Image} from 'react-native';
import { ImageBackground } from 'react-native-web';


function pascalTriangle(level){
  if(level === 0){
      return [[1]]
  }
  const previousValue = pascalTriangle(level - 1); 
  const lastValOfPrevious =   previousValue[previousValue.length - 1]
  const currentValue =  lastValOfPrevious.reduce((acc,num,i) => {
      if(lastValOfPrevious[i + 1] != undefined){
          acc.push(lastValOfPrevious[i] + lastValOfPrevious[i + 1])
      }else{
          acc.push(1)
      }
      return acc;
  },[1]);
  const result = [...previousValue,currentValue]
  return result
}
const print = (lis)=>{
  lis.map((l)=>{
      <Text>{l}</Text>
  })
}

export default function App() {
  const [number,setNumber]=useState(0);
  const [show , setShow]= useState(false);
  
  
  
  return (
    <View style={styles.container}>
     
   { show  ? 
   <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}  horizontal={true}  >
   <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}} >
   <View style={styles.containerTwo}> 
    {pascalTriangle(number).map((element)=> ( 
      <Text style={{borderWidth:1 , padding:4,fontWeight: 'bold',fontSize:22, color:"#009688", flex:1 ,alignItems:'center' ,justifyContent:'center'}}>{element.join(' | ')}</Text>
    ))}
    <TouchableOpacity onPress={()=>{setShow(false)}} style={styles.appButtonContainerBack}>
       <Text style={styles.appButtonText}>Back</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    </ScrollView>
    
    : <View>
      <Text style={styles.textStyle}>Pascal's Triangle</Text>
      <Image
        style={styles.stretch}
        source={require('./assets/pascal.jpg')}
      />
    <TextInput 
      style={styles.input} 
      placeholder='Enter any number'
      onChangeText={(val)=> setNumber(val)} />
        <TouchableOpacity onPress={()=>{setShow(true)}} style={styles.appButtonContainer}>
       <Text style={styles.appButtonText}>Start</Text>
       </TouchableOpacity>
       </View>
       }

    
      
     
      
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:12,
  },
  containerTwo: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:12,
    
  },
  textStyle:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 40,
    marginBottom:15,
    color:"#009688",

  },
  stretch: {
    width: 250,
    height: 300,
    display:'flex',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    marginHorizontal:25,
    marginBottom:10,
  
  },
  appButtonContainer: {  
    marginHorizontal:30,
    marginTop:5,
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonContainerBack: {  
    marginHorizontal:30,
    marginTop:'auto',
    elevation: 8,
    backgroundColor: "#d63a2f",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom:10,
    marginTop:10,    
  },


  input:{
    borderColor:"#009688",
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:15,
    padding:8,
    marginLeft:25,
    marginBottom:7,    
    width:250,
  }
});
