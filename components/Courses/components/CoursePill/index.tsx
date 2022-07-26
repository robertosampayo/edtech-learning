import Image from "next/image";
import Ranker from "../../../Ranker";
import PillSmall from "../../../PillSmall";
import { ICourse } from "../../../../types";
import React from "react";
import {
  ImageWrapper,
  Pill,
  PillContent,
  PillFooter,
} from "./CoursePill.styles";

interface ICoursePill {
  course: ICourse;
  onClick: (course: ICourse) => void;
}

const CoursePill = ({ course, onClick }: ICoursePill) => {
  return (
    <Pill
      onClick={(e: any) => {
        e.preventDefault();
        onClick(course);
      }}
    >
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
