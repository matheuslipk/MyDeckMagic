import styled, { keyframes, css } from 'styled-components';
import { cores } from '../constants';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  h2{
    font-size: 30px;
    color: ${cores.primaria};
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Input = styled.div`
  display: flex;
  margin-bottom: 5px;

  div{
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${cores.primaria};
    width: 20%;
    min-width: 150px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    label{
      font-size: 12px;
      color: ${cores.textPrimary};
    }
  }

  input{
    flex: 1;
    padding: 10px 10px;
    border: none;
    color: ${cores.primaria};
    background: ${cores.backgroundInput};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    &:hover{
      background: #eee;
    }

    &:focus{
      background: #eee;
    }
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const Submit = styled.button.attrs((props) => ({
  disabled: props.inativo,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${cores.primaria};
  border: none;
  margin-top: 30px;
  color: ${cores.textPrimary};
  border-radius: 4px;
  font-size: 16px;

  &[disabled]{
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg{
    margin-left: 10px;
    ${(props) => props.inativo && css`
      animation: ${rotate} 2s linear infinite ;
    `}
  }

`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  ${(props) => props.background && css`
    background: url(${props.background});
    background-size: cover;
  `}
`;
