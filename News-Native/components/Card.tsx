import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NewsData } from '../utils/types'
import { Card, useTheme } from 'react-native-paper'

export default function Cards(props: NewsData) {
    const theme = useTheme()
    console.log(props.image_url)
    return (
        <ScrollView>
            <Pressable onPress={() => alert('Pressed')}>
                <Card style={{
                    marginVertical: 10,
                    backgroundColor: theme.colors.elevation.level5
                }}
                >
                    <Card.Cover borderRadius={10} source={{ uri: props.image_url }} />
                    <Card.Title titleStyle={styles.titleStyle} title={props.title} subtitle={props.description} titleNumberOfLines={1}></Card.Title>
                </Card>
            </Pressable>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 19,
        fontWeight: 'bold',
        // color: 'black',
    },
})   