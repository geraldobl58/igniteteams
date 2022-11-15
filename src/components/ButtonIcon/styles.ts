import { TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons'

import styled from "styled-components/native";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type ButtonIconTypeProps = {
  type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  margin-left: 12px;

  align-items: center;
  justify-content: center;
`

export const Icon = styled(MaterialIcons).attrs<ButtonIconTypeProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``