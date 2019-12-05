import styled from 'styled-components';
import { cores, tamanhos, transitions } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  min-height: 100%;
  width: 100%;
  max-width: 1100px;
  padding: 5px;
`;

export const GameArea = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  /* border: 1px solid red; */

  @media(max-width: ${tamanhos.widthMed}){
    justify-content: space-around;
    flex-direction: row;
  }

`;

export const Pilha = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid white; */
  align-items: center;
  margin: 5px 0;
  padding: 10px;
  cursor: pointer;
  
  transition: transform ${transitions.short};
  overflow: hidden;

  border: ${(props) => (props.selecionada ? `2px solid ${cores.primaria}` : 'none')};

  >div + div{
    display: flex;
    flex: 1;
    justify-content: space-around;

    @media(max-width: ${tamanhos.widthMed}){
      flex: 1;
      flex-direction: column;
    }

  }

  @media(max-width: ${tamanhos.widthMed}){
    flex: 1;
    flex-direction: column;
  }

  &:hover{
    background: #fff3;
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
  margin: 5px;
  transition: ${transitions.short};

  img{
    width: 113px;
    @media(max-width: ${tamanhos.widthMed}){
      width: 90px;
      margin: 0 auto;
    }

    @media(max-width: ${tamanhos.widthMin}){
      width: 70px;
      margin: 0 auto;
    }


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
  padding: 10px 5px;
  color: #fff;
  flex: 1;
  margin: 0 2px;
  border-radius: 4px;
`;
