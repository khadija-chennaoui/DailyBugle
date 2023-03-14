import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { componentNavigationProps } from '../utils/types'
import Details from '../components/Details';

const NewsOverview = (props: componentNavigationProps) => {
  const { title, content, image_url, description } = props?.route?.params;
  return <Details content={content} image_url={image_url} title={title} description={description} />
}

export default NewsOverview

const styles = StyleSheet.create({})