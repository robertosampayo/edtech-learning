import RankerSection from "./components/RankerSection";
import ChapterPill from "../ChapterPill";
import { ICourseProps } from "../../types";
import Teacher from "./components/Teacher";
import {
  CourseWrapper,
  Video,
  Content,
  CourseContentTitle,
} from "./Course.styles";
import React from "react";

const Course: React.FunctionComponent<ICourseProps> = (props) => {
  const IFrameVideo = React.memo(() => {
    return (
      <iframe
        title={props.course.title}
        src={props.course.video}
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  });

  return (
    <CourseWrapper>
      <section>
        <Video>
          <IFrameVideo />
        </Video>
        <Content>
          <RankerSection
            rank={props.course.rank}
            countRank={props.course.countRank}
            level={props.course.level}
          />

          <h1>{props.course.title}</h1>
          <p>{props.course.description}</p>

          <Teacher
            name={props.course.teacher.name}
            description={props.course.teacher.description}
          />
          <CourseContentTitle>
            <h2>Course`s content</h2>
            <p>
              {props.course.countChapters} lectures ∙{" "}
              {new Date(props.course.duration).getHours()} Hours
            </p>
          </CourseContentTitle>
          {props.course.chapters.length > 0
            ? props.course.chapters.map((chapter) => {
                return (
                  <ChapterPill
                    key={chapter.id}
                    chapter={chapter}
                    onClick={() => {
                      return;
                    }}
                  />
                );
              })
            : null}
        </Content>
      </section>
    </CourseWrapper>
  );
};

export default React.memo(Course);
