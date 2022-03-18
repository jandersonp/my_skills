import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Platform
} from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface SkillData {
  id: string;
  name: string;
}

function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills([...mySkills, data])
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Bom Dia!')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde!')
    } else {
      setGreeting('Boa Noite!')
    }
  }, [])

  return (
    <>
      <View style={styles.container}>


        <Text style={styles.title}>Bem-vindo, Janderson!</Text>
        <Text style={styles.greetings}>{greeting}</Text>

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


        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <SkillCard skill={item.name} />}
        />

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
  greetings: {
    color: '#FFF'
  }
})

export { Home }