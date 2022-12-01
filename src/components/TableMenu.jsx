import { Button, Stack } from "@chakra-ui/react";
import React from "react";

function TableMenu() {
  return (
    <Stack direction="row">
      <Button variant="ghost">Squads</Button>
      <Button variant="ghost" borderBottom="4px" borderColor="red">
        ScoreCard
      </Button>
      <Button variant="ghost">Commentary</Button>
      <Button variant="ghost">Highlights</Button>
    </Stack>
  );
}

export default TableMenu;
