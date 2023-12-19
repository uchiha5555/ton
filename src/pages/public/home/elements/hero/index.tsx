import React from 'react'
import { CustomDescription, CustomHeading, HeroButton, HeroContainer, HeroWrapper, StaticLetter, TypistContainer } from './style'
import { Flex, Heading } from '@/components/basic'
// import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <HeroContainer>
        <HeroWrapper>
            <Flex $style={{ fDirection: 'column', vAlign: 'center' }}>
                <CustomHeading>
                    <div>The Open Network</div>
                    <StaticLetter>for </StaticLetter>
                    <TypistContainer
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'everyone',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'startups',
                            1000,
                            'creators',
                            1000,
                            'gamers',
                            1000,
                            'crypto ninjas',
                            1000,
                        ]}
                        wrapper="div"
                        speed={50}
                        repeat={Infinity}
                    />
                </CustomHeading>
                <CustomDescription>A decentralized and open internet, created by the community using a technology designed by Telegram.</CustomDescription>
            </Flex>
            <Flex $style={{
                hAlign: 'center',
                fDirection: 'row',
                gap: '24px',
                fWrap: 'wrap',
                w: '100%',
                queries: {
                    340: {
                        fDirection: 'column',
                        hAlign: 'center',
                        vAlign: 'center',
                        gap: '1.5rem'
                    }
                }
            }}>
                <HeroButton>Explore wallets</HeroButton>
                <HeroButton>Build on TON</HeroButton>
            </Flex>
        </HeroWrapper>
    </HeroContainer>
  )
}

export default Hero