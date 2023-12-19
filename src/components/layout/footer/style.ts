import styled from "styled-components";

export const FooterContainer = styled.div`
    margin-top: 120px;
    width: 100%;

    @media (max-width: 1280px) {
        margin-top: 100px;
    }
    @media (max-width: 734px) {
        margin-top: 64px;
    }
`;

export const FooterWrapper = styled.div`
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1280px) {
        max-width: 936px;
    }
    @media (max-width: 1024px) {
        max-width: calc(100% - 80px);
    }
    @media (max-width: 734px) {
        max-width: calc(100% - 32px);
    }
`;

export const FooterContentContainer = styled.div`
    position: relative;
    padding-bottom: 24px;
`;

export const FooterListItemContainer = styled.div``

export const FooterListItemTitle = styled.div`
    color: var(--colorSecondary);
    line-height: 24px;
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 1280px) {
        font-size: 16px;
    }
`;

export const FooterItemList = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;
`;

export const FooterItem = styled.div`
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: var(--caption);
`;

export const RegionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 6px;
    padding: 6px 12px;

    @media (max-width: 734px) {
        display: none;
    }
`

export const Divider = styled.div`
    background: #dfe5e8;
    width: 100%;
    height: 1px;
    opacity: .5;
`;

export const CopyrightContainer = styled.div`
    padding: 24px 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1280px) {
        padding: 24px 0 32px;
    }
    @media (max-width: 734px) {
        padding: 26px 0;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    grid-gap: 4px;
    gap: 4px;
`