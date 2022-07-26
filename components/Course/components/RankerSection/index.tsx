import Ranker from "../../../Ranker";
import PillSmall from "../../../PillSmall";
import styled from "styled-components";
import React from "react";

interface IRankerSection {
  rank: number;
  countRank: number;
  level: string;
}

const RankerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-start;
`;

const RankerSection = (props: IRankerSection) => {
  return (
    <RankerWrapper>
      <Ranker rank={props.rank} countRank={props.countRank} />
      <PillSmall level={props.level} />
    </RankerWrapper>
  );
};

export default React.memo(RankerSection);
