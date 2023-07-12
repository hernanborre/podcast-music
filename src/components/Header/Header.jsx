import { StyledMUICircularProgress, Title, Container } from "./Header.styles";
import { useContext } from "react";
import { LoadingContext } from "../../context/LoadingContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isContextLoading } = useContext(LoadingContext);
  return (
    <header>
      <Container>
        <Link to="/" data-testid="headerHomeLink"> 
          <Title>Podcaster</Title>
        </Link>
        {isContextLoading && <StyledMUICircularProgress />}
      </Container>
    </header>
  );
};