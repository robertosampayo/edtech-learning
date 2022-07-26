import React from "react";
import styled from "styled-components";

interface ITeacher {
  name: string;
  description: string;
}

export const Avatar = styled.span`
  background: #555354;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

export const TeacherSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
  & > h3 {
    margin-bottom: 0.4rem;
  }
`;

const Teacher = (props: ITeacher) => {
  return (
    <TeacherSection>
      <Avatar />
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </TeacherSection>
  );
};

export default React.memo(Teacher);
