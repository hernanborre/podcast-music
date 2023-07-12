import React from "react";
import { Container, Content } from "./Layout.styles";

export const Layout = ({ children, header }) => {
  return (
    <Container>
        <header>{header}</header>
        <main>
          <Content>{children}</Content>
        </main>
    </Container>
  );
};