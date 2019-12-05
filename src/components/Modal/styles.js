import styled, { keyframes } from 'styled-components';
import { cores } from '../../constants';

const rotate = keyframes`
  from{
    transform: rotate(0deg) scale(0.1);
  }

  to{
    transform: rotate(1080deg) scale(1);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  position:absolute;
  top:0;
  right: 0;
  left: 0;
  bottom:0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  z-index: 100;
  justify-content: center;
  align-items: center;
  
  >div{
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 600px;
    padding: 10px;
    align-items: center;

    div{
      display: flex;
      justify-content: center;
      margin: 10px 0;

      img{
        width: 200px;
      }
      animation: ${rotate} linear 1s;
    }

    h2{
      text-align: center;
      color: ${cores.textPrimary};
    }

    button{
      background: ${cores.primaria};
      padding: 10px;
      color: #fff;
      border-radius: 4px;
      border: none;
    }

  }

`;
