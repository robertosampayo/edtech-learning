import styled from "styled-components";
import { GrStatusGood } from "react-icons/gr";
import * as CONTANTS from "../../contants";

const Pill = styled.div`
  display: flex;
  flex-direction: row;
  background: #f9f9f9;
  padding: 0.3rem;
  border-radius: 0.5rem;
  & > p {
    font-weight: 400;
    opacity: 0.5;
  }
`;

interface IPillSmall {
  level: string;
}

const PillIcon = (props: { level: string }) => {
  switch (props.level) {
    case CONTANTS.ALL.toUpperCase():
      return <GrStatusGood />;
    case CONTANTS.BEGINNER.toUpperCase():
      return <GrStatusGood />;
    case CONTANTS.INTERMEDIATE.toUpperCase():
      return <GrStatusGood />;
    case CONTANTS.ADVANCE.toUpperCase():
      return <GrStatusGood />;
    default:
      return null;
  }
};

const PillSmall = (props: IPillSmall) => {
  return (
    <Pill>
      <p>{props.level === CONTANTS.ALL ? "All levels" : props.level}</p>
      <PillIcon level={props.level} />
    </Pill>
  );
};

export default PillSmall;
