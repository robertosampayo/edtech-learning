import styled from "styled-components";
import { FaPlayCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";



export const Chapter = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    height: 8rem;
    border-radius: 1rem;
    margin-top: 2rem;
    border: 1px solid ${(props) => props.theme.colors.text};
`;

export const ChapterColor = styled.div<{ color?: boolean }>`
    background: ${(props) =>
    props.color === true ? props.color : props.theme.colors.orange};
    width: 100%;
    height: 100%;
    border-radius: 1rem 0 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.orange};
`;

export const ChapterContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem 0 1rem;
    height: 100%;
    width: 100%;
    justify-content: center;
    & > span > p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3rem;
    }

& > h3 {
  margin-top: 0.3rem;
}

& > p {
  margin-top: 0.5rem;
}
`;

export const ChapterPlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & span > {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    }
`;

export const PlayIcon = styled(FaPlayCircle)`
    color: ${(props) => props.theme.colors.title};
    width: 2.5rem;
    height: 2.5rem;
`;

export const DotsIcon = styled(BsThreeDots)`
    color: ${(props) => props.theme.colors.text};
    width: 2.5rem;
    height: 2.5rem;
`;
