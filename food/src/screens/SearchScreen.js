import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import zomato from '../api/zomato';

const SearchScreen = () => {
  // useEffect is a hook or function that allows to run some piece of code just one time
  // when our component is first rendered to screen

  // useEffect's Second Argument
  // useEffect(() => {})           -> Run the arrow function every time the component is rendered
  // useEffect(() => {}, [])       -> Run the arrow function only when the component is first rendered
  // useEffect(() => {}, [value])  -> Run the arrow function only when the component is first rendered
  //                                 and when the value changes

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('Hi there');
    try {
      const response = await zomato.get('/search', {
        params: {
          entity_id: 5,
          entity_type: 'city',
          q: searchTerm,
        },
      });
      setResults(response.data.restaurants);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  // call searchApi when component is first rendered
  // BAD CODE!
  // searchApi('pasta');
  // RIGHT WAY!
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
