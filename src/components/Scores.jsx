import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import useStore from "../store";

function Scores(data) {
  const [active, setActive] = useState(false);
  const { setTeam } = useStore();
  return (
    <Stack direction="row" justify="center">
      <Stack
        direction="row"
        border={`2px solid ${active ? "green" : "red"}`}
        justify="center"
        align="center"
        borderRadius="2xl"
        px={4}
        py={4}
        onClick={() => {
          setActive(!active);
          setTeam(1);
        }}
      >
        <Image src={data.data.matchData?.teama?.logo_url} boxSize="40px" />
        <Stack>
          <Text>{data.data.innings[0].name}</Text>
          <Text fontWeight="bold">
            {data.data.matchData?.teama?.scores} (
            {data.data.matchData?.teama?.overs})
          </Text>
        </Stack>
      </Stack>
      <Stack
        border={`2px solid ${!active ? "green" : "red"}`}
        direction="row"
        py={4}
        borderRadius="2xl"
        justify="center"
        align="center"
        px={0.5}
        onClick={() => {
          setActive(active);
          setTeam(0);
        }}
      >
        <Image src={data.data.matchData?.teamb?.logo_url} boxSize="50px" />
        <Stack>
          <Text>{data.data.innings[1].name}</Text>
          <Text fontWeight="bold">
            {data.data.matchData?.teamb?.scores} (
            {data.data.matchData?.teamb?.overs})
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Scores;
