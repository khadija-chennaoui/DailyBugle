import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, useTheme } from "react-native-paper"

type Props = {
    title: string
    image_url: string
    content: string
}
export default function Details(props: Props) {
    const theme = useTheme()
    return (
        <ScrollView>
            <Text
                style={{ color: "black", marginVertical: 10, marginHorizontal: 10 }}
                variant="headlineMedium">
                {props.title}
            </Text>
            <Card style={{ backgroundColor: '#EBE1E4', marginTop: 10, marginHorizontal: 2 }}
                contentStyle={{ width: Dimensions.get("window").width }}>
                {props.image_url && (<Card.Cover source={{ uri: props.image_url }} style={{ marginHorizontal: 10, borderColor:'#604859'}}></Card.Cover>)}
                <Card.Content>
                    <Text
                        textBreakStrategy='highQuality'
                        variant='headlineSmall'
                        style={{ textAlign: "left", marginVertical: 10 }}
                    >
                        {props.content}
                    </Text>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})