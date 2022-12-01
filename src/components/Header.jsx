import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Header(data) {
  console.log(data);
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Heading>{data.data.matchData?.teama?.scores}</Heading>
      <Image src={data.data.matchData?.teama?.logo_url} boxSize="50px" />
      <Heading>{data.data.matchData?.teamb?.scores}</Heading>
      <Image src={data.data.matchData?.teamb?.logo_url} boxSize="50px" />
    </Stack>
  );
}

export default Header;
