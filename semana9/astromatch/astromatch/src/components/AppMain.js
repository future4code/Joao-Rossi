import React, { useState } from "react";
import styled from "styled-components";

import AppMenu from "./AppMenu";
import Profiles from "./PS_ProfileScreen";
import AllMatches from "./ML_MatchList";

const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  height: 800px;
  margin: 30px;
  display: flex;
  flex-direction: column;
`;

function AppMain() {
  const [currentPage, setCurrentPage] = useState("profiles");

  const renderSelectedPage = () => {
    switch (currentPage) {
      case "profiles":
        return <Profiles />;
      case "matches":
        return <AllMatches />;
      default:
        return <Profiles />;
    }
  };

  const goToProfiles = () => {
    setCurrentPage("profiles");
  };

  const goToMatches = () => {
    setCurrentPage("matches");
  };

  return (
    <MainContainer>
      <AppMenu
        goToProfiles={goToProfiles}
        goToMatches={goToMatches}
      />
      {renderSelectedPage()}
    </MainContainer>
  );
}

export default AppMain;