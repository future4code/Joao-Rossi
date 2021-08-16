import React, { useEffect, useState } from "react";
import axios from "axios";

import ChooseButtons from "./PS_Buttons";
import ProfileCard from "./PS_ProfileCard";

function Profiles() {
  const [profiles, setProfiles] = useState({});

  const getProfiles = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-filippe/person"
      )
      .then((res) => {
        setProfiles(res.data.profile);
      });
  };

  const chooseProfile = (choice) => {
   
  };

  useEffect(() => {
    getProfiles();
  }, []);

  const chooseNo = () => {
    const body = {
      id: profiles.id,
      choice: false
    };
    setProfiles(undefined);
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-filippe/choose-person",
        body
      )
      .then(( ) => {
        getProfiles();
      });
  };

  const chooseYes = () => {
    const body = {
      id: profiles.id,
      choice: true
    };
    setProfiles(undefined);
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-filippe/choose-person",
        body
      )
      .then(( ) => {
        getProfiles();
      });
  };

  return (
    <div>
      {profiles ? (
        <>
          <ProfileCard profile={profiles} />
          <ChooseButtons onClickNo={chooseNo} onClickYes={chooseYes} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Profiles;