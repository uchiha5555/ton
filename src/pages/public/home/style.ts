import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  user-select: none;
  background: ${GV('white')};
  width: 100%;
  height: 100%;
`;

export const Whitespace = styled.div`
  margin-top: 120px;

  @media (max-width: 1280px) {
    margin-top: 100px;
  }
  @media (max-width: 734px) {
    margin-top: 64px;
  }
`