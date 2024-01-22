import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { FooterMenu } from './menu/FooterMenu';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import bgSocial from '../../assets/images/bg-social.svg';
import bgSocialHover from '../../assets/images/bg-social-hover.svg';

const socialItemsData = [
    { iconId: "twitter", ariaLabel: "twitter", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "facebook", ariaLabel: "facebook", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "instagram", ariaLabel: "instagram", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "linkedin", ariaLabel: "linkedin", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "YouTube", ariaLabel: "YouTube", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "TikTok", ariaLabel: "TikTok", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "telegram", ariaLabel: "telegram", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "vk", ariaLabel: "vk", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" }
]

export const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <FlexWrapper justify={"space-between"} align={"flex-end"} wrap={"wrap"}>
                    <FooterMenu />
                    <SocialWrapper>
                        <SocialTitle>Our social media:</SocialTitle>
                        <SocialList>
                            {socialItemsData.map((s, index) => {
                                return <SocialItem key={index}>
                                    <SocialLink aria-label={s.ariaLabel} href={s.href}>
                                        <Icon iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox} />
                                    </SocialLink>
                                </SocialItem>
                            })}
                        </SocialList>
                    </SocialWrapper>
                </FlexWrapper>
            </Container>
        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
    padding: 40px 0 24px;
    border-radius: 64px 64px 0px 0px;
    border-top: 4px solid ${theme.colors.accent};
    border-right: 4px solid ${theme.colors.accent};
    border-left: 4px solid ${theme.colors.accent};
    background-color: ${theme.colors.secondaryBg};
`
const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-wrap: wrap;
`

const SocialTitle = styled.h3`
    font-size: 16px;
    line-height: 20px;
    align-self: flex-end;

    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`

const SocialList = styled.ul`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    width: 32px;
    height: 32px;
    background-image: url(${bgSocial});
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-image: url(${bgSocialHover});
    }

`