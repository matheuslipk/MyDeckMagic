import React from 'react';
import { GiStorkDelivery } from 'react-icons/gi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaSignInAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useDispatch } from 'react-redux';

import {
  Container, LinkHeader, Options, Dropdown,
} from './styles';
import { cores } from '../../constants';
import actionsType from '../../store/actionsType';

export default function Header() {
  const session = false;
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch({
      type: actionsType.session.destroy,
    });
  }

  return (
    <Container>
      <LinkHeader to="/">
        <h2>Codeminer 42</h2>
        <GiStorkDelivery size={40} color={cores.textPrimary} />
      </LinkHeader>

      {
        !session ? (
          <Options>
            <LinkHeader to="/login">
              <h4>Login</h4>
              <FaSignInAlt size={30} color={cores.textPrimary} />
            </LinkHeader>
            <LinkHeader to="/cadastro">
              <h4>Cadastre-se</h4>
              <AiOutlineUserAdd size={30} color={cores.textPrimary} />
            </LinkHeader>
          </Options>
        ) : (
          <Options>
            <Dropdown>
              <button type="button">
                <label>Matheus Araújo</label>
                <IoIosArrowDown size={20} />
              </button>
              <div className="dropdown-content">
                <ul>
                  <li>
                    <LinkHeader to="/dashboard">
                      <h4>Minha Conta</h4>
                    </LinkHeader>
                  </li>
                  <li>
                    <LinkHeader to="/" onClick={handleLogout}>
                      <h4>Sair</h4>
                    </LinkHeader>
                  </li>
                </ul>
              </div>
            </Dropdown>
          </Options>
        )
      }


    </Container>
  );
}
