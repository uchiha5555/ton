import React from 'react'
import { ActionContainer, BadgeContainer, ButtonGroupContainer, CardButton, CardContainer, CardContentWrapper, CardDescription, CardImageContainer, CardImageWrapper, CardSubTitle, CustomHeading, CustomImage, FutureContainer, FutureWrapper, TitleContainer, TitleWrapper } from './style'
import { Flex, Grid, Span } from '@/components/basic'

import Internet from '@/assets/img/internet.png';
import TonStorage from '@/assets/img/ton_storage.png';
import { Icon } from '@/components/custom';

const Future = () => {
  return (
    <FutureContainer>
        <FutureWrapper>
            <TitleContainer>
                <TitleWrapper>
                    <CustomHeading>Dive into the future of Internet</CustomHeading>
                </TitleWrapper>
            </TitleContainer>
            <Grid $style={{ columns: '1', gap: '32px' }}>
                <CardContainer bg='linear-gradient(80deg, #458CFE 0%, #7DD8FD 100%)'>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'center',
                        gap: '48px',
                        queries: {
                            734: {
                                fDirection: 'column'
                            }
                        }
                    }}>
                        <CardContentWrapper>
                            <Flex $style={{ fDirection: 'column', hAlign: 'center', gap: '12px' }}>
                                <BadgeContainer>Version 1.0</BadgeContainer>
                                <CardSubTitle>TON Sites, TON Proxy, TON WWW</CardSubTitle>
                                <CardDescription>Try the decentralized, secure, reliable, Internet of the future with TON services.</CardDescription>
                            </Flex>
                            <ButtonGroupContainer>
                                <CardButton>Read more</CardButton>
                                <ActionContainer>
                                    <Span $style={{
                                        size: '16px',
                                        weight: '700',
                                        queries: {
                                            734: {
                                                size: '14px'
                                            }
                                        }
                                    }}>Roadmap</Span>
                                    <Icon icon='ChevronLeft' />
                                </ActionContainer>
                            </ButtonGroupContainer>
                        </CardContentWrapper>
                        <CardImageContainer>
                            <CardImageWrapper>
                                <CustomImage src={Internet} alt='' />
                            </CardImageWrapper>
                        </CardImageContainer>
                    </Flex>
                </CardContainer>
                <CardContainer bg='linear-gradient(80deg, #6E78FF 0%, #96A6FF 100%)'>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'center',
                        gap: '48px',
                        queries: {
                            734: {
                                fDirection: 'column'
                            }
                        }
                    }}>
                        <CardContentWrapper>
                            <Flex $style={{ fDirection: 'column', hAlign: 'center', gap: '12px' }}>
                                <BadgeContainer>Version 1.0</BadgeContainer>
                                <CardSubTitle>TON Storage</CardSubTitle>
                                <CardDescription>Keep your data safe and secure with the decentralized storage of the future.</CardDescription>
                            </Flex>
                            <ButtonGroupContainer>
                                <CardButton>Read more</CardButton>
                                <ActionContainer>
                                    <Span $style={{
                                        size: '16px',
                                        weight: '700',
                                        queries: {
                                            734: {
                                                size: '14px'
                                            }
                                        }
                                    }}>Roadmap</Span>
                                    <Icon icon='ChevronLeft' />
                                </ActionContainer>
                                <ActionContainer isLast>
                                    <Span $style={{
                                        size: '16px',
                                        weight: '700',
                                        queries: {
                                            734: {
                                                size: '14px'
                                            }
                                        }
                                    }}>Dev docs</Span>
                                    <Icon icon='ChevronLeft' />
                                </ActionContainer>
                            </ButtonGroupContainer>
                        </CardContentWrapper>
                        <CardImageContainer>
                            <CardImageWrapper>
                                <CustomImage src={TonStorage} alt='' />
                            </CardImageWrapper>
                        </CardImageContainer>
                    </Flex>
                </CardContainer>
            </Grid>
        </FutureWrapper>
    </FutureContainer>
  )
}

export default Future