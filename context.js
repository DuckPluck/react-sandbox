import React from 'react';


export const Context = React.createContext({
  text: 'Context has been received',
  value: 'Do update',
  setValue: () => {},
});

