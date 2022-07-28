import styled from "styled-components"
import { RiSearchLine } from "react-icons/ri"

  export const SearchButtonWrapper = styled.div`
    position: absolute;
    right: 0;
    z-index: 1;
    @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
      display: none;
    }
  `;

export const InputSearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20.5rem;
    position: absolute;
    right: 0;
  `;

export const CloseButtonWrapper = styled.div`
    position: absolute;
    left: 0;
    z-index: 1;
  `;

export const InputSearch = styled.input`
  width: 15rem;
  height: 2.6rem;
  position: relative;
  right: -1.4rem;
  border: ${(props) => `0.1rem solid ${props.theme.colors.tabText}`};
  border-radius: 0.8rem;
  font-size: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.fonts.subtitle};
  padding: 0 2.5rem 0 0.5rem;




  :focus {
    border: ${(props) => `0.1rem solid ${props.theme.colors.orange}`};
    outline: none;
  }
`;

export const InputMask = styled.input`
    width: 15rem;
    height: 2.6rem;
    position: absolute;
    right: -0.2rem;
    top: 50%;
    opacity: 0.6;
    transform: translateY(-50%);
    border: 0.1rem solid #9c9b9b;
    border-radius: 0.8rem;
    font-size: 1rem;
    padding: 0 2.5rem 0 0.5rem;




  :focus {
    border: ${(props) => `0.1rem solid ${props.theme.colors.orange}`};
    outline: none;
  }
`;

export const SearchIcon = styled(RiSearchLine)`
  color: ${(props) => props.theme.colors.tabText};
`;