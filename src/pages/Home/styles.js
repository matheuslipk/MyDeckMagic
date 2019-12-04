import styled from 'styled-components';
import { cores } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  min-height: 100%;
  width: 100%;
`;

export const Pilha = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  
  &:hover{
    background: #ddd;
  }
`;

export const HeaderPilha = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid; */
  font-size: 20px;
  height: 40px;
  margin: 0 20px;
  background: #fff;
  align-items: center;
  padding: 5px 10px;
`;

export const Carta = styled.div`
  display: flex;
  width: 113px;
  margin: 0 5px;
  
  img{
    width: 113px;
  }
`;

export const OptionsGame = styled.div`
  display: flex;
  padding: 5px;
`;

export const MyButton = styled.button.attrs({
  type: 'button',
})`
  background: ${cores.primaria};
  border: none;
  padding: 5px;
  color: #fff;
  flex: 1;
  margin: 0 2px;
  border-radius: 4px;
`;
