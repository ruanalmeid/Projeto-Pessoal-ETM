import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()

  const [name, setName] = useState('')

  const handleAboutClick = () => {
    navigation.navigate('Portugues')
  }

  const handleMatClick = () => {
    navigation.navigate('Matematica')
  }

  const handleQuiClick = () => {
    navigation.navigate('Quimica')
  }

  const handleBioClick = () => {
    navigation.navigate('Biologia')
  }

  const handleSociClick = () => {
    navigation.navigate('Sociologia')
  }

  const handleHiClick = () => {
    navigation.navigate('Historia')
  }

  const handleFisClick = () => {
    navigation.navigate('Fisica')
  }

  const handleIngClick = () => {
    navigation.navigate('Ingles')
  }

  const handleEspClick = () => {
    navigation.navigate('Espanhol')
  }

  const handleGeoClick = () => {
    navigation.navigate('Geografia')
  }

  const handleFiloClick = () => {
    navigation.navigate('Filosofia')
  }

  const handleRedClick = () => {
    navigation.navigate('Redacao')
  }


  return (
    <ScrollView>
        <TouchableOpacity style={styles.botao} onPress={handleAboutClick}>
          <View>
            <Text style={styles.pt}>Português</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleMatClick}>
          <View>
            <Text style={styles.pt}>Matemática</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleQuiClick}>
          <View>
            <Text style={styles.pt}>Química</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleBioClick}>
          <View>
            <Text style={styles.pt}>Biologia</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleSociClick}>
          <View>
            <Text style={styles.pt}>Sociologia</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleHiClick}>
          <View>
            <Text style={styles.pt}>História</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleFisClick}>
          <View>
            <Text style={styles.pt}>Física</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleIngClick}>
          <View>
            <Text style={styles.pt}>Inglês</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleEspClick}>
          <View>
            <Text style={styles.pt}>Espanhol</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleGeoClick}>
          <View>
            <Text style={styles.pt}>Geografia</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleFiloClick}>
          <View>
            <Text style={styles.pt}>Filosofia</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoRed} onPress={handleRedClick}>
          <View>
            <Text style={styles.ptRed}>Redação</Text>
          </View>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  botao:{
    backgroundColor: '#D0FFE3',
    fontWeight: '700',
    marginTop: 20,
    marginRight: 40,
    borderTopRightRadius: 10,
    borderEndEndRadius: 10,
    paddingBottom:10
  },
  pt:{
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10
  },
  botaoRed:{
    backgroundColor: '#fffd85',
    fontWeight: '700',
    marginTop: 20,
    marginRight: 40,
    borderTopRightRadius: 10,
    borderEndEndRadius: 10,
    paddingBottom:10,
    marginBottom: 20
  },
  ptRed:{
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#ff6257'
  }
})