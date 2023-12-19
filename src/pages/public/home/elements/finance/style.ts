import styled from "styled-components";

export const FinanceContainer = styled.div`
    margin-top: 120px;
    width: 100%;

    @media (max-width: 1280px) {
        margin-top: 100px;
    }
    @media (max-width: 734px) {
        margin-top: 64px;
    }
`;

export const FinanceWrapper = styled.div`
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
    width: 60%;
    text-align: left;
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

export const CardWrapper = styled.div`
    background: #f7f9fb;
    border-radius: 24px;
    width: 100%;
    height: 100%;

    @media (max-width: 734px) {
        margin-bottom: 16px;
    }
`;

export const SubHeader = styled.div`
    color: var(--colorSecondary);
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 20px;
        line-height: 28px;
    }
`;

export const Description = styled.div`
    color: var(--subtitle);
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;

    @media (max-width: 1280px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary);
`;