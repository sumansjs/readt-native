import { useState, useEffect } from 'react';
import zomato from '../api/zomato';
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
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

  // useEffect is a hook or function that allows to run some piece of code just one time
  // when our component is first rendered to screen

  // useEffect's Second Argument
  // useEffect(() => {})           -> Run the arrow function every time the component is rendered
  // useEffect(() => {}, [])       -> Run the arrow function only when the component is first rendered
  // useEffect(() => {}, [value])  -> Run the arrow function only when the component is first rendered
  //                                 and when the value changes

  // call searchApi when component is first rendered
  // BAD CODE!
  // searchApi('pasta');
  // RIGHT WAY!
  useEffect(() => {
    searchApi('chicken');
  }, []);

  return [results, errorMessage, searchApi];
};
