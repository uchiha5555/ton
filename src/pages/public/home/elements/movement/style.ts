import Image from "@/components/basic/img";
import styled from "styled-components";

export const MovementContainer = styled.div`
    margin-top: 120px;
    width: 100%;

    @media (max-width: 1280px) {
        margin-top: 100px;
    }
    @media (max-width: 734px) {
        margin-top: 64px;
    }
`;

export const MovementWrapper = styled.div`
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

export const CardContainer = styled.div<{ bg?: string }>`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    ${({ bg }) => bg ? `background: ${bg};` : ``}
    border-radius: 24px;
    padding: 28px 32px;
    height: 100%;
    box-sizing: border-box;
`;

export const CardContentWrapper = styled.div`
    color: var(--white);
    display: flex;
    flex-direction: column;
    grid-gap: 4px;
    gap: 4px;
    box-sizing: border-box;
`;

export const CardSubTitle = styled.div`
    color: var(--white);
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 20px;
        line-height: 28px;
    }
`;

export const CardDescription = styled.div`
    color: var(--white);
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;

    @media (max-width: 1024px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const ButtonGroupContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16px;
    grid-gap: 24px;
    gap: 24px;
    align-items: center;
`;

export const CardButton = styled.button`
    color: var(--primary);
    background: var(--white);
    padding: 10px 20px;
    border-radius: 40px;
    font-weight: 700;
    line-height: 24px;
    font-size: 16px;

    @media (max-width: 734px) {
        padding: 8px 16px;  
    }
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 58px 0;
    grid-gap: 12px;
    gap: 12px;
`;

export const CounterContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 16px;
    gap: 16px;
`;

export const CounterItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    grid-gap: 4px;
    gap: 4px;
    border-radius: 10px;
`;

export const CounterItemWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 18px;
    background-color: var(--white);
    color: var(--colorSecondary);
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    position: relative;
    opacity: 1;
    transition: opacity .2s ease-in-out;

    @media (max-width: 1024px) {
        padding: 12px;
    }
`;

export const CounterItem = styled.div`
    height: 24px;
    width: 13px;
    margin-top: 0;
    position: relative;
    top: -3px;
    left: -1px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;

    @media (max-width: 1280px) {
        top: 1;
        left: 1;
    }

    @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 28px;
        top: -2px;
        left: 0;
    }
`;

export const CardImageContainter = styled.div`
    height: 188px;

    @media (max-width: 834px) {
        height: 140px;
    }

    @media (max-width: 734px) {
        max-width: 352px;
        height: 240px;
    }
`;

export const CardDesktopImage = styled.img`
    right: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    -o-object-fit: contain;
    object-fit: contain;

    /* @media (max-width: 734px) {
        display: none;
    } */
`;

export const CardMobileImage = styled.img`
    right: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    -o-object-fit: contain;
    object-fit: contain;

    @media (min-width: 734px) {
        display: none;
    }
`