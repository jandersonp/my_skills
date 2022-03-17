import React from 'react'

import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function SkillCard({ skill }) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      activeOpacity={0.7}
    >
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

export { SkillCard }

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10
  },
  textSkill: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 22
  }
})
