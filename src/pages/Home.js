import React, { useState } from 'react'

import { View, Text, TextInput, StyleSheet } from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill])
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo, Janderson!</Text>

        <TextInput
          style={styles.input}
          placeholder="Nova Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>
          Minhas Skills:
        </Text>

        {
          mySkills.map(skill => (
            <SkillCard skill={skill}/>
          ))
        }

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
  }
})

export { Home }