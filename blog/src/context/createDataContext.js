import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  /*
    Context provides a way to pass data through the component tree without having to pass
    props down manually at every level.
  */
  const Context = React.createContext();

  const Provider = ({ children }) => {
    /*
      Instead of having seperate function for each operation we'd want to take on blog,
      useReducer is an alternative to useState. It returns the current state with dispatch method.
      Syntax is as -
      const [state, dispatch] = userReducer(reducer, initialArg, init)
    */
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions = {addBlogPost: (dispatch) => { return () => {} }}
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    /*
      Every context object comes with a Provider component, that accepts a value prop to be passed to
      consuming components that are descendants of this provider. One provider may be connected to many
      consumers. Providers can be nested to override values deeper within the tree.
    */
    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
