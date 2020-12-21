import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #fff;
    color: #141414;
    border-radius: 10px;
    border: 2px solid #fff;
    padding: 16px;
    width: 100%;
    display:flex;

    align-items:center;

    ${props => props.isErrored && css`
    border:2px solid red;
    
    `}

    ${props => props.isFocused && css`
      color:#5fbf00;
      border:2px solid #5fbf00;
    
    `  }

    ${props => props.isField && css`
    color:#5fbf00;
    
    `}

    

    & + div {
        margin-top: 8px;
      }
input {
     background:transparent;
     flex:1;
     border:0;
     color: #141414;

      &::placeholder {
        color: #141414;
      }
      


      
    }
    
    svg {
          margin-right:16px;
      }
    
    `;

    export const Error = styled(Tooltip)`
    height:20px;
    margin-left:16px;
    svg{
      margin:0;
    }

    span{
      background:red;
      color:#fff;
      &::before{ 
        border-color:red transparent;
      }
    }

    
    
    `;