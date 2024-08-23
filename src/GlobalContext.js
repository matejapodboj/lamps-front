import React, { useState, useContext, useEffect } from "react";

export const AppContext = React.createContext({});


export function GlobalContextProvider({ children }) {


  const [products, setProducts] = useState()
  const [cart, setCart] = useState([])

  return (
    <AppContext.Provider
      value={{
        cart: [cart, setCart],
        products: [products, setProducts]
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
