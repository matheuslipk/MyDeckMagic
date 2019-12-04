import { createGlobalStyle } from 'styled-components';
import { cores, tamanhos } from '../constants';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    display: flex;
    min-height: 100%;
  }

  body{
    flex:1;
    background: ${cores.background};
    font-family: Arial, Helvetica, sans-serif;
    /* border: 1px solid blue; */
    margin-top: ${tamanhos.alturaHeader};
    align-self: stretch;
  }

  button{
    cursor: pointer;
  }

  #root{
    display: flex;
    min-height: 100%;
    /* border: 1px solid red; */
  }

  a{
    text-decoration: none;
  }

`;
