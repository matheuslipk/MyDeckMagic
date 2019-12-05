import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cores, tamanhos, zIndex } from '../../constants';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left:0;
  right: 0;
  display: flex;
  flex-direction: row;
  background-color:${cores.primaria};
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  z-index: ${zIndex.header};
  height: ${tamanhos.alturaHeader};
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width:${tamanhos.widthMed}){
    flex-direction: row;
    a{
      margin: 0 10px;
    }
  }
`;

export const LinkHeader = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h1, h2, h3, h4 {
    color: ${cores.textPrimary};
  }
  svg{
    margin: 0 10px;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  button{
    display: flex;
    align-items: center;
    background: none;
    cursor: pointer;
    border: none;
    color: #fff;
    label{
      font-weight: bold;
      font-size: 16px;
    }
  }

  .dropdown-content{
    display: none;
    position: absolute;
    right: 0px;
    background-color: ${cores.primaria};
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
    z-index: 1;

    ul{
      display: flex;
      flex-direction: column;
      list-style: none;

      li{
        color: ${cores.textPrimary};
        padding: 10px 5px;

        &:hover{
          background: #fff;
        }
      }
    }
  }

  &:hover .dropdown-content{
    display: block;
  }
`;
