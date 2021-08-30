import React, { useState } from 'react';

/*
  Context provides a way to pass data through the component tree without having to pass
  props down manually at every level.
*/
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
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
