import styled from "styled-components";
import { RiStarSFill } from "react-icons/ri";

const RankerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & span {
    display: flex;
    flex-direction: row;
    gap: 0.1rem;
    margin-left: 0.5rem;
  }
`;

const RankIconFill = styled(RiStarSFill)`
  color: ${(props) => props.theme.colors.rank};
`;

const RankIcon = styled(RiStarSFill)`
  color: ${(props) => props.theme.colors.text};
`;

interface IRankPill {
  rank: number;
  countRank: number;
}

const Ranker = (props: IRankPill) => {
  return (
    <RankerWrapper>
      {new Array(props.rank).fill(null).map((star, index) => (
        <RankIconFill key={index} />
      ))}{" "}
      {new Array(5 - props.rank).fill(null).map((star, index) => (
        <RankIcon key={index} />
      ))}
      <span>
        <h3>{props.rank}</h3>
        <p>{`(${props.countRank})`}</p>
      </span>
    </RankerWrapper>
  );
};

export default Ranker;
