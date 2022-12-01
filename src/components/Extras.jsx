import React from "react";
import {
  Box,
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

function Extras(data) {
  const { team } = useStore();
  return (
    <Box py={5} px={2}>
      <TableContainer bg="white">
        <Table variant="simple">
          <Thead bg="gray.200">
            <Tr>
              <Th>EXTRAS</Th>
              <Th isNumeric>B</Th>
              <Th isNumeric>W</Th>
              <Th isNumeric>NB</Th>
              <Th isNumeric>LB</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{data.data.innings[team].extra_runs.total}</Td>
              <Td>{data.data.innings[team].extra_runs.byes}</Td>
              <Td>{data.data.innings[team].extra_runs.wides}</Td>
              <Td>{data.data.innings[team].extra_runs.legbyes}</Td>
              <Td>{data.data.innings[team].extra_runs.noballs}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Extras;
