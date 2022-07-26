import styled from "styled-components";
import Image from "next/image";
import Ranker from "../../../Ranker";
import PillSmall from "../../../PillSmall";
import { ICourse } from "../../../../types";
import React from "react";

const Pill = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  width: 100%;
  height: 10rem;
  background: white;
  box-shadow: 0px 0px 6px 0px #e9e9e9;
  border-radius: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;

  opacity: 1;
  transition: all 1s;
  animation-delay: 1s;
  animation: 1600ms pulsate infinite alternate ease-in-out;

  @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
    height: auto;
    width: 90%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  & > div > span {
    border-radius: 0.8rem;
  }
`;

const PillContent = styled.div`
  padding: 1rem 0 1rem 0;
  width: 95%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  & > p {
    margin-top: 0.5rem;
    @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
      display: none;
    }
  }
`;

const PillFooter = styled.div`
  width: 100%;
  position: absolute;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: 1rem;
  @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
    display: none;
  }
`;

interface ICoursePill {
  course: ICourse;
  onClick: (course: ICourse) => void;
}

const CoursePill = ({ course, onClick }: ICoursePill) => {
  return (
    <Pill onClick={() => onClick(course)}>
      <ImageWrapper>
        <div style={{ position: "relative", width: "8rem", height: "8rem" }}>
          <Image
            alt={course.title}
            src={course.cover}
            layout="fill"
            objectFit="contain"
            quality={70}
          />
        </div>
      </ImageWrapper>
      <PillContent>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <PillFooter>
          <Ranker rank={course.rank} countRank={course.countRank} />
          <PillSmall level={course.level} />
        </PillFooter>
      </PillContent>
    </Pill>
  );
};

export default React.memo(CoursePill);
