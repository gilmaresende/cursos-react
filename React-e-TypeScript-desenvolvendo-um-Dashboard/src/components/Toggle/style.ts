import styled from "styled-components";
import Switch, { ReactSwitchProps } from 'react-switch'

export const Conteiner = styled.div`
   display: flex;
   align-items: center;
`

export const ToggleLabel = styled.samp`
   color: ${props => props.theme.colors.white}
`

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
   ({ theme }) => ({
      onColor: theme.colors.infor,
      offColor: theme.colors.warning
   })
) <ReactSwitchProps>`
   margin: 0 7px;
`
