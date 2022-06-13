import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {

    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])
    const [greetings, setGreetings] = useState('')

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill])
        setNewSkill('')
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreetings('Good morning')
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreetings('Good afternoon')
        } else {
            setGreetings('Good night')
        }

    }, [])

    return (
        <>
            <View style={styles.container}>

                <Text style={styles.title}>{greetings}, Cicero</Text>
                <TextInput
                    style={styles.input}
                    placeholder="New skill"
                    placeholderTextColor="#555"
                    onChangeText={setNewSkill}
                    value={newSkill}
                />

                <Button
                    onPress={handleAddNewSkill}
                    newSkill={newSkill}
                />

                <Text style={[styles.title, { marginVertical: 20 }]}>My skills</Text>

                <FlatList
                    data={mySkills}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <SkillCard skill={item} />
                    )}
                />
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