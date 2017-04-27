import React from 'react';
import {Text, Image, View, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) =>{
  const{title, artist,thumbnail_image,image,url} = album;
  const {
    thumbnailStyle,
    headContentStyle,
    thumbnailContainerStyle,
    headTextStyle,imageStyle
  } = styles;
  return(
    <Card>
      <CardSection>
        <View style = {thumbnailContainerStyle}>
          <Image style = {thumbnailStyle} source = {{uri: thumbnail_image}}/>
        </View>
        <View style = {headContentStyle}>
          <Text style = {headTextStyle}>{title}</Text>
          <Text >{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
          <Image style = {imageStyle} source = {{uri: image}}/>
      </CardSection>
      <CardSection>
        <Button onPress = {() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailStyle:{
    height:50,
    width:50
  },
  headContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around'

  },
  headTextStyle:{
    fontSize:18
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    marginLeft:5,
    marginRight:5,
    alignItems:'center'
  },
  imageStyle:{
    height:300,
    width:null,
    flex:1
  }
};

export default AlbumDetail;
