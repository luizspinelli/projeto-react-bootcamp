/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={25} />
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/57016585?v=4"
            alt="Imagem"
          />
          <div>
            <strong>Nome repositório</strong>
            <p>Descrição respositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>stars</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link key={0} to="/">
          <div>
            <strong>teste</strong>
            <p>tesete</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
