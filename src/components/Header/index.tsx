import logoImg from '@assets/logo.png';

import { BackIcon, BackButton, Container, Logo } from "./styles";

type HeaderProps = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}