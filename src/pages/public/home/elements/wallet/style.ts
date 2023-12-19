import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const WalletContainer = styled.div`
    padding: 100px 0 76px;
    background: #f7f9fb;
    border-radius: 24px;
    width: 100%;
    margin-left: 0;
`;

export const TitleContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

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

export const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 28px;
`;

export const CustomHeading = styled.h3`
    color: ${GV('colorSecondary')};
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
    max-width: 700px;

    @media (max-width: 1280px) {
        font-size: 32px;
        line-height: 40px;
    }

    @media (max-width: 734px) {
        font-size: 26px;
        line-height: 32px;
    }
`;

export const CustomSubHeading = styled.span`
    display: inline-block;
    align-items: center;
    background: linear-gradient(90deg,#0198ea 51.35%,#14bcfa 80.71%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: pre-wrap;

    font-size: 48px;
    line-height: 56px;
    font-weight: 700;

    @media (max-width: 1280px) {
        font-size: 32px;
        line-height: 40px;
    }

    @media (max-width: 734px) {
        font-size: 26px;
        line-height: 32px;
    }
`;

export const CustomButton = styled.button`
    padding: 16px 32px;
    border-radius: 40px;
    background: #0098ea;
    border: none;
    text-align: center;
    display: inline-block;
    height: max-content;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 734px) {
        display: none;
    }
`;

export const MobileCustomButton = styled.button`
    display: none;
    padding: 16px 32px;
    border-radius: 40px;
    background: #0098ea;
    border: none;
    text-align: center;
    height: max-content;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 734px) {
        display: block;
    }
`;

export const WalletRow = styled.div`
    display: grid;
    grid-auto-flow: column;
    padding: 24px calc((100% - 1120px)/2);

    @media (max-width: 1280px) {
        padding: 24px calc((100% - 936px)/2);
    }

    @media (max-width: 734px) {
        padding: 24px 40px;
    }

    &>* {
        :not(:last-child) {
            margin-right: 32px;
        }
    }
`;

export const WalletRowItem = styled.div<{ even?: boolean, bg?: string }>`
    display: flex;
    ${({ even }) => even ? `flex-direction: column-reverse;` : `flex-direction: column;`}
    justify-content: space-between;
    width: 352px;
    max-height: 400px;
    height: 100%;
    box-shadow: 0 2px 24px 0 rgba(114,138,150,.12);
    padding: 28px 32px;
    border-radius: 24px;
    ${({ bg }) => bg ? `background: ${bg};` : `background: #07acff`};
    overflow: hidden;

    ${({ even }) => !even
    ? `&>* {
            :not(:last-child) {
                margin-bottom: 24px;
            }
        }`
    : `&>* {
            :not(:first-child) {
                margin-bottom: 24px;
            }
        }`}

    @media (max-width: 1280px) {
        max-height: 400px;
    }
`;

export const CustomImage = styled.img`
    width: 64px;
    height: 64px;
    position: relative;
    top: 10px;

    @media (max-width: 1280px) {
        width: 48px;
        height: 48px;
    }
    @media (max-width: 734px) {
        width: 34px;
        height: 34px;
    }
`

export const ImageContainer = styled.div`
    align-self: center;
`