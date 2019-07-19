import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PersonCard from "./PersonCard";

const FlexCenterDiv = styled.div`
  width: 98vw;
  height: 50vh;
  margin-left: 1vw;
  margin-right: 1vw;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FlexRow = styled.div`
  display: flex;
`;

const PersonGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then(response => {
      console.log(response);
      setData(response.data.results);
    });
  }, []);
  console.log("b", data);
  return (
    <FlexRow>
      <FlexCenterDiv>
        {data.map(character => (
          <PersonCard
            key={character.name}
            name={character.name}
            eye_color={character.eye_color}
            hair_color={character.hair_color}
            gender={character.gender}
            height={character.height}
          />
        ))}
      </FlexCenterDiv>
    </FlexRow>
  );
};

export default PersonGrid;
