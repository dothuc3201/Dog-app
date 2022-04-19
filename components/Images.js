import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet,View, Text, Image, } from 'react-native';
import {useDispatch} from 'react-redux';
import { addFavorite, deleteFavorite} from '../redux/actions';

function Images (props) {
  // const dispatch = useDispatch();
  // const [like, setLike] = useState(true);
  //  const handleFavorite = (data) =>{
  //    if(like){
  //     dispatch(addFavorite(data));
  //    }else{
  //      dispatch(deleteFavorite(data));
  //    }
  //    {console.log(like)}
  //    setLike(!like);
  // }
    return(
    <View >
        <Image style={{
            width: 290,
            height:240
          }} source={{uri:props.image}}
        />
        {/* <Text style={styles.textTitle} onPress={() =>handleFavorite({image: props.image, like})}>Like</Text> */}
        
    </View>
    )
}

export default Images;

const styles = StyleSheet.create({

    textTitle: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
    
  });