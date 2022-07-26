import styled from "styled-components";
import Image from "next/image";

export const Pill = styled.div<{ active: boolean }>`
  width: 6.5rem;
  height: 2.5rem;
  position: relative;
  background: ${(props) => props.theme.colors.board};
  border-radius: 0.8rem;
  color: ${(props) => props.theme.colors.tabText};
  border: 0.1rem solid ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border: ${(props) =>
    props.active ? `0.1rem solid ${props.theme.colors.chapter1}` : ""};

  @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
    width: 80%;
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

interface ICategoryProps {
  title: string;
  image: string;
  active: boolean;
  onClick: () => void;
}

const Category = (props: ICategoryProps) => {
  return (
    <Pill onClick={props.onClick} active={props.active}>
      <CategoryIcon image={props.image} title={props.title} />
      <h4>{props.title}</h4>
    </Pill>
  );
};

export default Category;
