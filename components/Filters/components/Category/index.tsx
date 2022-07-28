import styled from "styled-components";
import Image from "next/image";

const Pill = styled.li<{ active: boolean }>`
  list-style: none;
  background: ${(props) => props.theme.colors.board};
  border-radius: 0.8rem;
  border: ${(props) =>
    props.active
      ? `0.1rem solid ${props.theme.colors.orange}`
      : `0.1rem solid ${props.theme.colors.text}`};
  width: 6.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  > p {
    color: ${(props) => props.theme.colors.subtitle};
    opacity: 0.8;
  }
`;

const CategoryIcon = ({
  width = "1.2rem",
  height = "1.2rem",
  ...props
}: {
  image: string;
  title: string;
  width?: string;
  height?: string;
}) => {
  return (
    <div style={{ position: "relative", width: width, height: height }}>
      <Image
        alt={props.title}
        src={props.image}
        layout="fill"
        objectFit="contain"
        quality={70}
      />
    </div>
  );
};

interface ICategory {
  id: string;
  name: string;
  icon: string;
}

interface ICategoryProps {
  category: ICategory;
  onClick: (title: string) => void;
  active: boolean;
}

const Category = (props: ICategoryProps) => {
  return (
    <Pill
      key={props.category.id}
      onClick={() => props.onClick(props.category.name)}
      active={props.active}
    >
      <CategoryIcon image={props.category.icon} title={props.category.name} />
      <p>{props.category.name}</p>
    </Pill>
  );
};

export default Category;
