import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Button } from '../../../components/Button';


const Hero = styled.section`
    max-width: 658px;
    padding: 296px 0 0 8px;

    @media ${theme.media.desktop} {
        padding: 70px 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    ${Button} {
        max-width: 394px;
        min-width: 300px;
        width: 100%;
        padding: 20px 72px;
        border-radius: 48px;
        font-weight: 600;
        font-size: 24px;
        line-height: 1.3;
        text-transform: uppercase;

        @media ${theme.media.desktop} {
            align-self: center;
        }

        @media ${theme.media.tablet} {
            padding: 15px 20px;
            font-size: 18px; 
        }
    }
`

const HeroTitle = styled.h1`
    margin: 0;
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 96px;
    line-height: 1;
    text-transform: uppercase;

    @media ${theme.media.desktop} {
        text-align: center;
    }

    span {
        color: ${theme.colors.accent};
    }

    @media ${theme.media.tablet} {
        line-height: 50px;
        margin-bottom: 12px;
        font-size: 46px;
    }
`

const HeroText = styled.p`
    color: ${theme.colors.fontText};
    font-weight: 500;
    font-size: 32px; 
    line-height: 1;
    margin-bottom: 48px;

    @media ${theme.media.desktop} {
        text-align: center;
    }

    @media ${theme.media.mobile} {
        line-height: 26px;
        margin-bottom: 24px;
        font-size: 20px;
    }
`

export const S = {
    Hero, 
    HeroTitle,
    HeroText
}