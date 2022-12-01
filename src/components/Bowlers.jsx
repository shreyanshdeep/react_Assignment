import React from "react";
import {
  Heading,
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

function Bowlers(data) {
  const { team } = useStore();
  return (
    <Stack py={5} px={2}>
      <Text mx={3} fontWeight="bold" color="red">
        BOWLING
      </Text>

      <TableContainer
        //box shadow
        boxShadow="0 0 10px 0 rgba(0,0,0,0.2)"
        //border radius
        borderRadius="xl"
        bg="white"
      >
        <Table variant="simple">
          <Thead bg="gray.200">
            <Tr>
              <Th>BOWLER</Th>
              <Th isNumeric>O</Th>
              <Th isNumeric>M</Th>
              <Th isNumeric>R</Th>
              <Th isNumeric>W</Th>
              <Th isNumeric>Econ</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.data.innings[team].bowlers.map((bowler) => (
              <Tr key={bowler.name}>
                <Td>{bowler.name}</Td>
                <Td>{bowler.overs}</Td>
                <Td>{bowler.maidens}</Td>
                <Td>{bowler.runs_conceded}</Td>
                <Td>{bowler.wickets}</Td>
                <Td>{bowler.econ}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default Bowlers;
