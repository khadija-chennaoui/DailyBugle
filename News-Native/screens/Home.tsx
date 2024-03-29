//@ts-nocheck

import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Chip, Button, useTheme } from 'react-native-paper';
import { componentNavigationProps, NewsData } from '../utils/types';
import Card from '../components/Card';
const categorie = ["Science", "Sports", "Technology", "Food", "Word", "Top"]
const API = "pub_186538ade6bddbb18171ddac4badae85139f3"
const Home = (props: componentNavigationProps) => {
  const [newsData, setNewsData] = useState<NewsData[]>([])
  const [selectedCat, setSelectedCat] = useState([])
  const [details, setDetails] = useState("")

  const theme = useTheme()
  const handleSelect = (val: string) => {
    setSelectedCat((prev: string[]) =>
      prev.find((p) => p === val)
        ? prev.filter((e) => e !== val)
        : [...prev, val]
    )
  }
  const handlePress = async () => {
    const URL = `https://newsdata.io/api/1/news?apikey=${API}&country=fr&language=fr${selectedCat.length > 0
      ? `&category=${selectedCat.join()}`
      : ""
      }${details?.length > 0 ? `&page=${details}` : ""}`
    try {
      await fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          setNewsData((prev) => [...prev, ...data.results])
          setDetails(data.details)
        })

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home"></Appbar.Content>
      </Appbar.Header>
      <View style={styles.filter}>
        {categorie.map((e) =>
          <Chip key={e}
            mode="outlined" style={styles.chipe}
            textStyle={{ fontWeight: "400", color: "#604859", padding: 1 }}
            showSelectedOverlay
            selected={selectedCat.find((c) => e === c) ? true : false}
            onPress={() => handleSelect(e)}
          >
            {e}
          </Chip>
        )}
        <Button
          mode="outlined"
          style={styles.button}
          labelStyle={{ fontSize: 14, margin: "auto", color: 'white' }}
          icon={"sync"}
          onPress={handlePress}>
          Refrech
        </Button>
      </View>
      <FlatList
        onEndReached={() => handlePress()}
        style={styles.FlatList}
        data={newsData}
        renderItem={({ item }) =>
          <Card
            navigation={props.navigation}
            title={item.title}
            content={item.content}
            image_url={item.image_url}
            category={item.category}
            description={item.description}
            image_url={item.image_url}
          />
        } />
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1F2'
  },
  filter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  chipe: {
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: "#F5F1F2",
    borderColor: '#604859'
  },
  button: {
    maxWidth: 400,
    padding: 0,
    maxHeight: 40,
    backgroundColor: "#604859",
  },
  FlatList: {
    flex: 1,
    height: "auto",
    backgroundColor: "#EBE1E4",
    marginHorizontal: 10
  }

})