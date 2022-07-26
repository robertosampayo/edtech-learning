import * as Actions from "./actions";
import { ICoursesContext, IFilters, ICourse } from "../../types";
import * as CONTANTS from "../../contants"

export const initialState = {
  course: null,
  filters: {
    category: "All",
    status: "All",
  },
  courses: null,
  coursesFiltered: null
};

function CoursesReducer(
  state: ICoursesContext,
  action: Actions.ActionsType
): ICoursesContext {
  switch (action.type) {

    case Actions.FILTER_BY_CATEGORY: {
      const filters =  <IFilters>action.payload;
      const courses = JSON.parse(JSON.stringify(state.courses));

      // filter by category
      return { ...state, 
        coursesFiltered: courses.filter(course => 
          course.category.toLocaleLowerCase() === filters.category.toLocaleLowerCase()), 
          filters: { ...filters, category: filters.category, status: "" } };

    }
    case Actions.FILTER_BY_STATUS: {
      const filters =  <IFilters>action.payload;
      const courses = JSON.parse(JSON.stringify(state.courses));
      if (filters.status === CONTANTS.ALL) {
        return { ...state, coursesFiltered: courses, 
          filters: { ...filters, category: CONTANTS.ALL, status: CONTANTS.ALL}}
      }

      if (state.filters.category === CONTANTS.ALL) {
        return { ...state, coursesFiltered: courses.filter(course => 
          course.status.toLocaleLowerCase() === filters.status.toLocaleLowerCase()), 
          filters: filters }
      }

      // filter by status
      return { ...state, coursesFiltered: courses.filter(course => 
        course.status.toLocaleLowerCase() === filters.status.toLocaleLowerCase()), 
        filters: { ...filters, category: CONTANTS.ALL, status: filters.status} };

    }
    case Actions.SET_COURSE: {
      return { ...state, course: <ICourse>action.payload };
    }
    case Actions.SAVE_COURSES: {
      return { ...state, courses: <ICourse[]>action.payload, coursesFiltered: <ICourse[]>action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default CoursesReducer;
