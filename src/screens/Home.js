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
  Input,
} from "../components";
import { pixelMenu } from "../config";
import { getFont, baseUrl } from "../api";
import { Grid } from "../styles";
import _ from "lodash";

function Home() {
  const [active, setActive] = useState(false);
  const { states, setContext } = useContext(AppContext);
  const { listFonts, tagCopy, families, textValue } = states;

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

          <Grid>
            <Slider onSetValue={(value) => setContext("fontSize", value)} />
            <DropDownMenu
              title="وزن فونت"
              list={pixelMenu}
              onClick={(item) => setContext("fontWeight", item.value)}
            />
          </Grid>
          <Input
            onChange={(e) => setContext("textValue", e.target.value)}
            value={textValue}
          />
          <Lorem list={families} />
        </MainSection>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
