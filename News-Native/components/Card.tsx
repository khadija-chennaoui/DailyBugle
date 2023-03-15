import { Pressable, ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { NavigationProp, Route } from '@react-navigation/native'
type Props = {
    title: string
    image_url: string
    description: string
    content: string
    navigation: NavigationProp<Route>
}
export default function Cards(props: Props) {
    const handlePress = () => {
        props.navigation.navigate("NewsOverview", {
            title: props.title,
            description: props.description,
            image_url: props.image_url,
            content: props.content
        })
    }

    return (
        <ScrollView>
            <Pressable onPress={handlePress}>
                <Card style={{
                    marginVertical: 10,
                    backgroundColor: "white"
                }}
                >
                    <Card.Cover borderRadius={10} source={{ uri: props.image_url }} />
                    <Card.Title titleStyle={styles.titleStyle} title={props.title} titleNumberOfLines={1}></Card.Title>
                </Card>
            </Pressable>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#604859',
    },
})   