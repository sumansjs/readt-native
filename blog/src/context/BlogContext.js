import React, { useReducer } from 'react';

/*
  Context provides a way to pass data through the component tree without having to pass
  props down manually at every level.
*/
const BlogContext = React.createContext();

// Reducer function
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  /*
    Instead of having seperate function for each operation we'd want to take on blog,
    useReducer is an alternative to useState. It returns the current state with dispatch method.
    Syntax is as -
    const [state, dispatch] = userReducer(reducer, initialArg, init)
  */
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'ADD_BLOGPOST' });
  };

  /*
    Every context object comes with a Provider component, that accepts a value prop to be passed to
    consuming components that are descendants of this provider. One provider may be connected to many
    consumers. Providers can be nested to override values deeper within the tree.
  */
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
