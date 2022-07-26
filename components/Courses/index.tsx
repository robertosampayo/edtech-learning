import Filters from "../Filters";

import CoursePill from "../Courses/components/CoursePill";
import { ICategories, ICourse } from "../../types";
import { CoursesWrapper, Header, FeedWrapper } from "./Courses.styles";
import { useCourses } from "../../context/courses/state";
import * as Actions from "../../context/courses/actions";
import Search from "./components/Search";
import React from "react";

const Courses: React.FunctionComponent<{
  courses: ICourse[];
  categories: ICategories[];
  onSearch: (text: string) => void;
}> = (props) => {
  const { state, dispatch } = useCourses();

  const loadCourse = (course: ICourse) => {
    dispatch({
      type: Actions.SET_COURSE,
      payload: course,
    });
  };

  return (
    <CoursesWrapper>
      <div>
        <Header>
          <h1>Courses</h1>
          <Search onSearch={props.onSearch} />
        </Header>
        <Filters categories={props.categories} filters={state.filters} />
        <FeedWrapper data-testid="courses-feed">
          {props.courses !== null && props.courses.length > 0
            ? props.courses.map((course) => {
                return (
                  <CoursePill
                    key={course.id}
                    course={course}
                    onClick={loadCourse}
                  />
                );
              })
            : null}
        </FeedWrapper>
      </div>
    </CoursesWrapper>
  );
};

export default React.memo(Courses);
