import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet,View, Text,Image } from 'react-native';
import GetList from '../services/getList';

import Breed from './Breed';
function ListBreed (props)  {
    // const [listBreed, setListBreed] = useState([])
    
    // useEffect(() => {
    //     GetList()
    //     .then((res) =>{
    //         for (const key in res.message) {
    //                 setListBreed(preState => [...preState, key])
    //             }
    //         }
    //     );
    // }, []);
    
    return(
        <View style={styles.container}>
            {props.listBreed.map((breed, index)=> <Breed name={breed} key={index} navigation ={props.navigation}></Breed>)}
        </View>
    )
}

export default ListBreed;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      width: '100%',
      marginVertical: 5,
    }
});