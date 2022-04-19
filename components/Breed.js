import React ,{ useState, useEffect }from 'react';
import { render } from 'react-dom';
import { StyleSheet,View, Text, Image, } from 'react-native';
import GetBreed from '../services/getBreed';
import Images from './Images';

function Breed (props) {
  const [listImage, setListImage] = useState([])
    
  useEffect(() => {
      GetBreed(props.name)
      .then((res) =>{
        setListImage([...res]);
      })
  }, []);
    return(
      <View style={styles.container}>
        <View style={styles.containerCenter}>
          <Text style={styles.textTitle}  onPress={() => props.navigation.navigate('Details',{
            name: props.name,
            listImage
          })}>{props.name}</Text>
        </View> 
        <View >
          <Images breed={props.name} image={listImage[0] } >
          </Images>
        </View>
      </View>
    )
}

export default Breed;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      width: '100%',
      height:300,
      marginVertical: 5,
    },
    containerCenter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,      
    },
    
    textTitle: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
    
  });