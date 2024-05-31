import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// telas do aplicativo
import HomeScreen from '../pages/HomeScreen'
import PtScreen from '../pages/PtScreen'
import MtScreen from '../pages/MtScreen'
import QuiScreen from '../pages/QuiScreen'
import BioScreen from '../pages/BioScreen'
import SociScreen from '../pages/SociScreen'
import HiScreen from '../pages/HiScreen'
import FisiScreen from '../pages/FisiScreen'
import IngScreen from '../pages/IngScreen'
import EspScreen from '../pages/EspScreen'
import GeoScreen from '../pages/GeoScreen'
import FiloScreen from '../pages/FiloScreen'
import RedScreen from '../pages/RedScreen'
import PagProcess from '../pages/PagProcess'

const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: 'ESTUDAMAIS',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#007813',
          height: 90
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 38,
          fontWeight: 'bold'
        }
      }}/>
      
      <MainStack.Screen name='Portugues' component={PtScreen} options={
        ({route})=>({
          title: 'Português-1°Ano',
          headerStyle: {
          backgroundColor: '#007813',
          height: 90,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',         
        },
          
        })
      }/>

      <MainStack.Screen name='Matematica' component={MtScreen} options={
        ({route})=>({
          title: 'Matemática',
          headerStyle: {
          backgroundColor: '#007813',
          height: 90,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',         
        },
          
        })
      }/>

       <MainStack.Screen name='Quimica' component={QuiScreen} options={
        ({route})=>({
          title: 'Química',
          headerStyle: {
          backgroundColor: '#007813',
          height: 90,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',         
        },
        })
      }/>

       <MainStack.Screen name='Biologia' component={BioScreen} options={
        ({route})=>({
          title: 'Biologia',
          headerStyle: {
          backgroundColor: '#007813',
          height: 90,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',         
        },
        })
      }/>

      <MainStack.Screen name='Sociologia' component={SociScreen} options={
        ({route})=>({
          title: 'Sociologia',
          headerStyle: {
          backgroundColor: '#007813',
          height: 90,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',         
        },
        })
      }/>

      <MainStack.Screen name='Historia' component={HiScreen} options={
        ({route})=>({
          title: 'História',
          headerStyle: {
          backgroundColor: '#007813',
          height: 90,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',         
        },
        })
      }/>

      <MainStack.Screen name='Fisica' component={FisiScreen} options={
        ({route})=>({
          title: 'Física',
          headerStyle: {
          backgroundColor: '#007813',
          height: 90,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',         
        },
        })
      }/>

      <MainStack.Screen name='Ingles' component={IngScreen} options={
        ({route})=>({
          title: 'Inglês',
          headerStyle: {
          backgroundColor: '#007813',
          height: 90,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',         
        },
        })
      }/><MainStack.Screen name='Espanhol' component={EspScreen} options={
        ({route})=>({
          title: 'Espanhol',
          headerStyle: {
          backgroundColor: '#007813',
          height: 90,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',         
        },
        })
      }/>

      <MainStack.Screen name='Geografia' component={GeoScreen} options={
        ({route})=>({
          title: 'Geografia',
          headerStyle: {
          backgroundColor: '#007813',
          height: 90,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',         
        },
        })
      }/>

      <MainStack.Screen name='Filosofia' component={FiloScreen} options={
        ({route})=>({
          title: 'Filosofia',
          headerStyle: {
          backgroundColor: '#007813',
          height: 90,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',         
        },
        })
      }/>

      <MainStack.Screen name='Redacao' component={RedScreen} options={
        ({route})=>({
          title: 'Redação',
          headerStyle: {
          backgroundColor: '#fffd85',
          height: 90,
        },
        headerTitleStyle: {
          color: '#ff6257',
          fontSize: 28,
          fontWeight: 'bold',         
        },
        })
      }/>

      <MainStack.Screen name='PagProcess' component={PagProcess} options={
        ({route})=>({
          title: 'ANALIZANDO',
          headerStyle: {
          backgroundColor: 'grey',
          height: 90,
        },
        headerTitleStyle: {
          color: 'red',
          fontSize: 28,
          fontWeight: 'bold',         
        },
        })
      }/>
    </MainStack.Navigator>
  )
}