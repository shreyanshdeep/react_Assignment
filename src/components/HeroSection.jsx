import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./style.css";

function HeroSection(data) {
  console.log(data);
  return (
    <Stack
      backgroundImage="cricket-bg.png"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      justify="center"
      py={3}
      align="center"
    >
      <Box>
        <Text fontWeight="bold">{data.data.matchData.title}</Text>
      </Box>
      <Box py={8} px={5} className="glass">
        <Text fontSize={15} pb={3}>
          {data.data.matchData.competition.title},{data.data.matchData.title},
          {data.data.matchData.subtitle}
        </Text>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" justify="space-between" align="center">
            <Image src={data.data.matchData?.teama?.logo_url} boxSize="50px" />
            <Text>
              {data.data.matchData?.teama?.scores} (
              {data.data.matchData?.teama?.overs})
            </Text>
          </Stack>
          <Stack direction="row" justify="space-between" align="center">
            <Image src={data.data.matchData?.teamb?.logo_url} boxSize="50px" />
            <Text>
              {data.data.matchData?.teamb?.scores} (
              {data.data.matchData?.teamb?.overs})
            </Text>
          </Stack>
          <Text>{data.data.matchData.status_note}</Text>
        </Stack>
      </Box>
    </Stack>
  );
}

export default HeroSection;
