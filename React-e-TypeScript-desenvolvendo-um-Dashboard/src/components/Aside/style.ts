import styled from "styled-components";

export const Conteiner = styled.div`
   grid-area: AS;
   background-color: ${props => props.theme.colors.secondary};
   padding-left: 20px;
   border-right :1px solid ${props => props.theme.colors.gray};
`

export const Header = styled.head`
   display: flex;
   align-items: center;
   height: 70px;
`

export const LogImg = styled.img`
   height:40px;
   width: 40px;
   `

export const Title = styled.h3`
   color: ${props => props.theme.colors.white};
   margin-left: 10px;
`

export const MenuContainer = styled.nav`
   margin-top: 50px;
   display: flex;
   flex-direction: column;
`

export const MenuItemLink = styled.a`
   color: ${props => props.theme.colors.infor};
   text-decoration: none;
   margin: 7px 0;
   display: flex;
   align-items: center;

   &:hover{
      opacity: .7;
   }
   transition: opacity .3s;

   >svg{
      font-size: 18px;
      margin-right: 5px;
   }

`
