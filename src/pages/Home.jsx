import { Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import Bowlers from "../components/Bowlers";

import Extras from "../components/Extras";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Scores from "../components/Scores";
import TableScore from "../components/Table";
import TableMenu from "../components/TableMenu";
import YetToBat from "../components/YetToBat";

function Home() {
  const [data, setData] = React.useState(null);

  const fetchedData = async () => {
    const res = await axios.get(
      "https://production-rest-microservice.thesportstak.com//api/v2/cricket/getScoreCard/56622"
    );
    setData(res.data.data);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <Stack>
      {/* <Header data={data} /> */}
      {data && (
        <Stack bg="gray.100">
          <HeroSection data={data} />
          <TableMenu data={data} />
          <Scores data={data} />
          <TableScore data={data} />
          <Extras data={data} />
          <YetToBat data={data} />
          <Bowlers data={data} />
        </Stack>
      )}
    </Stack>
  );
}

export default Home;
