import React, {  createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const InstallContext = createContext()

const AppContext = ({children}) => {
  const [Install , setInstall] = useState([]);
  
 
  const handelInstall = (expectedData) => {
     const IsExist = Install.find(app => app.id === expectedData.id)
     if(IsExist){
      toast.error("App Already Exist")
      return;
     }else{
      toast.success("App Install Successful")
      setInstall([...Install, expectedData])
     }
    
  }

  const data = {
    Install,
    setInstall,
    handelInstall
  }
  return (
   <InstallContext.Provider value= {data}>
    {children}
   </InstallContext.Provider>
  );
};

export default AppContext;