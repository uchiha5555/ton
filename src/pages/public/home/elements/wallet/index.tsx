import React from 'react'
import { CustomButton, CustomHeading, CustomImage, CustomSubHeading, ImageContainer, MobileCustomButton, TitleContainer, TitleWrapper, WalletContainer, WalletRow, WalletRowItem } from './style';
import { Flex, P, Span } from '@/components/basic';
import { Icon } from '@/components/custom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";

import CardImage1 from '@/assets/img/card0.png';
import CardImage2 from '@/assets/img/card1.png';
import CardImage3 from '@/assets/img/card2.png';
import CardImage4 from '@/assets/img/card3.png';
import Image from '@/components/basic/img';

import "swiper/css";
import 'swiper/css/free-mode';

const Wallet = () => {
  return (
    <WalletContainer>
        <TitleContainer>
            <TitleWrapper>
                <CustomHeading><P>Getting Started is easy: <br />all you need is <CustomSubHeading><CustomImage src='https://storage.googleapis.com/ton-strapi/telegram_62fdf0229c/telegram_62fdf0229c.svg?updated_at=2023-08-06T15:50:29.296Z' />Telegram</CustomSubHeading></P></CustomHeading>
                <CustomButton>Get Wallet</CustomButton>
            </TitleWrapper>
        </TitleContainer>
        <WalletRow>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                // centeredSlides={true}
                freeMode={true}
                mousewheel={true}
                modules={[Mousewheel,FreeMode]}
                className="mySwiper"
                breakpoints={{
                    734: {
                        slidesPerView: 1.5,
                    },
                    1024: {
                        slidesPerView: 2.5
                    },
                    1280: {
                        slidesPerView: 3.5
                    }
                }}
                // params={{
                //     freeModeMomentum: false,
                //     freeModeMomentumRatio: 0.3
                // }}
            >
                <SwiperSlide>
                    <WalletRowItem>
                        <Flex $style={{ fDirection: 'column' }}>
                            <P $style={{ weight: '600', size: '20px' }}><Icon icon='Wallet' />Wallet gives direct and easy access to TON from Telegram</P>
                        </Flex>
                        <ImageContainer>
                            <Image src={CardImage1} alt='' $style={{ maxW: '247px' }} />
                        </ImageContainer>
                    </WalletRowItem>
                </SwiperSlide>
                <SwiperSlide>
                    <WalletRowItem even={true} bg='#fff'>
                        <Flex $style={{ fDirection: 'column' }}>
                            <P $style={{ weight: '600', size: '20px', color: 'black' }}>Enjoy <Span $style={{ color: 'primary' }}>commission-free</Span> crypto transfers to any Telegram user</P>
                        </Flex>
                        <ImageContainer>
                            <Image src={CardImage2} alt='' $style={{ maxW: '247px' }} />
                        </ImageContainer>
                    </WalletRowItem>
                </SwiperSlide>
                <SwiperSlide>
                    <WalletRowItem bg='#232328'>
                        <Flex $style={{ fDirection: 'column' }}>
                            <P $style={{ weight: '600', size: '20px' }}>Retail <Span $style={{ color: 'primary' }}>full control</Span> of your Toncoin and other digital assets with TON Space</P>
                        </Flex>
                        <ImageContainer>
                            <Image src={CardImage3} alt='' $style={{ maxW: '247px' }} />
                        </ImageContainer>
                    </WalletRowItem>
                </SwiperSlide>
                <SwiperSlide>
                    <WalletRowItem even={true} bg='#fff'>
                        <Flex $style={{ fDirection: 'column' }}>
                            <P $style={{ weight: '600', size: '20px', color: 'black' }}><Span $style={{ color: 'primary' }}>Seamlessly interact</Span> with web3 apps</P>
                        </Flex>
                        <ImageContainer>
                            <Image src={CardImage4} alt='' $style={{ maxW: '247px' }} />
                        </ImageContainer>
                    </WalletRowItem>
                </SwiperSlide>
            </Swiper>
        </WalletRow>
        <Flex $style={{ w: '100%', hAlign: 'center' }}>
            <MobileCustomButton>Get Wallet</MobileCustomButton>
        </Flex>
    </WalletContainer>
  )
}

export default Wallet