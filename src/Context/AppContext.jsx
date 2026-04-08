import React, {  createContext, useState } from 'react';

const InstallContext = createContext()

const AppContext = ({children}) => {
  const [Install , setInstall] = useState([]);

  const data = {
    Install,
    setInstall
  }
  return (
   <AppContext.Provider value= {data}>
    {children}
   </AppContext.Provider>
  );
};

export default AppContext;