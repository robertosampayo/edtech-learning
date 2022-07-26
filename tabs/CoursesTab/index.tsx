import { ICourse, ICategories } from "../../types";
import Courses from "../../components/Courses";
import Course from "../../components/Course";
import styled from "styled-components";
import React, { useEffect } from "react";
import { useCourses } from "../../context/courses/state";
import * as Actions from "../../context/courses/actions";
import useSearch from "../../hooks/useSearch";
import { motion } from "framer-motion";
import * as CONTANTS from "../../contants";

const CourseTabWrapper = styled.div`
  height: 100%;
  min-width: 100%;

  > div {
    width: 100%;
    min-width: 100%;
    display: grid;
    background: transparent;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: ${CONTANTS.DEVICE.TABLET}) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;

const CoursesTab = (props: {
  courses: ICourse[];
  categories: ICategories[];
}) => {
  const { state, dispatch } = useCourses();
  const { coursesFiltered, filterCourses } = useSearch(state.coursesFiltered);

  useEffect(() => {
    dispatch({
      type: Actions.SAVE_COURSES,
      payload: props.courses,
    });

    dispatch({
      type: Actions.SET_COURSE,
      payload: props.courses[0],
    });
  }, []);
  const searchCourse = (text: string) => {
    if (text === "") {
      filterCourses("");
    }
    if (text.length <= 3) {
      return;
    }
    filterCourses(text);
  };

  return (
    <CourseTabWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: {
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          },
        }}
      >
        {coursesFiltered !== null ? (
          <Courses
            onSearch={searchCourse}
            courses={coursesFiltered}
            categories={props.categories}
          />
        ) : (
          <div>Loading ...</div>
        )}
        {state.course !== null ? (
          <Course course={state.course} />
        ) : (
          <div>Loading ...</div>
        )}
      </motion.div>
    </CourseTabWrapper>
  );
};

export default React.memo(CoursesTab);
