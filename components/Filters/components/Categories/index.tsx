import { ICategories } from "../../../../types";
import React from "react";
import styled from "styled-components";
import Category from "../Category";
import { useCourses } from "../../../../context/courses/state";
import * as CONTANTS from "../../../../contants";

export const CategoriesWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  @media screen and (max-width: ${CONTANTS.DEVICE.MOBILE}) {
    flex-direction: column;
  }
`;

interface IFiltersProps {
  categories: ICategories[];
  onClick: (category: string) => void;
}

const Categories: React.FunctionComponent<IFiltersProps> = ({
  categories,
  onClick,
}) => {
  const { state } = useCourses();
  return (
    <CategoriesWrapper>
      {categories !== null
        ? categories.map((category) => {
            return (
              <Category
                key={category.id}
                title={category.name}
                image={category.icon}
                active={
                  state.filters.category.toLocaleLowerCase() ===
                  category.name.toLocaleLowerCase()
                }
                onClick={() => onClick(category.name)}
              />
            );
          })
        : null}
    </CategoriesWrapper>
  );
};

export default Categories;
