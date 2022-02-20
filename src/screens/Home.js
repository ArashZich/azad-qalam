import React, { useEffect, useContext, useState } from "react";
import { Footer, Header, Layout, MainSection } from "../layouts";
import { AppContext } from "../store";
import {
  CopyLink,
  Lorem,
  Modal,
  GridItem,
  Slider,
  DropDownMenu,
} from "../components";
import { getFont, baseUrl } from "../api";

import _ from "lodash";

function Home() {
  const [active, setActive] = useState(false);
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
          <Modal
            title="انتخاب فونت"
            active={active}
            hideModal={() => setActive(false)}
            showModal={() => setActive(true)}
          >
            <GridItem
              list={listFonts}
              onClick={(item, name) => {
                setContext("families", item);
                getFontApi(name);
                setActive(false);
              }}
            />
          </Modal>

          {_.isEmpty(tagCopy) ? null : (
            <CopyLink
              link={`<link rel="stylesheet" type="text/css" href="${tagCopy}" />`}
            />
          )}
          <Slider />
          <DropDownMenu />
          <Lorem list={families} />
        </MainSection>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
