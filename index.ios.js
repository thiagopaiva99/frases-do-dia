import React from 'react'
import { Text, AppRegistry, View, TouchableOpacity, StatusBar, Image, Alert } from 'react-native'

const primaryColor = '#538530'

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  colorTextStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
}

const generateNewPhrase = () => {
  const phrases = [
    'Enfrente os problemas e leve a melhor!',
    'Dê mais atenção ao que você tem de bom na sua vida',
    'Para chegar ao topo, o que importa é começar!',
    'De nada adianta ter sonhos, se você não se empenhar em correr atrás',
    'Não deixe nada nem ninguém estragar o seu bom humor',
    'Ontem já passou, é hora de planejar o futuro',
    'Você pode não ter o melhor do mundo, mas tem muito pelo que agradecer!',
    'Não deixe sua felicidade nas mãos de ninguém!',
    'Nunca é tarde para fazer o que você realmente quer fazer',
    'Mais palavras para quê?',
    'Nunca duvide que você é especial!',
    'Tenha um objetivo na vida e lute sempre para alcançá-lo!'
  ]

  const number = Math.floor(Math.random() * phrases.length)

  Alert.alert( phrases[ number ] )
}

const App = () => {
  return (
    <View style={ styles.viewStyle }>
      <StatusBar
       backgroundColor={ primaryColor }
       barStyle="light-content" />

      <Image source={ require('./images/logo.png') } />

      <TouchableOpacity
        style={ styles.buttonStyle }
        onPress={ generateNewPhrase } >
        <Text style={ styles.colorTextStyle }>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  )
}

AppRegistry.registerComponent('frasesDoDia', () => App)
