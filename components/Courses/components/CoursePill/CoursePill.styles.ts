import styled from "styled-components";


export const Pill = styled.div`
display: grid;
grid-template-columns: 10rem 1fr;
width: 100%;
height: 10rem;
background: white;
box-shadow: 0px 0px 6px 0px #e9e9e9;
border-radius: 1rem;
margin-bottom: 1rem;
cursor: pointer;

opacity: 1;
transition: all 1s;
animation-delay: 1s;
animation: 1600ms pulsate infinite alternate ease-in-out;

@media screen and (max-width: ${(props) => props.theme.device.mobile}) {
  height: auto;
  width: 90%;
}
`;

export const ImageWrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;

& > div > span {
  border-radius: 0.8rem;
}
`;

export const PillContent = styled.div`
padding: 1rem 0 1rem 0;
width: 95%;
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
& > p {
  margin-top: 0.5rem;
  @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
    display: none;
  }
}
`;

export const PillFooter = styled.div`
width: 100%;
position: absolute;
height: 3rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
bottom: 1rem;
@media screen and (max-width: ${(props) => props.theme.device.mobile}) {
  display: none;
}
`;