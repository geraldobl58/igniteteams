import logoImg from '@assets/logo.png';

import { Container, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  )
}