import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import Images from '../components/Images';
import {useDispatch, useSelector} from 'react-redux';
import { addFavorite, deleteFavorite } from '../redux/actions';

function FavoriteScreen(){
    const dispatch = useDispatch();
    const listFavorite = useSelector((state) => state);
    const handleFavorite = (data) =>{
        dispatch(deleteFavorite(data));   
        {console.log(listFavorite)}             
      }
    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>        
          {listFavorite.map((image, index) => (
            <View  key={index} style={styles.containerCenter}>
              <Images image={image}></Images>
              <Text style={styles.textTitle} onPress={() =>handleFavorite(image)}>Bỏ Lưu</Text>
              {console.log(listFavorite)}
            </View>
          ))}
        </View>
      </ScrollView>
    )
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      width: '100%',
        flex:1,
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