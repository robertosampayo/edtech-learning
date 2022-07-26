import { ICourse, IFilters } from "../../types";

interface ActionType {
  type: string;
}

interface SetCourseAction extends ActionType {
  payload: ICourse;
}

interface SetFiltersAction extends ActionType {
  payload: IFilters;
}

interface SetCoursesAction extends ActionType {
  payload: ICourse[];
}

// Courses
export type ActionsType = SetCourseAction | SetFiltersAction | SetCoursesAction;

export const SET_COURSE = "SET_COURSE";
export const SAVE_FILTERS = "SAVE_FILTERS";
export const SAVE_COURSES = "SAVE_COURSES";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_STATUS = "FILTER_BY_STATUS";


