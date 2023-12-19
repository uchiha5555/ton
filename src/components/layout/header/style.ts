import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const HeaderContainer = styled.header<{ isTop?: boolean }>`
  position: fixed;
  /* ${({ isTop }) =>
    !isTop
      ? `position: fixed;`
      : `position: absolute;`} */
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  width: 100%;
  min-height: 69px;
  z-index: 5;

  @media (max-width: 730px) {
    padding: 8px 16px 6px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  max-width: 1120px;
  width: 100%;
  height: 100%;

  @media (max-width: 1120px) {
    padding: 0 16px;
  }

  @media (max-width: 730px) {
    padding: 0;
  }
`;

export const NavList = styled.div`
  display: none;
  justify-content: space-between;
  padding: 8px 0;
  width: 100%;

  &>* {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  @media (max-width: 730px) {
    display: flex;
    padding: 8px 0 0;
  }
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  border-radius: 10px;
  background: rgba(118,152,187,.07);
  color: #04060B;
  width: 100%;
  font-size: 14px;
`