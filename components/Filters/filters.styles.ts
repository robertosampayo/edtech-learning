import styled from "styled-components";
import { TbExchange } from "react-icons/tb";

export const FiltersWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;

  & > div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
      flex-direction: column;
    gap: 1rem;
  }



  }
`;


export const IoFilterIcon = styled(TbExchange)`
  color: ${(props) => props.theme.colors.tabText};
`;

