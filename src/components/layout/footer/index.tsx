import React from 'react'
import { CopyrightContainer, Divider, FooterContainer, FooterContentContainer, FooterItem, FooterItemList, FooterListItemContainer, FooterListItemTitle, FooterWrapper, RegionContainer, SocialContainer } from './style'
import { Flex, Grid, Span } from '@/components/basic'
import { Icon } from '@/components/custom'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContentContainer>
          <Grid $style={{
            columns: '6',
            queries: {
              734: {
                columns: '2',
                gap: '16px'
              }
            }
          }}>
            <FooterListItemContainer>
              <FooterListItemTitle>Use</FooterListItemTitle>
              <FooterItemList>
                <FooterItem>Get a wallet</FooterItem>
                <FooterItem>Get or sell Toncoin</FooterItem>
                <FooterItem>Stake</FooterItem>
                <FooterItem>Apps & Services</FooterItem>
                <FooterItem>Bridge</FooterItem>
                <FooterItem>Domains</FooterItem>
              </FooterItemList>
            </FooterListItemContainer>
            <FooterListItemContainer>
              <FooterListItemTitle>Learn</FooterListItemTitle>
              <FooterItemList>
                <FooterItem>TON concept</FooterItem>
                <FooterItem>Decentralized network</FooterItem>
                <FooterItem>Roadmap</FooterItem>
                <FooterItem>TonStat</FooterItem>
                <FooterItem>History of Mining</FooterItem>
                <FooterItem>Toncoin</FooterItem>
                <FooterItem>Validators</FooterItem>
                <FooterItem>Blockchain comparison</FooterItem>
                <FooterItem>White paper</FooterItem>
              </FooterItemList>
            </FooterListItemContainer>
            <FooterListItemContainer>
              <FooterListItemTitle>Build</FooterListItemTitle>
              <FooterItemList>
                <FooterItem>Getting started</FooterItem>
                <FooterItem>Documentation</FooterItem>
                <FooterItem>TON Overflow</FooterItem>
                <FooterItem>Dev community</FooterItem>
                <FooterItem>Grants</FooterItem>
                <FooterItem>Liquidity Program</FooterItem>
                <FooterItem>Bug Bounty</FooterItem>
              </FooterItemList>
            </FooterListItemContainer>
            <FooterListItemContainer>
              <FooterListItemTitle>Community</FooterListItemTitle>
              <FooterItemList>
                <FooterItem>Communities</FooterItem>
                <FooterItem>TON Society</FooterItem>
                <FooterItem>The Open Network Foundation</FooterItem>
                <FooterItem>TON Ambassadors</FooterItem>
                <FooterItem>Blog</FooterItem>
                <FooterItem>Careers</FooterItem>
              </FooterItemList>
            </FooterListItemContainer>
            <FooterListItemContainer>
              <FooterListItemTitle>Other</FooterListItemTitle>
              <FooterItemList>
                <FooterItem>Support and Feedback</FooterItem>
                <FooterItem>Brand assets</FooterItem>
                <FooterItem>Contact us</FooterItem>
                <FooterItem>Network status</FooterItem>
              </FooterItemList>
            </FooterListItemContainer>
            <RegionContainer>
              <Icon icon="International" width="24px" height="24px" />
              <Span $style={{ color: 'colorSecondary', weight: '600' }}>Eng</Span>
            </RegionContainer>
          </Grid>
        </FooterContentContainer>
        <Divider />
        <CopyrightContainer>
          <Icon icon="Logo" width="auto" height="32px" />
          <SocialContainer>
            <Icon icon='Linkedin' />
            <Icon icon='TelegramSocial' />
            <Icon icon='Github' />
            <Icon icon='Twitter' />
            <Icon icon='Mail' />
            <Icon icon='CoinMarketPlace' />
          </SocialContainer>
        </CopyrightContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer