import styled, { keyframes } from 'styled-components';
import { cores } from '../../constants';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position:absolute;
  top:0;
  right: 0;
  left: 0;
  bottom:0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  z-index: 10;
  justify-content: center;
  align-items: center;
  
  div{
    
    h2{
      color: ${cores.textPrimary};
    }
    
    svg{
      animation: ${rotate} linear 2s infinite;
    }

  }

`;
