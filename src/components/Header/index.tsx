import { useNavigation } from '@react-navigation/native'

import logoImg from '@assets/logo.png';

import { BackIcon, BackButton, Container, Logo } from "./styles";

type HeaderProps = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}