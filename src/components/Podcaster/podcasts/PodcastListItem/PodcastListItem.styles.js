import styled from "styled-components";

export const PodcastListItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 250px;
  border-radius: 8px;
  width: 288px;
  margin: 32px 48px 80px 48px;
  padding: 0 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  div {
    position: relative;
    top: -48px;
    width: 100%;
    height: 40%;
  }

  h3 {
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  h4 {
    font-weight: 400;
    color: grey;
  }

  img {
    position: relative;
    top: -64px;
    left: 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
`;






