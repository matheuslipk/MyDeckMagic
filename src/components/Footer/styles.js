import styled from 'styled-components';
import { cores } from '../../constants';

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  max-width: 1200px;
`;

export const Session = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-top: 1px solid #ccc;

  > div{
    display: flex;
  }

  p{
    color: ${cores.textPrimary};
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 30px;
`;

export const Coluna = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* border: 1px solid #f00; */

  label{
    color: ${cores.textPrimary};
    margin: 5px 0;
  }
`;
