import React, { createContext, useReducer, useEffect } from "react";
import { getAllFonts } from "../api";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AppContext = createContext();
const initialState = {
  listFonts: [],
  fontStyles: {},
  tagCopy: "",
  families: [""],
  fontWeight: 400,
  fontSize: 20,
  textValue: "",
};

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
});
const helmetContext = {};
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        states,
        setContext,
        getListFonts,
      }}
    >
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <link rel="stylesheet" type="text/css" href={states.tagCopy} />
        </Helmet>
      </HelmetProvider>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
