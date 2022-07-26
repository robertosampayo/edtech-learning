import styled from "styled-components";

const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  z-index: 1;

  @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
    display: none;
  }
`;

interface IFiltersProps {
  onLeave?: () => void;
  onHover?: () => void;
  onClick?: (event: any) => void;
  icon: React.ReactNode;
  ariaLevel: string;
}

const PillBoxButton: React.FunctionComponent<IFiltersProps> = (props) => {
  return (
    <Button
      aria-label={props.ariaLevel}
      data-testid="search-button"
      onMouseLeave={props.onLeave}
      onMouseEnter={props.onHover}
      onClick={props.onClick}
    >
      {props.icon}
    </Button>
  );
};

export default PillBoxButton;
