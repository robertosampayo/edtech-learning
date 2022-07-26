import React from "react";
import Categories from "./components/Categories";

import PillBoxButton from "../PillBoxButton";
import FilterStatus from "./components/FilterStatus";
import { ICategories, IFilters } from "../../types";
import { useCourses } from "../../context/courses/state";
import { FiltersWrapper, IoFilterIcon } from "./filters.styles";
import * as Actions from "../../context/courses/actions";
import * as CONTANTS from "../../contants";

const status = [
  {
    id: "0",
    name: CONTANTS.ALL,
  },
  {
    id: "1",
    name: CONTANTS.ACTIVE,
  },
  {
    id: "2",
    name: CONTANTS.COMPLETED,
  },
];

interface IFiltersProps {
  categories: ICategories[];
  filters: IFilters;
}

const Filters: React.FunctionComponent<IFiltersProps> = (props) => {
  const { state, dispatch } = useCourses();
  const openFilters = () => {
    //
  };

  const filterByStatus = (status: string) => {
    dispatch({
      type: Actions.FILTER_BY_STATUS,
      payload: { ...state.filters, status: status },
    });
  };

  const filterByCategory = (category: string) => {
    dispatch({
      type: Actions.FILTER_BY_CATEGORY,
      payload: { ...state.filters, category: category },
    });
  };

  return (
    <FiltersWrapper>
      <FilterStatus
        status={status}
        onClick={filterByStatus}
        active={state.filters.status}
      />
      <div>
        <Categories categories={props.categories} onClick={filterByCategory} />

        <PillBoxButton
          ariaLevel="filter-icon"
          onClick={openFilters}
          icon={<IoFilterIcon size="1.5rem" />}
        />
      </div>
    </FiltersWrapper>
  );
};

export default Filters;
