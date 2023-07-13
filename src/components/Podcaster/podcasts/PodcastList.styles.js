import styled from "styled-components";

export const PodcastListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ListStyled = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 128px;
  
  a {
    color: #000;
  }
`;

export const SearchbarStyled = styled.div`
  position: absolute;
  top: 128px;
  right: 32px;
`;

export const SearchBarInnerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 264px;
  align-items: center;
  
  input {
    padding: 12px 16px;
    font-family: "Inter Tight", sans-serif;
  }
`;