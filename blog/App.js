import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BlogProvider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

/*
  We use here BlogProvider to pass the value to the root App Component.
  Any component can read it, no matter how deep it is.
*/
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
