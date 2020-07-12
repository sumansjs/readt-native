import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, errorMessage, searchApi] = useResults();

  // Do grouping in search screen
  const filterResultsByPriceRange = (price_range) => {
    return results.filter((result) => result.restaurant.price_range === price_range);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPriceRange(2)} title="Cost Effective" />
      <ResultsList results={filterResultsByPriceRange(3)} title="Bit Pricier" />
      <ResultsList results={filterResultsByPriceRange(4)} title="Bit Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
