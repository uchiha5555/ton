import Image from "@/components/basic/img";
import styled from "styled-components";

export const FutureContainer = styled.div`
    margin-top: 120px;
    width: 100%;

    @media (max-width: 1280px) {
        margin-top: 100px;
    }
    @media (max-width: 734px) {
        margin-top: 64px;
    }
`;

export const FutureWrapper = styled.div`
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

export const CardContainer = styled.div<{ bg?: string }>`
    border-radius: 24px;
    ${({ bg }) => bg && `background: ${bg};`}
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const CardContentWrapper = styled.div`
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
    padding: 40px 0 40px 48px;
`;

export const CardImageContainer = styled.div`
    padding: 0 48px 0 0;
    position: relative;
    display: flex;
    flex: 1 1;
    align-items: center;
    align-self: stretch;
    justify-content: flex-end;
    box-sizing: border-box;
    width: 100%;

    @media (max-width: 1280px) {
        padding: 0;
    }
    @media (max-width: 734px) {
        padding: 0 48px;
        justify-content: center;
    }
`;

export const CardImageWrapper = styled.div`
    height: 100%;
    max-height: 100%;
    display: flex;
    justify-content: flex-end;
    width: 496px;
    box-sizing: border-box;

    @media (max-width: 1280px) {
        width: 100%;
        max-width: 496px;
        bottom: 0;
        position: relative;
    }

    @media (max-width: 734px) {
        max-height: 180px;
        width: auto;
    }
`

export const CustomImage = styled.img`
    object-fit: contain;
    border-radius: 16px;
    object-position: center bottom;
    width: 100%;
    height: 100%;

    @media (max-width: 734px) {
        max-height: 180px;
        width: auto;
    }
`;

export const BadgeContainer = styled.div`
    text-transform: uppercase;
    color: var(--basic-white);
    background: rgba(255,255,255,.07);
    padding: 6px 10px;
    font-size: 16px;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    padding: 4px 8px;
    border-radius: 8px;
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    width: max-content;
    height: max-content;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
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
    color: var(--white);
`;