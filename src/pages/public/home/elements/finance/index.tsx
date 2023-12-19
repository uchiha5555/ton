import React from 'react'
import { ActionContainer, CardWrapper, CustomHeading, Description, FinanceContainer, FinanceWrapper, SubHeader, TitleContainer, TitleWrapper } from './style'
import { Flex, Grid, Heading, P, Span } from '@/components/basic'
import { Icon } from '@/components/custom'

const Finance = () => {
  return (
    <FinanceContainer>
        <FinanceWrapper>
            <TitleContainer>
                <TitleWrapper>
                    <CustomHeading>Unlocking freedom with Decentralized Finance</CustomHeading>
                </TitleWrapper>
            </TitleContainer>
            <Grid $style={{
                columns: '2',
                gap: '32px',
                queries: {
                    734: {
                        gap: '16px',
                        columns: '1'
                    }
                }
            }}>
                <CardWrapper>
                    <Flex $style={{
                        fDirection: 'row',
                        gap: '24px',
                        p: '28px 32px',
                        w: '100%',
                        h: '100%',
                        queries: {
                            734: {
                                fDirection: 'column'
                            }
                        }
                    }}>
                        <Flex $style={{
                            fDirection: 'column-reverse',
                            hAlign: 'flex-end',
                            w: 'max-content',
                            queries: {
                                734: {
                                    mb: '24px'
                                }
                            }
                        }}>
                            <Icon icon='Nominator' width='48px' height='48px' />
                        </Flex>
                        <Flex $style={{ fDirection: 'column', hAlign: 'space-between', w: '100%', h: '100%' }}>
                            <Flex $style={{ fDirection: 'column', gap: '4px', mb: '8px', queries: { 734: { mb: '0' } } }}>
                                <SubHeader>Nominator pools</SubHeader>
                                <Description>Use Toncoin for contribution to network security</Description>
                            </Flex>
                            <Flex $style={{ w: '100%' }}>
                                <ActionContainer>
                                    <Span $style={{
                                        size: '16px',
                                        weight: '700',
                                        queries: {
                                            734: {
                                                size: '14px'
                                            }
                                        }
                                    }}>Explore options</Span>
                                    <Icon icon='ChevronLeft' />
                                </ActionContainer>
                            </Flex>
                        </Flex>
                    </Flex>
                </CardWrapper>
                <CardWrapper>
                    <Flex $style={{
                        fDirection: 'row',
                        gap: '24px',
                        p: '28px 32px',
                        w: '100%',
                        h: '100%',
                        queries: {
                            734: {
                                fDirection: 'column'
                            }
                        }
                    }}>
                        <Flex $style={{
                            fDirection: 'column-reverse',
                            hAlign: 'flex-end',
                            w: 'max-content',
                            queries: {
                                734: {
                                    mb: '24px'
                                }
                            }
                        }}>
                            <Icon icon='Trading' width='48px' height='48px' />
                        </Flex>
                        <Flex $style={{ fDirection: 'column', hAlign: 'space-between', w: '100%', h: '100%' }}>
                            <Flex $style={{ fDirection: 'column', gap: '4px', mb: '8px', queries: { 734: { mb: '0' } } }}>
                                <SubHeader>Buy and Trade</SubHeader>
                                <Description>Swap currencies on decentralized exchanges.</Description>
                            </Flex>
                            <Flex $style={{ w: '100%' }}>
                                <ActionContainer>
                                    <Span $style={{
                                        size: '16px',
                                        weight: '700',
                                        queries: {
                                            734: {
                                                size: '14px'
                                            }
                                        }
                                    }}>Swap currencies</Span>
                                    <Icon icon='ChevronLeft' />
                                </ActionContainer>
                            </Flex>
                        </Flex>
                    </Flex>
                </CardWrapper>
                <CardWrapper>
                    <Flex $style={{
                        fDirection: 'row',
                        gap: '24px',
                        p: '28px 32px',
                        w: '100%',
                        h: '100%',
                        queries: {
                            734: {
                                fDirection: 'column'
                            }
                        }
                    }}>
                        <Flex $style={{
                            fDirection: 'column-reverse',
                            hAlign: 'flex-end',
                            w: 'max-content',
                            queries: {
                                734: {
                                    mb: '24px'
                                }
                            }
                        }}>
                            <Icon icon='CrossChain' width='48px' height='48px' />
                        </Flex>
                        <Flex $style={{ fDirection: 'column', hAlign: 'space-between', w: '100%', h: '100%' }}>
                            <Flex $style={{ fDirection: 'column', gap: '4px', mb: '8px', queries: { 734: { mb: '0' } } }}>
                                <SubHeader>Cross-chain transfers</SubHeader>
                                <Description>Transfer your tokens from Ethereum to TON.</Description>
                            </Flex>
                            <Flex $style={{ w: '100%' }}>
                                <ActionContainer>
                                    <Span $style={{
                                        size: '16px',
                                        weight: '700',
                                        queries: {
                                            734: {
                                                size: '14px'
                                            }
                                        }
                                    }}>Go to bridge</Span>
                                    <Icon icon='ChevronLeft' />
                                </ActionContainer>
                            </Flex>
                        </Flex>
                    </Flex>
                </CardWrapper>
                <CardWrapper>
                    <Flex $style={{
                        fDirection: 'row',
                        gap: '24px',
                        p: '28px 32px',
                        w: '100%',
                        h: '100%',
                        queries: {
                            734: {
                                fDirection: 'column'
                            }
                        }
                    }}>
                        <Flex $style={{
                            fDirection: 'column-reverse',
                            hAlign: 'flex-end',
                            w: 'max-content',
                            queries: {
                                734: {
                                    mb: '24px'
                                }
                            }
                        }}>
                            <Icon icon='Accept' width='48px' height='48px' />
                        </Flex>
                        <Flex $style={{ fDirection: 'column', hAlign: 'space-between', w: '100%', h: '100%' }}>
                            <Flex $style={{ fDirection: 'column', gap: '4px', mb: '8px', queries: { 734: { mb: '0' } } }}>
                                <SubHeader>Accept payments effortlessly</SubHeader>
                                <Description>You are able to accept Toncoin worldwide, directly and at low fees.</Description>
                            </Flex>
                            <Flex $style={{ w: '100%' }}>
                                <ActionContainer>
                                    <Span $style={{
                                        size: '16px',
                                        weight: '700',
                                        queries: {
                                            734: {
                                                size: '14px'
                                            }
                                        }
                                    }}>Accept payments</Span>
                                    <Icon icon='ChevronLeft' />
                                </ActionContainer>
                            </Flex>
                        </Flex>
                    </Flex>
                </CardWrapper>
            </Grid>
        </FinanceWrapper>
    </FinanceContainer>
  )
}

export default Finance