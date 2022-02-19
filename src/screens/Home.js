import React, { useEffect, useContext } from "react";
import { Footer, Header, Layout, MainSection } from "../layouts";
import { AppContext } from "../store";
import { CopyGrid, Menu, Lorem } from "../components";
import { getFont, baseUrl } from "../api";
import { createGlobalStyle } from "styled-components";

import _ from "lodash";

let FontThem = createGlobalStyle`
  
`;

function Home() {
  const { states, setContext } = useContext(AppContext);
  const { listFonts, fontSelect, tagCopy, families } = states;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFontApi = (name) => {
    getFont(name)
      .then((res) => {
        setContext("tagCopy", `${baseUrl}/fonts?font=${name}`);
        console.log(`${baseUrl}/fonts?font=${name}`, "AHHH", res.data);
        FontThem = createGlobalStyle`
        @import url(${baseUrl}/fonts?font=${name});
        body{
          ${res.data}
        }
          
        `;
        // const fontObj = {
        //   typography: {
        //     fontFamily: families.join(","),
        //   },
        //   components: {
        //     MuiCssBaseline: {
        //       styleOverrides: res.data,
        //     },
        //   },
        // };
        // let arr = {
        //   ...theme,
        //   ...fontObj,
        // };
        // setContext("fontStyles", arr);
        // setContext("tagCopy", `${baseUrl}/fonts?font=${name}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <Layout>
        <Header />
        <MainSection>
          <FontThem />
          <Menu
            selectList={listFonts}
            setValue={(item, name) => {
              console.log(item);
              setContext("families", item);
              getFontApi(name);
            }}
          />
          {_.isEmpty(tagCopy) ? null : (
            <CopyGrid
              link={`<link rel="stylesheet" type="text/css" href="${tagCopy}" />`}
            />
          )}
          <Lorem list={families} />
        </MainSection>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
