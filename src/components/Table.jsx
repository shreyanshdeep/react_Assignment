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
import React from "react";
import useStore from "../store";

function TableScore(data) {
  const { team } = useStore();

  return (
    <Stack py={5} px={2}>
      <Text mx={3} fontWeight="bold" color="red">
        BATTING
      </Text>
      <Stack>
        <TableContainer
          //box shadow
          boxShadow="0 0 10px 0 rgba(0,0,0,0.2)"
          //border radius
          borderRadius="xl"
          bg="white"
        >
          <Table variant="simple" size="sm">
            <Thead bg="gray.200">
              <Tr>
                <Th>BATSMAN</Th>
                <Th p={2.5} m={1} isNumeric>
                  R
                </Th>
                <Th p={2.5} m={1} isNumeric>
                  B
                </Th>
                <Th p={2.5} m={1} isNumeric>
                  4R
                </Th>
                <Th p={2.5} m={1} isNumeric>
                  6S
                </Th>
                <Th p={2.5} m={1} isNumeric>
                  SR
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.data.innings[team].batsmen.map((batsman) => (
                <Tr key={batsman.name}>
                  <Td>
                    <Stack>
                      <Text fontWeight="black">{batsman.name}</Text>
                      <Text fontSize="10px">{batsman.how_out}</Text>
                    </Stack>
                  </Td>
                  <Td p={0} m={0}>
                    {batsman.runs}
                  </Td>
                  <Td p={0} m={0}>
                    {batsman.balls_faced}
                  </Td>
                  <Td p={0} m={0}>
                    {batsman.fours}
                  </Td>
                  <Td p={0} m={0}>
                    {batsman.sixes}
                  </Td>
                  <Td p={0} m={0}>
                    {batsman.strike_rate}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}

export default TableScore;
