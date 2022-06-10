import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {

    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill])
        setNewSkill('')
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome, Cicero</Text>
                <TextInput
                    style={styles.input}
                    placeholder="New skill"
                    placeholderTextColor="#555"
                    onChangeText={setNewSkill}
                    value={newSkill}
                />

                <Button onPress={handleAddNewSkill} />

                <Text style={[styles.title, { marginVertical: 20 }]}>My skills</Text>

                {mySkills.map(skill =>
                    <SkillCard key={skill} skill={skill} />
                )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    }
})