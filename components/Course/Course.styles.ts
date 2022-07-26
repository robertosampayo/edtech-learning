import styled from "styled-components";
import * as CONTANTS from "../../contants";

export const CourseWrapper = styled.article`
height: 95vh;
min-width: 100%;
display: flex;
flex-direction: column;
position: relative;
align-items: center;
background: ${(props) => props.theme.colors.white};
border-radius: 0 1.5em 1.5rem 0;
overflow-y: scroll;

@media screen and (max-width: ${CONTANTS.DEVICE.TABLET}) {
      height: auto;
      grid-row: 1;
      border-radius: 1rem;
}
& > section {

  width: 90%;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

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

export const Video = styled.div`
  display: flex;
  justify-content: center;

& > iframe {
  border-radius: 1.5rem;
  overflow: hidden;
  transform: translateZ(0);
  background: black;
}
`;

export const Content = styled.div`
display: flex;
flex-direction: column;

> h1 {
  margin-top: 1rem;
}

> p {
  margin-top: 1rem;
}
`;


export const Teacher = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-top: 1rem;
gap: 1rem;
& > h3 {
  margin-bottom: 0.4rem;
}
`;



export const CourseContentTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 1rem;
> h2 {
  color: ${(props) => props.theme.colors.title};
}
`;