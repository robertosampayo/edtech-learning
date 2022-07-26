import styled from "styled-components"

export const MenuWrapper = styled.aside`
height: auto;
width: 120px;
display: flex;
justify-content: center;
align-items: flex-start;
position: relative;
position: relative;
padding-top: 10rem;
display: block;
@media screen and (max-width: ${props => props.theme.device.mobile}) {
  display: none;
}


& > div > span {
  position: absolute;
  top: 2rem;
  background: ${(props) => props.theme.colors.chapter1};
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
}

& ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 1rem;
  padding: 0;
  color: ${(props) => props.theme.colors.board};
  margin: 0;
  position: relative;
}
`;

interface IItemProps {
    enabled: boolean;
}

export const Item = styled.div<IItemProps>`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.enabled? props.theme.colors.disabled : props.theme.colors.disabledDark};
    cursor: pointer;

    & > p {
      color: ${(props) => props.enabled? props.theme.colors.disabled : props.theme.colors.disabledDark};
      opacity: 1;
    }

`;