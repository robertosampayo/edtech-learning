import { ICategories } from "../../../../types";
import React from "react";
import styled from "styled-components";
import * as CONTANTS from "../../../../contants";
import Category from "../Category";

export const CategoriesWrapper = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 0;

  @media screen and (max-width: ${CONTANTS.DEVICE.MOBILE}) {
    flex-direction: column;
  }
`;

interface IFiltersProps {
  active: string;
  categories: ICategories[];
  onClick: (category: string) => void;
}

const Categories: React.FunctionComponent<IFiltersProps> = ({
  active,
  categories,
  onClick,
}) => {
  return (
    <CategoriesWrapper>
      {categories !== null
        ? categories.map((category) => (
            <Category
              category={category}
              onClick={onClick}
              active={active === category.name}
            />
          ))
        : null}
    </CategoriesWrapper>
  );
};

export default Categories;
