import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NewsData } from '../utils/types'

export default function Card(props: NewsData) {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})