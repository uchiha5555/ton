import styled from "styled-components";

export const CryptocurrencyContainer = styled.div`
    margin-top: 120px;
    width: 100%;

    @media (max-width: 1280px) {
        margin-top: 100px;
    }
    @media (max-width: 734px) {
        margin-top: 64px;
    }
`

export const CryptocurrencyWrapper = styled.div`
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

export const Subheader = styled.h4`
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
    color: #04060B;
    margin-bottom: 12px;

    @media (max-width: 1280px) {
        font-size: 26px;
        line-height: 32px;
    }
`;

export const CustomDescription = styled.div`
    padding-right: 40px;
    color: var(--subtitle);
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;

    @media (max-width: 1280px) {
        font-size: 16px;
        line-height: 24px;
    }

    @media (max-width: 734px) {
        text-align: center;
    }
`;

export const GetCoinButton = styled.button`
    width: fit-content;
    padding: 16px 32px;
    color: var(--white);
    background: #0098ea;
    border-radius: 40px;

    font-size: 16px;
    line-height: 24px;
    font-weight: 700;

    @media (max-width: 1280px) {
        padding: 14px 28px;
    }

    @media (max-width: 734px) {
        padding: 12px 24px;
        font-size: 14px;
        line-height: 24px;
    }
`;

export const StatusContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;

    padding-left: 16px;
    padding-right: 16px;
`;

export const StatusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: #f7f9fb;
    border-radius: 24px;
    padding: 32px 40px 16px;
    max-width: 600px;
    width: 100%;
`;

export const CoinWidgetTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dfe5e8;
    padding-bottom: 20px;
`;

export const CoinWidgetMiddleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 1fr;
    padding: 20px 0;
`;

export const CoinWidgetBottomContainer = styled.div`
    padding-top: 20px;
    border-top: 1px solid #dfe5e8;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
`;

export const MiddleWidgetLabel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 6px;

    :not(:last-child) {
        border-right: 1px solid #dfe5e8;
    }
`;

export const GraphContainer = styled.div`
    width: 152px;
    height: 43px;
    border-radius: 20px;

    @media (max-width: 1024px) {
        width: 100px;
    }
`;

export const GraphText = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    color: var(--primary);

    @media (max-width: 1024px) {
        font-size: 12px;
        line-height: 18px;
    }
`

export const SignContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: var(--caption);
    font-weight: 400;

    @media (max-width: 1024px) {
        font-size: 14px;
        line-height: 20px;

        svg {
            width: 14px;
            height: 14px;
        }
    }
    
    &>* {
        :not(:last-child) {
            margin-right: 4px;
            
            @media (max-width: 1024px) {
                margin-right: 0px;
            }
        }
    }
`;

export const CustomCaption = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: var(--caption);

    @media (max-width: 1024px) {
        font-size: 14px;
        line-height: 20px;
    }
`;

export const CustomStatusValue = styled.span`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: var(--colorSecondary);

    @media (max-width: 1024px) {
        font-size: 20px;
        line-height: 28px;
    }
`