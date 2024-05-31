import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Picker, View} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function MtScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }

  const [selectedValue, setSelectedValue] = useState('1');

  const redirecionar = () => {
   navigation.navigate('PagProcess')
  };

  return (
   <ScrollView style={styles.container1}>
        <View style={styles.container}>
          <Text style={styles.label}>Escolha uma série:</Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="1° Ano" value="1" />
            <Picker.Item label="2° Ano" value="2" />
            <Picker.Item label="3° Ano" value="3" />
          </Picker>
        <TouchableOpacity style={styles.button} onPress={redirecionar}>
          <Text style={styles.buttonTxt}>CONTINUAR</Text>
        </TouchableOpacity>
        </View>
            <Text style={styles.conteTxt}>Conteúdos</Text>

        <TouchableOpacity onPress={redirecionar}>
          <Text style={styles.buttonCont}>1. ANALIZANDO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={redirecionar}>
          <Text style={styles.buttonCont}>2. ANALIZANDO</Text>
        </TouchableOpacity>

         <TouchableOpacity onPress={redirecionar}>
          <Text style={styles.buttonCont}>3. ANALIZANDO</Text>
        </TouchableOpacity>

         <TouchableOpacity onPress={redirecionar}>
          <Text style={styles.buttonCont}>4. ANALIZANDO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={redirecionar}>
          <Text style={styles.buttonCont}>5. ANALIZANDO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={redirecionar}>
          <Text style={styles.buttonCont}>6. ANALIZANDO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={redirecionar}>
          <Text style={styles.buttonCont}>7. ANALIZANDO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={redirecionar}>
          <Text style={styles.buttonCont}>8. ANALIZANDO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={redirecionar}>
          <Text style={styles.buttonCont}>9. ANALIZANDOs</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={redirecionar}>
          <Text style={styles.buttonCont}>10. ANALIZANDO</Text>
        </TouchableOpacity>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  
  },
  container1:{
    marginBottom: 50
  },
  
 label: {
    marginBottom: 8,
    fontSize: 18,
  },
  picker: {
    height: 50,
    width: 150,
    marginBottom: 16,
    marginLeft: -160,
    marginBottom: -50
  },

  button:{
    backgroundColor: '#14c500',
    fontWeight: '700',
    borderTopRightRadius: 10,
    borderEndEndRadius: 10,
    paddingBottom:10,
    paddingTop: 5,
    paddingRight: 5,
    marginLeft: 160, 
  },
  buttonTxt:{
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10
  },

  conteTxt:{
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 95,
  },
  buttonCont:{
    marginTop: 10,
    color: 'grey',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15
  }
})