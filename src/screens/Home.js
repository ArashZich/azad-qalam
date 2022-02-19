import React, { useEffect, useContext } from "react";
import { Footer, Header, Layout, MainSection } from "../layouts";
import { AppContext } from "../store";
import { CopyGrid, Menu, Lorem } from "../components";
import { getFont, baseUrl } from "../api";

import _ from "lodash";

function Home() {
  const { states, setContext } = useContext(AppContext);
  const { listFonts, tagCopy, families } = states;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFontApi = (name) => {
    getFont(name)
      .then((res) => {
        setContext("tagCopy", `${baseUrl}/fonts?font=${name}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <Layout>
        <Header />
        <MainSection>
          <Menu
            selectList={listFonts}
            setValue={(item, name) => {
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
