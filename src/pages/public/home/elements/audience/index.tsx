import React from 'react'
import { AudienceContainer, AudienceContentContainer, AudienceContentWrapper, CardContainer, TabListContainer, TabContentContainer, TitleWrapper, TabItemContainer, TabItem, TabNotify, TabContentTitle, TabContentDescription, TabContentButton, TabVideoContainer, TabVideoWrapper, ThumbnailImage, TabVideo, TabContentWrapper, TabFooterContainer, TabFooterWrapper, TabCard, TabCardContainer, TabCardHoverIcon, TabCardIconWrapper, TabCardTitle, TabCardDescription } from './style'
import { Icon } from '@/components/custom'
import { Grid, Span } from '@/components/basic'

import Thumbnail from '@/assets/img/build_project.png';

const Audience = () => {
  return (
    <AudienceContainer>
        <div />
        <AudienceContentContainer>
            <AudienceContentWrapper>
                <TitleWrapper>Build your product for a global audience</TitleWrapper>
                <CardContainer>
                    <TabListContainer>
                        <TabItemContainer isSelected>
                            <Icon icon='Appstore' color='#e5e5ea' />
                            <TabItem>Mini Apps</TabItem>
                        </TabItemContainer>
                        <TabItemContainer>
                            <Icon icon='Game' color='#e5e5ea' />
                            <TabItem>GameFi</TabItem>
                        </TabItemContainer>
                        <TabItemContainer>
                            <Icon icon='Pie' color='#e5e5ea' />
                            <TabItem>DeFi</TabItem>
                        </TabItemContainer>
                        <TabNotify>Check out the <Span $style={{ color: 'notify' }}>roadmap</Span> to discover upcoming opportunities.</TabNotify>
                    </TabListContainer>
                    <TabContentContainer>
                        <TabContentWrapper>
                            <div>
                                <TabContentTitle>Unlock access to millions of Telegram users</TabContentTitle>
                                <TabContentDescription>Your app can unlock access to millions of Telegram users with one-click app launch, direct advertising, along with viral and retention mechanics based in the messenger. Millions of users have been onboarded to TON via <Span $style={{ color: 'notify' }}>@wallet</Span></TabContentDescription>
                                <TabContentButton>Build Mini App</TabContentButton>
                            </div>
                            <TabVideoContainer>
                                <TabVideoWrapper>
                                    {/* <ThumbnailImage src={Thumbnail} alt='' /> */}
                                    <TabVideo autoPlay>
                                        <source src="https://firebasestorage.googleapis.com/v0/b/chainedx-3ec41.appspot.com/o/build_project_video.mp4?alt=media&token=5b6ed3a8-28d0-4e48-9584-9ad64b7788d4" type="video/mp4" />
                                    </TabVideo>
                                </TabVideoWrapper>
                            </TabVideoContainer>
                        </TabContentWrapper>
                    </TabContentContainer>
                </CardContainer>
                <TabFooterContainer>
                    <TabFooterWrapper>
                        <Grid $style={{
                            columns: '3',
                            gap: '32px',
                            queries: {
                                834: {
                                    gap: '16px',
                                },
                                734: {
                                    columns: '1'
                                }
                            }
                        }}>
                            <TabCard>
                                <TabCardHoverIcon>
                                    <Icon icon='ArrowHoverIcon' width='20px' height='20px' color='#606069' />
                                </TabCardHoverIcon>
                                <TabCardContainer>
                                    <TabCardIconWrapper>
                                        <Icon icon='Code' width='48px' height='48px' />
                                    </TabCardIconWrapper>
                                    <TabCardTitle>Developers Center</TabCardTitle>
                                    <TabCardDescription>Quick start and deep dive into development on TON.</TabCardDescription>
                                </TabCardContainer>
                            </TabCard>
                            <TabCard>
                                <TabCardHoverIcon>
                                    <Icon icon='ArrowHoverIcon' width='20px' height='20px' color='#606069' />
                                </TabCardHoverIcon>
                                <TabCardContainer>
                                    <TabCardIconWrapper>
                                        <Icon icon='Rocket' width='48px' height='48px' />
                                    </TabCardIconWrapper>
                                    <TabCardTitle>Accelerate your growth</TabCardTitle>
                                    <TabCardDescription>Support for commercial projects on all the stages.</TabCardDescription>
                                </TabCardContainer>
                            </TabCard>
                            <TabCard>
                                <TabCardHoverIcon>
                                    <Icon icon='ArrowHoverIcon' width='20px' height='20px' color='#606069' />
                                </TabCardHoverIcon>
                                <TabCardContainer>
                                    <TabCardIconWrapper>
                                        <Icon icon='Medal' width='48px' height='48px' />
                                    </TabCardIconWrapper>
                                    <TabCardTitle>TON Grants & Bounties</TabCardTitle>
                                    <TabCardDescription>Support for core ecosystem projects.</TabCardDescription>
                                </TabCardContainer>
                            </TabCard>
                        </Grid>
                    </TabFooterWrapper>
                </TabFooterContainer>
            </AudienceContentWrapper>
        </AudienceContentContainer>
        <div />
    </AudienceContainer>
  )
}

export default Audience