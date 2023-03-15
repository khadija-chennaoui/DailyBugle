import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { componentNavigationProps, NewsData } from '../utils/types'
import Details from '../components/Details';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const storeData = async (value: NewsData) => {
  const data: NewsData[] = (await getData()) || []
  !data.find((d) => d.title === value.title) ? data.push(value) : data
  try {
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem('@NewsData', jsonValue)
  } catch (e) {
    return alert('Wrong storing')
  }
}

const NewsOverview = (props: componentNavigationProps) => {
  const { title, content, image_url } = props?.route?.params as NewsData;
  props.navigation.setOptions({
    headerRight: () => (
      <Button style={{ backgroundColor: "#604859" }} onPress={() => storeData({ title, content, image_url })}>
        <Text style={{color: 'white'}}>Save</Text>
      </Button>
    )
  })
  return ( <Details title={title} content={content} image_url={image_url} /> )
}

export default NewsOverview

const styles = StyleSheet.create({})