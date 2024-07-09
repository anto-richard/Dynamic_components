// src/components/StudentInfo.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import photo from '../assets/photo.svg';

const animateBackground = keyframes`
  0% { background-color: #e0f7fa; }
  50% { background-color: #80deea; }
  100% { background-color: #e0f7fa; }
`;

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(270deg, #e0f7fa, #80deea);
  background-size: 400% 400%;
  animation: ${animateBackground} 15s ease infinite;
  text-align: center;
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Info = styled.div`
  margin: 20px 0;
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const AdditionalContent = styled.div`
  margin-top: 20px;
  transition: opacity 0.3s;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  height: ${({ isVisible }) => (isVisible ? 'auto' : '0')};
  overflow: hidden;
`;

function StudentInfo() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container>
      <Photo src={photo} alt="Student Photo" />
      <Info>
        <h2>Anto Richard. S</h2>
        <p>Registration Number: 212221240005</p>
      </Info>
      <ToggleButton onClick={toggleVisibility}>
        {isVisible ? 'Hide Details' : 'Show Details'}
      </ToggleButton>
      <AdditionalContent isVisible={isVisible}>
        <p>Additional content about the student goes here.</p>
      </AdditionalContent>
    </Container>
  );
}

export default StudentInfo;
