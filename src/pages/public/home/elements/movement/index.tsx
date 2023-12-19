import React from 'react'
import { ActionContainer, ButtonGroupContainer, CardButton, CardContainer, CardContentWrapper, CardDescription, CardDesktopImage, CardImageContainter, CardMobileImage, CardSubTitle, CounterContainer, CounterContentContainer, CounterItem, CounterItemContainer, CounterItemWrapper, CustomHeading, MovementContainer, MovementWrapper, TitleContainer, TitleWrapper } from './style'
import { Flex, Grid, Span } from '@/components/basic'
import { Icon } from '@/components/custom'
import { GV } from '@/utils/style.util'


import Desktop from '@/assets/img/empower_desktop.png';
import Mobile from '@/assets/img/empower_mobile.png';

const Movement = () => {
  return (
    <MovementContainer>
        <MovementWrapper>
            <TitleContainer>
                <TitleWrapper>
                    <CustomHeading>Be part of TON movement</CustomHeading>
                </TitleWrapper>
            </TitleContainer>
            <Grid $style={{
                columns: '2',
                gap: '32px',
                queries: {
                    734: {
                        columns: '1'
                    }
                }
            }}>
                <CardContainer bg='linear-gradient(90.41deg,#458cfe -0.8%,#7dd8fd 126.74%)'>
                    <CardContentWrapper>
                        <CardSubTitle>Join TON Community</CardSubTitle>
                        <CardDescription>Ask questions, share ideas and participate in breakfasts, hubs, local events with people who love TON.</CardDescription>
                        <ButtonGroupContainer>
                            <CardButton>
                                <Flex $style={{ fDirection: 'row', gap: '6px' }}>
                                    <Icon icon='Telegram' width='24px' height='24px' color={GV('primary')} />
                                    <Span>Telegram channel</Span>
                                </Flex>
                            </CardButton>
                            <ActionContainer>
                                <Span $style={{
                                    size: '16px',
                                    weight: '700',
                                    queries: {
                                        734: {
                                            size: '14px'
                                        }
                                    }
                                }}>Explore all</Span>
                                <Icon icon='ChevronLeft' />
                            </ActionContainer>
                        </ButtonGroupContainer>
                    </CardContentWrapper>
                    <CounterContainer>
                        <CounterContentContainer>
                            <CounterItemContainer>
                                <CounterItemWrapper>
                                    <CounterItem>2</CounterItem>
                                </CounterItemWrapper>
                            </CounterItemContainer>
                            <CounterItemContainer>
                                <CounterItemWrapper>
                                    <CounterItem>6</CounterItem>
                                </CounterItemWrapper>
                                <CounterItemWrapper>
                                    <CounterItem>2</CounterItem>
                                </CounterItemWrapper>
                                <CounterItemWrapper>
                                    <CounterItem>5</CounterItem>
                                </CounterItemWrapper>
                            </CounterItemContainer>
                            <CounterItemContainer>
                                <CounterItemWrapper>
                                    <CounterItem>0</CounterItem>
                                </CounterItemWrapper>
                                <CounterItemWrapper>
                                    <CounterItem>8</CounterItem>
                                </CounterItemWrapper>
                                <CounterItemWrapper>
                                    <CounterItem>9</CounterItem>
                                </CounterItemWrapper>
                            </CounterItemContainer>
                        </CounterContentContainer>
                        <CardDescription>Total community members</CardDescription>
                    </CounterContainer>
                </CardContainer>
                <CardContainer bg='#12172c'>
                    <Grid $style={{ columns: '1', gap: '20px' }}>
                        <CardContentWrapper>
                            <CardSubTitle>Empower TON Community</CardSubTitle>
                            <CardDescription>Join TON Society to meet new people, participate in community activities and earn rewards.</CardDescription>
                            <ButtonGroupContainer>
                                <CardButton>
                                    <Span>Go to TON Society</Span>
                                </CardButton>
                            </ButtonGroupContainer>
                        </CardContentWrapper>
                        <CardImageContainter>
                            <CardDesktopImage src={Desktop} />
                            {/* <CardMobileImage src={Mobile} /> */}
                        </CardImageContainter>
                    </Grid>
                </CardContainer>
            </Grid>
        </MovementWrapper>
    </MovementContainer>
  )
}

export default Movement