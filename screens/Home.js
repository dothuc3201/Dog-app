import * as React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import ListBreed from '../components/ListBreed';
import GetList from '../services/getList';

function HomeScreen({ navigation }) {
  const [listBreed, setListBreed] = React.useState([])
    
    React.useEffect(() => {
        GetList()
        .then((res) =>{
            for (const key in res.message) {
                    setListBreed(preState => [...preState, key])
                }
            }
        );
    }, []);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
    return(
    
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>  
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onSubmitEditing={() => navigation.navigate('Search', {searchQuery, listBreed, navigation})}
          />
          <ListBreed navigation = {navigation} listBreed={listBreed}></ListBreed>    
          <StatusBar style="light" />
        </View>
      </ScrollView>
    
    )
}

  export default HomeScreen;

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
      backgroundColor: 'pink',
      marginHorizontal: 20,
    }
  });