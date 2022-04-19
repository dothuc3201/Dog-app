import React, { useState, useEffect } from 'react';
import { Button, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import Images from '../components/Images';
import {useDispatch} from 'react-redux';
import { addFavorite, deleteFavorite} from '../redux/actions';

function DetailsScreen({route}) {
  const dispatch = useDispatch();
  const {name, listImage} = route.params;

  const handleFavorite = (data) =>{

      dispatch(addFavorite(data));
  }
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>        
          {listImage.map((image, index) => (
            <View  key={index} style={styles.containerCenter}>
              <Images breed={name} image={image}></Images>
             <Text style={styles.textTitle} onPress={() =>handleFavorite(image)}>Lưu</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  scrollView: {
    backgroundColor: '#000',
    marginHorizontal: 20,
  },
  textTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  containerCenter:{
    paddingVertical: 15
  }
}
)