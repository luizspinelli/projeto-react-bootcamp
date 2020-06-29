import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositorios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/57016585?s=460&u=5e21f897d2ab550c9ac2ca6abdb58d7fde8f67cb&v=4"
            alt="Luiz Spinelli"
          />
          <div>
            <strong>Nome Repositório</strong>
            <p>Descrição respositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/57016585?s=460&u=5e21f897d2ab550c9ac2ca6abdb58d7fde8f67cb&v=4"
            alt="Luiz Spinelli"
          />
          <div>
            <strong>Nome Repositório</strong>
            <p>Descrição respositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/57016585?s=460&u=5e21f897d2ab550c9ac2ca6abdb58d7fde8f67cb&v=4"
            alt="Luiz Spinelli"
          />
          <div>
            <strong>Nome Repositório</strong>
            <p>Descrição respositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;
