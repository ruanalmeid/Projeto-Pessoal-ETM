import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Picker, View} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function PagProcess() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }

  return (
   <ScrollView style={styles.container}>
        <Text style={styles.txt}>Criação da Pagina em Processo</Text>
        <Text style={styles.txtSite}>Sé quiser saber sobre o Conteúdo, entre nesse site</Text>
        <Text style={styles.txtSite1}>www.todamateria.com.br</Text>
   </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'

  },

  txt:{
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10
  },
  txtSite:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  txtSite1:{
    fontSize: 25,
    fontWeight: 'bold',
    color:'#000fff'
  }
  
})