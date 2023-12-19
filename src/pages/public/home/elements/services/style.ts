import styled from "styled-components";

export const ServicesContainer = styled.div`
    margin-top: 120px;
    width: 100%;

    @media (max-width: 1280px) {
        margin-top: 100px;
    }
    @media (max-width: 734px) {
        margin-top: 64px;
    }
`;

export const ServicesWrapper = styled.div`
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

export const TitleContainer = styled.div`
    margin-bottom: 48px;

    @media (max-width: 1280px) {
        margin-bottom: 40px;
    }
    @media (max-width: 734px) {
        margin-bottom: 24px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
    margin-bottom: 16px;

    @media (max-width: 734px) {
        width: 100%;
        text-align: center;
    }
`;

export const CustomHeading = styled.div`
    color: var(--colorSecondary);
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;

    @media (max-width: 1280px) {
        font-size: 26px;
        line-height: 32px;
    }
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary);
`;

export const WalletRowItem = styled.div<{ isLast?: boolean, bg?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 522px;
    height: 100%;
    box-shadow: 0 2px 24px 0 rgba(114,138,150,.12);
    ${({ isLast }) => isLast ? `padding: 0;` : `padding: 28px 32px;`}
    border-radius: 24px;
    ${({ bg }) => bg ? `background: ${bg};` : `background: #07acff`};
    overflow: hidden;

    &>* {
        :not(:last-child) {
            margin-bottom: 24px;
        }
    }
`;

export const CardTitleContainer = styled.div<{ isLast?: boolean }>`
    display: flex;
    flex-direction: column;
    ${({ isLast }) => isLast ? `padding: 28px 32px 0 !important; color: var(--black);` : `color: var(--white);`}

    &>* {
        :not(:last-child) {
            ${({ isLast }) => !isLast ? `margin-bottom: 6px;` : `margin-bottom: 16px;`}
        }
    }
`;

export const NameContainer = styled.div`
    font-size: 16px;
    line-height: 28px;
    font-weight: 600;
`

export const ImageContainer = styled.div`
    align-self: center;
`