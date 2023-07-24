import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const ContainerStyled = styled.div`
  height: 80px;
  padding: 0 42px;
  margin: 16px;
  display: flex;  
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: space-between;
`;
export const MUICircularProgressStyled = styled(CircularProgress)`
  color: #4f8ec3 !important;
`;
export const TitleStyled = styled.h1`
color: #4f8ec3;
font-weight: 500;
font-size: 20px;
`;

