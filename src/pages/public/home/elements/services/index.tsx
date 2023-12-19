import React from 'react'
import { ActionContainer, CardTitleContainer, CustomHeading, ImageContainer, NameContainer, ServicesContainer, ServicesWrapper, TitleContainer, TitleWrapper, WalletRowItem } from './style'
import { Flex, Grid, P, Span } from '@/components/basic'
import { Icon } from '@/components/custom'
import Image from '@/components/basic/img';

import TopMobile from '@/assets/img/ton_mobile.png';
import Domains from '@/assets/img/domains.png';
import Fragment from '@/assets/img/fragment.png';
import GetGems from '@/assets/img/getgems.png';
import Allapps from '@/assets/img/all_apps.png';

const Services = () => {
  return (
    <ServicesContainer>
        <ServicesWrapper>
            <TitleContainer>
                <TitleWrapper>
                    <CustomHeading>Explore apps and services</CustomHeading>
                    <ActionContainer>
                        <Span $style={{
                            size: '16px',
                            weight: '700',
                            queries: {
                                734: {
                                    size: '14px'
                                }
                            }
                        }}>Explore all ecosystem</Span>
                        <Icon icon='ChevronLeft' />
                    </ActionContainer>
                </TitleWrapper>
            </TitleContainer>
            <Grid $style={{
                columns: '3',
                gap: '32px',
                queries: {
                    1024: {
                        columns: '2',
                        gap: '16px'
                    },
                    734: {
                        columns: '1',
                        gap: '16px',
                    }
                }
            }}>
                <WalletRowItem bg='linear-gradient(175.99deg, #428CEF 2.23%, #88BDFF 98.02%)'>
                    <CardTitleContainer>
                        <Flex $style={{ hAlign: 'space-between', w: '100%' }}>
                            <NameContainer>
                                <Icon icon='TopMobile' width='79px' height='28px' />
                            </NameContainer>
                            <Icon icon='ArrowIcon' />
                        </Flex>
                        <Flex $style={{ fDirection: 'column', gap: '4px' }}>
                            <P $style={{ size: '20px', weight: '600' }}>Anonymous eSIM</P>
                            <Span $style={{ size: '16px', weight: '400' }}>Affordable and secure mobile internet provider for home and travel.</Span>
                        </Flex>
                    </CardTitleContainer>
                    <ImageContainer>
                        <Image src={TopMobile} alt='' $style={{ maxW: '247px' }} />
                    </ImageContainer>
                </WalletRowItem>
                <WalletRowItem bg='#1E2531'>
                    <CardTitleContainer>
                        <Flex $style={{ hAlign: 'space-between', w: '100%' }}>
                            <NameContainer>
                                <Icon icon='Domains' width='119px' height='28px' />
                            </NameContainer>
                            <Icon icon='ArrowIcon' />
                        </Flex>
                        <Flex $style={{ fDirection: 'column', gap: '4px' }}>
                            <P $style={{ size: '20px', weight: '600' }}>Easy-to-remember address</P>
                            <Span $style={{ size: '16px', weight: '400' }}>Your wallet or website can be easily found in the TON network</Span>
                        </Flex>
                    </CardTitleContainer>
                    <ImageContainer>
                        <Image src={Domains} alt='' $style={{ maxW: '247px' }} />
                    </ImageContainer>
                </WalletRowItem>
                <WalletRowItem bg='#262E37'>
                    <CardTitleContainer>
                        <Flex $style={{ hAlign: 'space-between', w: '100%' }}>
                            <NameContainer>
                                <Icon icon='Fragment' width='121px' height='28px' />
                            </NameContainer>
                            <Icon icon='ArrowIcon' />
                        </Flex>
                        <Flex $style={{ fDirection: 'column', gap: '4px' }}>
                            <P $style={{ size: '20px', weight: '600' }}>Buy Telegram Premium</P>
                            <Span $style={{ size: '16px', weight: '400' }}>Use your crypto wallet to pay for subscriptions for yourself and friends</Span>
                        </Flex>
                    </CardTitleContainer>
                    <ImageContainer>
                        <Image src={Fragment} alt='' $style={{ maxW: '247px' }} />
                    </ImageContainer>
                </WalletRowItem>
                <WalletRowItem bg='#4190F7'>
                    <CardTitleContainer>
                        <Flex $style={{ hAlign: 'space-between', w: '100%' }}>
                            <NameContainer>
                                <Icon icon='NFT' width='172px' height='28px' />
                            </NameContainer>
                            <Icon icon='ArrowIcon' />
                        </Flex>
                        <Flex $style={{ fDirection: 'column', gap: '4px' }}>
                            <P $style={{ size: '20px', weight: '600' }}>Unique collectibles</P>
                            <Span $style={{ size: '16px', weight: '400' }}>Explore, buy, and sell collectibles used in games and services</Span>
                        </Flex>
                    </CardTitleContainer>
                    <ImageContainer>
                        <Image src={GetGems} alt='' $style={{ maxW: '247px' }} />
                    </ImageContainer>
                </WalletRowItem>
                <WalletRowItem bg='#F7F9FB' isLast>
                    <CardTitleContainer isLast>
                        <Flex $style={{ fDirection: 'column', gap: '4px' }}>
                            <P $style={{ size: '20px', weight: '600' }}>Explore hundreds more apps and services</P>
                        </Flex>
                        <Flex>
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
                        </Flex>
                    </CardTitleContainer>
                    <ImageContainer>
                        <Image src={Allapps} alt='' />
                    </ImageContainer>
                </WalletRowItem>
            </Grid>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services