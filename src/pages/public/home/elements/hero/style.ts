import { GV } from "@/utils/style.util";
import styled from "styled-components";
import { TypeAnimation } from 'react-type-animation';

export const HeroContainer = styled.div`
    max-width: 1120px;
    margin: 0 auto;
`;

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    min-height: 312px;
    padding: calc(64px + 120px) 0 132px;

    @media (max-width: 1280px) {
        padding: calc(64px + 100px) 0 94px;
    }
`;

export const HeroButton = styled.button`
    color: ${GV('colorSecondary')};
    border: 1.5px solid #e9eef1;
    padding: 16px 32px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: 700;

    @media (max-width: 736px) {
        padding: 12px 24px;
    }
`;

export const CustomHeading = styled.h1`
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.3rem;
    width: 100vw;
    font-size: 95px;
    line-height: 124px;
    overflow: visible;
    padding-bottom: 32px;
    white-space: pre-wrap;
    color: #000;

    @media (max-width: 1260px) {
        font-size: 86px;
    }
    @media (max-width: 1024px) {
        font-size: 64px;
        line-height: 96px;
    }
    @media (max-width: 836px) {
        font-size: 56px;
        line-height: 88px;
    }
`;

export const MobileStaticLetter = styled.div`
    display: none;
    line-height: 58px;
    font-size: 56px;
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.05rem;

    @media (max-width: 736px) {
        display: inline-flex;
    }
`

export const StaticLetter = styled.span`
    font-size: 166px;
    font-weight: 700;
    line-height: 172px;
    text-align: center;
    letter-spacing: -0.05rem !important;
    display: inline;
    background: linear-gradient(88.93deg, #2A82EB 18.91%, #288BEE 79.91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1260px) {
        font-size: 138px;
    }
    @media (max-width: 1024px) {
        font-size: 112px;
        line-height: 96px;
    }
    @media (max-width: 836px) {
        font-size: 96px;
        line-height: 80px;
    }
    @media (max-width: 736px) {
        font-size: 62px;
        line-height: 58px;
    }
`

export const CustomDescription = styled.div`
    max-width: 600px;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    margin: 0 auto;
    color: #191f2f;
    padding-right: 40px;
    text-align: center;

    @media (max-width: 1120px) {
        padding: 0 64px;
    }

    @media (max-width: 834px) {
        font-size: 16px;
        line-height: 24px;
        padding: 0 32px;
    }

    @media (max-width: 600px) {
        padding: 0 24px;
    }
`;

export const TypistContainer = styled(TypeAnimation)`
    font-size: 166px;
    font-weight: 700;
    line-height: 172px;
    text-align: center;
    letter-spacing: -0.05rem !important;
    display: inline;
    background: linear-gradient(88.93deg, #2A82EB 18.91%, #288BEE 79.91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1260px) {
        font-size: 138px;
    }
    @media (max-width: 1024px) {
        font-size: 112px;
        line-height: 96px;
    }
    @media (max-width: 836px) {
        font-size: 96px;
        line-height: 80px;
    }
    @media (max-width: 736px) {
        font-size: 62px;
        line-height: 58px;
    }
`