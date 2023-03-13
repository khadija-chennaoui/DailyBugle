import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NewsData } from '../utils/types'
import { Card, useTheme } from 'react-native-paper'
export default function Cards(props: NewsData) {
    const theme = useTheme()
    console.log(props.image_url)
    return (
        <Pressable>
            <Card style={{
                marginVertical: 10,
                backgroundColor: theme.colors.elevation.level5
            }}
            >
                <Card.Cover borderRadius={10} source={{ uri: props.image_url }} />
                <Card.Title title={props.title} subtitle={props.description.split("\n")[0]} titleNumberOfLines={1}></Card.Title>
            </Card>
        </Pressable>
    )
}
const styles = StyleSheet.create({})   