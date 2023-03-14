import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appbar } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import { componentNavigationProps, NewsData } from '../utils/types'
import Cards from '../components/Card'
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@NewsData')
    if (value !== null) {
      return JSON.parse(value)
    }
  } catch (e) {
    alert('Wrong')
    return
  }
}

const Saved = (props: componentNavigationProps) => {
  const focused = useIsFocused()
  const [saveNews, setSaveNews] = useState([])
  useEffect(() => {
    getData()
      .then((data) => setSaveNews(data))
      .catch(() => alert("Error"))
  }, [focused])
  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.Content title="Saved"></Appbar.Content>
      </Appbar.Header>
      {saveNews &&
        saveNews.length > 0 &&
        saveNews.map((data: NewsData) => (
          <Cards content={data.content} image_url={data.image_url} description={data.description || ""} navigation={props.navigation} title={data.title} key={data.title} />
        ))}
    </ScrollView>
  )
}

export default Saved

const styles = StyleSheet.create({})