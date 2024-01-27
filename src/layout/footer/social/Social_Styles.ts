import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import bgSocial from '../../../assets/images/bg-social.svg';
import bgSocialMobile from '../../../assets/images/bg-social-mobile.svg';
import bgSocialHover from '../../../assets/images/bg-social-hover.svg';

const Social = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-wrap: wrap;

    @media ${theme.media.tablet} {
        gap: 8px;
    }
`

const SocialTitle = styled.p`
    font-size: 16px;
    line-height: 20px;
    align-self: flex-end;

    @media ${theme.media.desktop} {
        font-size: 14px;
        align-self: flex-start;
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

    @media ${theme.media.mobile} {
        width: 27px;
        height: 27px;
        background-image: url(${bgSocialMobile});
    }

    &:hover,
    &:active {
        background-image: url(${bgSocialHover});
    }
`

export const S = {
    Social,
    SocialTitle,
    SocialList,
    SocialItem,
    SocialLink
}