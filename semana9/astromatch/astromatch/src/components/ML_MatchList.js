import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import MatchListItem from "./ML_Match";

const ListContainer = styled.div`
  padding: 8px;
`;

function AllMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-filippe/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      });
  }, []);

  return (
    <ListContainer>
      {matches.map((profile) => {
        return <MatchListItem profile={matches} />;
      })}
    </ListContainer>
  );
}

export default AllMatches;