import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet,View, Text,Image } from 'react-native';
import GetList from '../services/getList';

import Breed from './Breed';
function ListBreed ()  {
    const [listBreed, setListBreed] = useState([])
    
    useEffect(() => {
        GetList()
        .then((res) =>{
            for (const key in res.message) {
                    setListBreed(preState => [...preState, key])
                }
            }
        );
    }, []);
    
    return(
        <View >
            {listBreed.map((breed, index)=> <Breed name={breed} key={index}></Breed>)}
        </View>
    )
}

export default ListBreed;