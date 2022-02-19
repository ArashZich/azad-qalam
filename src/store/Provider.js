import React, { createContext, useReducer, useEffect } from "react";
import { getAllFonts } from "../api";

const AppContext = createContext();
const initialState = {
  listFonts: [],
  fontStyles: {},
  fontSelect: "",
  tagCopy: "",
  families: [""],
};

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
});

function AppProvider({ children }) {
  const [states, dispatch] = useReducer(reducer, initialState);

  const setContext = (name, e) => {
    dispatch({ [name]: e });
  };

  const getListFonts = () => {
    getAllFonts()
      .then((res) => {
        let arr = res?.data?.fonts_available;
        let arr2 = arr?.map((item) => ({
          value: item.label,
          label: item.label,
          families: item.families,
        }));
        setContext("listFonts", arr2);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getListFonts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        states,
        setContext,
        getListFonts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
