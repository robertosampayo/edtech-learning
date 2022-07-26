import styled from "styled-components";
import * as CONTANTS from "../../contants";

export const CoursesWrapper = styled.article`
  height: 90vh;
  min-width: 100%;

  @media screen and (max-width: ${CONTANTS.DEVICE.TABLET}) {
    height: auto;
}


  & > div {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    margin-top: 2rem;

  }
`;

export const Header = styled.header`
    width: 100%;

    min-height: 50px;
    position: relative;

  min-width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
  justify-content: space-between;
  align-items: center;
`;



export const FeedWrapper = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 1.5rem;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.tabText};
    outline: 0px;
    border-radius: 1.5rem;
  }
`;