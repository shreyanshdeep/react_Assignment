import React from "react";
import {
  Box,
  Heading,
  Image,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import useStore from "../store";
function YetToBat(data) {
  const { team } = useStore();
  return (
    <Stack>
      <Text px={4} fontWeight="bold" color="red">
        YET TO BAT
      </Text>
      <Stack direction="row" px={5}>
        {data.data.innings[team].did_not_bat.slice(0, 4).map((batsman) => (
          <Stack key={batsman.name} spacing={3} direction="row">
            <Stack align="center">
              <Image
                src={batsman.player_img}
                alt={batsman.name}
                boxSize="50px"
              />

              <Text fontWeight="black" fontSize={15}>
                {batsman.name}
              </Text>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default YetToBat;
