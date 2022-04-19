import React from 'react';
import { render } from 'react-dom';
import { StyleSheet,View, Text,Image, ScrollView } from 'react-native';
import Breed from '../components/Breed';
function Search({route}) {
    
    const searchString = route.params.searchQuery;
    const listSearch = route.params.listBreed.filter(c => c.includes(searchString));
    return ( 
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}> 
            {listSearch.map((breed, index)=> <Breed name={breed} key={index} navigation ={route.params.navigation}></Breed>)}
        </View>
        </ScrollView>
     );
}

export default Search;

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#000',
      
      justifyContent: 'center',
      paddingHorizontal: 30,
      overflow: 'hidden',
      maxWidth: '100%',
    },
    // containerTitle: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   width: '100%',
    //   paddingVertical: 15,
    // },
    
   
    scrollView: {
      backgroundColor: '#000',
      marginHorizontal: 20,
    }
  });