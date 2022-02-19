import React from "react";
import Text from "./Text";

function Copyright() {
  let today = new Date().toLocaleDateString("fa-IR");
  return (
    <Text align={"center"} bold color="primary" pt={24} pleft={10} fs={20}>
      {"آزادقلم"}
      {"\t"}
      {today.substring(0, 4)}
    </Text>
  );
}

export default Copyright;
