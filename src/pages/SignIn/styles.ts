import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/background.png';




export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  

  place-content: center;
  width: 100%;
  max-width: 700px;
  
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;


const appearFromBottom = keyframes`
  from {
    opacity:0;
    transform:translateY(20px);
  } to {
    opacity:1;
    transform:translateY(0px);
  }

`;

export const AnimationContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;

  animation:${appearFromBottom} 1s;

form {
    margin: 50px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    
    
    a {
      color: #5fbf00;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#5fbf00')};
      }
    }
  }
  > a {
    position:relative;
    top:-20px;
    color: #5fbf00;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#5fbf00')};
    }
  }



`;