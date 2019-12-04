import { createGlobalStyle } from 'styled-components';
import { cores, tamanhos } from '../constants';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body{
    min-height: 100%;
  }

  body{
    background: ${cores.background};
    font-family: Arial, Helvetica, sans-serif;
    margin-top: ${tamanhos.alturaHeader};
    align-self: stretch;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

`;
