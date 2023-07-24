import { LayoutContentStyled, LayoutContainerStyled } from "./Layout.styles"

export const Layout = ({ children, header }: any) => {
  return (
    <LayoutContainerStyled>
      <header>{header}</header>
      <main>
        <LayoutContentStyled>{children}</LayoutContentStyled>
      </main>
    </LayoutContainerStyled>
  )
}
