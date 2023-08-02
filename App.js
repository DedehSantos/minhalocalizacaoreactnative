import React, {useEffect, useState} from "react";

import { Alert, StyleSheet, Text, View } from "react-native";

import MapView from  'react-native-maps';


export default function App(){

  let [regiao, setRegiao] = useState({
    latitude:  -7.23072,
    longitude:  -35.8817,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014

  }
  );


useEffect(() =>{
   Alert("MERDA");V C 
}),[]




return (
  <View style={styles.container} >
     <MapView style={{width:'100%', height:'100%'}} initialRegion={regiao} ></MapView>
  </View>

)
}

const styles = StyleSheet.create({
  container:{
    flex:1

  }
})