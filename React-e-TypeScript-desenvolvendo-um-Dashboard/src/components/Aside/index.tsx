import React from "react";
import { Conteiner, Header, LogImg, Title, MenuContainer, MenuItemLink } from "./style";
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'

import logoImg from '../../assets/logo.svg'

const Aside: React.FC = () => {
   return (
      <>
         <Conteiner >
            <Header>
               <LogImg src={logoImg} alt="Logo Minha Carteira" />
               <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
               <MenuItemLink href="/dashboard">
                  <MdDashboard />
                  Dashboard</MenuItemLink>
               <MenuItemLink href="/list/entry-balance">
                  <MdArrowUpward />
                  Entradas</MenuItemLink>
               <MenuItemLink href="/list/exit-balance">
                  <MdArrowDownward />
                  Saídas</MenuItemLink>
               <MenuItemLink href="#">
                  <MdExitToApp />
                  Sair</MenuItemLink>
            </MenuContainer>
         </Conteiner >
      </>)
}

export default Aside