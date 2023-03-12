//@ts-nocheck
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Chip, Button, useTheme } from 'react-native-paper';
const categorie = ["Science", "Sports", "Technology", "Food", "Word"]
import { NewsData } from '../utils/types';
import Card from '../components/Card';
// https://newsdata.io/api/1/news?apikey=pub_186538ade6bddbb18171ddac4badae85139f3&language=fr&category=food,science,sports,technology,world 
const API = "pub_186538ade6bddbb18171ddac4badae85139f3"
const Home = () => {
  const [newsData, setNewsData] = useState<NewsData[]>([])
  const [selectedCat, setSelectedCat] = useState([])
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
      }`
    try {
      await fetch(URL)
        .then((res) => res.json())
        .then((data) => setNewsData(data.results || {}))
    } catch (err) {
      console.log(err)
    }
  }
  // console.log(Object.keys(newsData[0]))
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home"></Appbar.Content>
      </Appbar.Header>
      <View style={styles.filter}>
        {categorie.map((e) =>
          <Chip key={e}
            mode="outlined" style={styles.chipe}
            textStyle={{ fontWeight: "400", color: "white", padding: 1 }}
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
          labelStyle={{ fontSize: 14, margin: "auto" }}
          icon={"sync"}
          onPress={handlePress}>
          Refrech
        </Button>
      </View>
      <FlatList
        style={styles.FlatList}
        data={newsData}
        renderItem={({ item }) =>
        <Card
          category={item.category}
          content={item.content}
          country={item.country}
          creator={item.creator}
          description={item.description}
          image_url={item.image_url}
          keywords={item.keywords}
          language={item.language}
          link={item.link}
          pubDate={item.pubDate}
          source_id={item.source_id}
          title={item.title}
          video_url={item.video_url}
        />
      } />
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  chipe: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  button: {
    maxWidth: 400,
    padding: 0,
    maxHeight: 40,
  },
  FlatList: {
    flex: 1,
    height : "auto",

  }

})