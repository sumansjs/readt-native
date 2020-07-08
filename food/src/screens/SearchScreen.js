import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import zomato from '../api/zomato';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await zomato.get('/search', {
        params: {
          entity_id: 5,
          entity_type: 'city',
          q: term,
        },
      });
      setResults(response.data.restaurants);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
