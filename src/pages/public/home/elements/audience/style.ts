import { Span } from "@/components/basic";
import styled from "styled-components";

export const AudienceContainer = styled.div`
    display: grid;
    width: 100%;
    background: #232328;
    grid-row-gap: 120px;
    row-gap: 120px;
    grid-template-columns: repeat(auto-fill, calc((100% / 12) * 12));

    @media (max-width: 1024px) {
        grid-row-gap: 100px;
        row-gap: 100px;
    }
    @media (max-width: 734px) {
        grid-row-gap: 72px;
        row-gap: 72px;
    }
`;

export const TitleWrapper = styled.div`
    text-align: center;
    margin-bottom: 40px;
    padding: 0 40px;
    font-size: 40px;
    line-height: 48px;
    color: #f3f3f6;
    font-weight: 700;

    @media (max-width: 1280px) {
        font-size: 26px;
        line-height: 32px;
    }

    @media (max-width: 734px) {
        font-size: 26px;
        line-height: 32px;
    }
`;

export const AudienceContentContainer = styled.div`
    width: 100%;
`;

export const AudienceContentWrapper = styled.div`
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

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0px 4px 24px rgba(0,0,0,0.08);
    background-color: #2d2d32;
    border-radius: 24px;
    width: 100%;
    position: relative;
    padding: 48px 0;

    @media (max-width: 834px) {
        padding: 20px 0 28px;
    }
`;

export const TabListContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    padding-right: 2px;
    color: var(--white);
    display: flex;
    flex-direction: column;

    &:before {
        position: absolute;
        top: 0;
        right: 0;
        width: 2px;
        height: 100%;
        content: "";
        border-radius: 2px;
        background-color: hsla(0,0%,100%,0.06);
    }

    @media (max-width: 834px) {
        display: none;
    }
`;

export const TabContentContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    color: var(--white);
    grid-template-rows: 1fr;
    display: grid;
`;

export const TabItemContainer = styled.div<{ isSelected?: boolean }>`
    position: relative;
    padding: 12px 26px 12px 40px;
    white-space: nowrap;
    display: inline-flex;
    grid-gap: 16px;
    gap: 16px;
    align-items: center;
    line-height: 28px;
    font-size: 18px;
    ${({ isSelected }) => isSelected ? `background-color: hsla(0,0%,100%,0.03);` : `background-color: none;`}
    font-weight: 600;
    transition: color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out;
    cursor: pointer;

    @media (max-width: 1280px) {
        font-size: 16px;
        line-height: 24px;
    }
    @media (max-width: 734px) {
        font-size: 14px;
        line-height: 24px;
    }

    &:before {
        ${({ isSelected }) => isSelected ? `opacity: 1;` : `opacity: 0;`}
        position: absolute;
        top: 0;
        right: -2px;
        display: block;
        width: 2px;
        height: 100%;
        content: "";
        border-radius: 2px;
        background-color: #02a8fb;
        transition: opacity .2s ease-in-out;
    }
`;

export const TabItem = styled(Span)`
    min-width: 140px;
`;

export const TabNotify = styled.div`
    position: absolute;
    bottom: 0;
    left: 40px;
    padding-right: 40px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
`;

export const TabContentWrapper = styled.div`
    padding: 0 40px;
    height: 100%;
    align-content: space-between;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    gap: 32px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 834px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 24px;
    }
    
    @media (max-width: 734px) {
        grid-template-columns: 1fr;
    }
`;

export const TabContentTitle = styled.div`
    color: #f3f3f6;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 20px;
        line-height: 28px;
    }
`;

export const TabContentDescription = styled.div`
    color: #d5d5d8;
    margin-top: 4px;
    font-size: 18px;
    line-height: 28px;

    @media (max-width: 1280px) {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    }
`;

export const TabContentButton = styled.button`
    margin-top: 24px;
    padding: 10px 20px;
    color: var(--white);
    padding: 12px 24px;
    border-radius: 40px;
    background: var(--primary);
    cursor: pointer;
`;

export const TabVideoContainer = styled.div`
    height: 408px;
    width: 408px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 834px) {
        width: 296px;
        height: 296px;
    }
`;

export const TabVideoWrapper = styled.div`
    width: 408px;
    height: 408px;
    display: flex;
    justify-content: center;
    position: relative;

    @media (max-width: 834px) {
        width: 296px;
        height: 296px;
    }
`;

export const ThumbnailImage = styled.img`
    object-fit: contain;
    position: absolute;
    z-index: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 16px;
    display: block;
    -webkit-user-drag: none;
`;

export const TabVideo = styled.video`
    z-index: 1;
    position: relative;
    pointer-events: none;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    margin: 0;
    border-radius: 16px;
    display: block;
`;

export const TabFooterContainer = styled.div`
    margin-top: 32px;
    width: 100%;
`;

export const TabFooterWrapper = styled.div`
    max-width: 1120px;
    
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1280px) {
        max-width: 936px;
    }
    @media (max-width: 1024px) {
        max-width: 100%;
    }
`;

export const TabCard = styled.div`
    position: relative;
    padding: 28px 32px;
    box-sizing: border-box;
    background: #2d2d32;
    border-radius: 24px;
    width: 100%;
    height: 100%;

    @media (max-width: 834px) {
        padding: 20px 24px;
    }

    &:hover {
        :not(:first-child) {
            opacity: 1;
        }
    }
`;

export const TabCardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 100%;
    width: 100;
`;

export const TabCardHoverIcon = styled.div`
    top: 28px;
    right: 32px;
    opacity: 0;
    position: absolute;
    transition: opacity .2s ease-in-out;
`;

export const TabCardIconWrapper = styled.div`
    height: 48px;
    width: 48px;
    margin-bottom: 24px;
    background: transparent;
    outline: none;
    overflow: hidden;
`;

export const TabCardTitle = styled.div`
    color: #f3f3f6;
    margin-bottom: 4px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 20px;
        line-height: 28px;
    }
`;

export const TabCardDescription = styled.div`
    color: #d5d5d8;
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;

    @media (max-width: 1280px) {
        font-size: 16px;
        line-height: 24px;
    }
`;