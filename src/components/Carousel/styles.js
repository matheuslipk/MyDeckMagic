import styled from 'styled-components';
import { zIndex, cores } from '../../constants';

export const Container = styled.div`
  display: flex;
  padding: 5px 0;
  /* background: #fffa; */
  margin: 5px 0;
  overflow-x: hidden;
  width: 98vw;
  align-items: center;
  justify-content: center;

  button{
    position: absolute;
    z-index: ${zIndex.prioridadeMedia};
    background: #fffc;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 25px;
    font-size: 18px;
    color: #fff;
  }
  .arrow-left{
    left: 0;
  }

  .arrow-right{
    right: 0;
  }

  ul{
    display: flex;
    list-style: none;
    transition: 0.75s;

    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* background: #fff; */
      width: 100px;
      margin: 0 5px;
      /* border-radius: 40px; */

      div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 90px;
        border-radius: 50px;
        margin-bottom: 20px;
      }

      label{
        color: ${cores.primaria};
      }
    }

  }
`;
