import styled from "styled-components";

type TFilterList = {
  id: string;
  name: string;
};

interface IFilterByListProps {
  status: TFilterList[];
  active: string;
  onClick: (name: string) => void;
}

interface IFilterProps {
  active: boolean;
}

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  justify-content: start;
  gap: 2rem;
`;

const Filter = styled.li<IFilterProps>`
  cursor: pointer;
  > h4 {
    color: ${(props) => props.theme.colors.subtitle};
    opacity: ${(props) => (props.active ? "1" : "0.4")};
  }
`;

const FilterStatus: React.FunctionComponent<IFilterByListProps> = (props) => {
  const handleClick = (name: string) => {
    props.onClick(name);
  };

  return (
    <List>
      {props.status.map((statusVal) => (
        <Filter
          key={statusVal.id}
          onClick={() => handleClick(statusVal.name)}
          active={statusVal.name === props.active}
        >
          <h4>{statusVal.name}</h4>
        </Filter>
      ))}
    </List>
  );
};

export default FilterStatus;
