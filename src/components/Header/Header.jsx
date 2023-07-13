import { ContainerStyled, MUICircularProgressStyled, TitleStyled} from "./Header.styles";
import { useContext } from "react";
import { LoadingContext } from "../../context/LoadingContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isContextLoading } = useContext(LoadingContext);
  return (
    <header>
      <ContainerStyled>
        <Link to="/" data-testid="headerHomeLink"> 
          <TitleStyled>Podcaster</TitleStyled>
        </Link>
        {isContextLoading && <MUICircularProgressStyled />}
      </ContainerStyled>
    </header>
  );
};