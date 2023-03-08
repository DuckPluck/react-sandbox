import React from 'react';


export const Context = React.createContext({
  isMemo: false,
  title: 'Context receiver',
  value: 'Do update',
  setValue: () => {},
});

