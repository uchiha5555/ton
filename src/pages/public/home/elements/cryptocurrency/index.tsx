import React from 'react'
import { CoinWidgetBottomContainer, CoinWidgetMiddleContainer, CoinWidgetTopContainer, CryptocurrencyContainer, CryptocurrencyWrapper, CustomCaption, CustomDescription, CustomStatusValue, GetCoinButton, GraphContainer, GraphText, MiddleWidgetLabel, SignContainer, StatusContainer, StatusWrapper, Subheader } from './style'
import { Flex, Grid, P, Span } from '@/components/basic'
import { Icon } from '@/components/custom'
import Image from '@/components/basic/img';

import Graph from '@/assets/img/graph.png';

const Cryptocurrency = () => {
  return (
    <CryptocurrencyContainer>
        <CryptocurrencyWrapper>
            <Grid $style={{
                columns: '2',
                queries: {
                    734: {
                        columns: '1',
                        gap: '32px'
                    }
                }
            }}>
                <Flex $style={{
                    fDirection: 'column',
                    hAlign: 'center',
                    p: '0 16px',
                    w: '100%',
                    queries: {
                        734: {
                            vAlign: 'center'
                        }
                    }
                }}>
                    <Flex $style={{
                        fDirection: 'column',
                        mb: '24px',
                        queries: {
                            734: {
                                vAlign: 'center'
                            }
                        }
                    }}>
                        <Subheader>Cryptocurrency <div>is the heart of TON</div></Subheader>
                        <CustomDescription>Toncoin is TON's native cryptocurrency. It is used for network operations, transactions, games or collectibles built on TON.</CustomDescription>
                    </Flex>
                    <GetCoinButton>Get Toncoin</GetCoinButton>
                </Flex>
                <StatusContainer>
                    <StatusWrapper>
                        <CoinWidgetTopContainer>
                            <Flex $style={{ fDirection: 'row', gap: '16px' }}>
                                <Icon icon='Coin' width='60px' height='60px' />
                                <Flex $style={{ fDirection: 'column' }}>
                                    <CustomCaption>Toncoin (TON)</CustomCaption>
                                    <Span $style={{ color: 'colorSecondary', size: '24px', weight: '600' }}>$2.18</Span>
                                </Flex>
                            </Flex>
                            <Flex $style={{ fDirection: 'column', h: '100%' }}>
                                <GraphContainer>
                                    <Image src={Graph} alt='' $style={{ w: '100%', h: '100%', bradius: '0' }} />
                                </GraphContainer>
                                <GraphText>+0.36% last 24h</GraphText>
                            </Flex>
                        </CoinWidgetTopContainer>
                        <CoinWidgetMiddleContainer>
                            <MiddleWidgetLabel>
                                <SignContainer>
                                    <CustomCaption>Rank</CustomCaption>
                                    <Icon icon='Sign' />
                                </SignContainer>
                                <CustomStatusValue>#15</CustomStatusValue>
                            </MiddleWidgetLabel>
                            <MiddleWidgetLabel>
                                <CustomCaption>Market Cap</CustomCaption>
                                <CustomStatusValue>$7.52B</CustomStatusValue>
                            </MiddleWidgetLabel>
                            <MiddleWidgetLabel>
                                <CustomCaption>Volumn</CustomCaption>
                                <CustomStatusValue>$50.16M</CustomStatusValue>
                            </MiddleWidgetLabel>
                        </CoinWidgetMiddleContainer>
                        <CoinWidgetBottomContainer>
                            <P $style={{ color: 'caption' }}>Powered by <Span $style={{ decorator: 'underline' }}>CoinMarketCap</Span></P>
                        </CoinWidgetBottomContainer>
                    </StatusWrapper>
                </StatusContainer>
            </Grid>
        </CryptocurrencyWrapper>
    </CryptocurrencyContainer>
  )
}

export default Cryptocurrency