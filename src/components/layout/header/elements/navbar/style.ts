import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    align-items: stretch;
    height: 100%;

    @media (max-width: 730px) {
        display: none;
    }

    &>* {
        :not(:last-child) {
            margin-right: 6px;
        }
    }
`;

export const NavItem = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding: 6px 12px;
    height: 36px;
    color: #000;
    font-weight: 600;
    white-space: nowrap;
`