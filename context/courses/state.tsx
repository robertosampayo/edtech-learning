import React, { useReducer } from "react";
import CoursesReducer, { initialState } from "./reducer";
import { ActionsType } from "./actions";
import { ICoursesContext } from "../../types";

type Dispatch = (action: ActionsType) => void;
type CoursesProviderProps = { children: React.ReactNode };

const CoursesStateContext = React.createContext<
  { state: ICoursesContext; dispatch: Dispatch } | undefined
>(undefined);

function CoursesProvider({ children }: CoursesProviderProps) {
  const [state, dispatch] = useReducer(CoursesReducer, initialState);

  const value = { state, dispatch };
  return (
    <CoursesStateContext.Provider value={value}>
      {children}
    </CoursesStateContext.Provider>
  );
}

function useCourses() {
  const context = React.useContext(CoursesStateContext);
  if (context === undefined) {
    throw new Error("useCourses must be used within a CoursesProvider");
  }
  return context;
}

export { CoursesStateContext, CoursesProvider, useCourses };
