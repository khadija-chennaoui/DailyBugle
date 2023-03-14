import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, useTheme } from "react-native-paper"

type Props = {
    title: string
    image_url: string
    description: string
    content: string
}
export default function Details(props: Props) {
    const theme = useTheme()
    return (
        <ScrollView>
            <Text
                style={{ color: "black", marginVertical: 10 }}
                variant="headlineMedium">
                {props.title}
            </Text>
            <Card style={{ backgroundColor: theme.colors.background }}
                contentStyle={{ width: Dimensions.get("window").width }}>
                {props.image_url && (<Card.Cover source={{ uri: props.image_url }}></Card.Cover>)}
                <Card.Content>
                    <Text
                        textBreakStrategy='highQuality'
                        variant='headlineSmall'
                        style={{ textAlign: "left", marginVertical: 10 }}
                    >
                        {props.content}
                        {/* {props.content.length === 0 ? "No Content here" : props.content} */}
                    </Text>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})