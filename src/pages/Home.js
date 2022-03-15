import React from 'react'

import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo, Janderson!</Text>

        <TextInput
          style={styles.input}
          placeholder="Nova Skill"
          placeholderTextColor="#555"
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        
        <Text style={[styles.buttonText, { marginTop: 50}]}>Minhas Skills:</Text>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 18,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  }
})

export { Home }