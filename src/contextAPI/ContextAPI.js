import React from 'react';

/* 
    We can specify a default value to our contextAPI as argument to
    the createContext function in case we dont't provide one when using it.
    We pass default values mostly for IDE autocompletion suggestions.
*/
const context = React.createContext({ isAuthenticated: false, loginLogout: () => {} });

export default context;