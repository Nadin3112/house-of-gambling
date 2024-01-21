import React from 'react';
import { Button } from '../../../components/Button';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Hero:React.FC = () => {
    return (
        <HeroStyled>
            <MainTitle>House of <span>gambling</span></MainTitle>
            <Text>Raise your ROI with direct advertiser</Text>
            <Button btnType={'primary'}>Become a Partner</Button>
        </HeroStyled>
    );
};

const HeroStyled = styled.section`
    
    ${Button} {
        padding: 20px 72px;
        border-radius: 48px;
        ${font({family: "'Lexend', serif", lineHeight: 1.33, color: theme.colors.font, weight: 600, Fmax: 24, Fmin: 18 })};
        text-transform: uppercase;

        @media ${theme.media.mobile} {
            padding: 15px 20px;
        }
    }
`

const MainTitle = styled.h1`
    margin: 0;
    margin-bottom: 24px;
    ${font({family: "'Lexend', serif", color: theme.colors.font, weight: 500, Fmax: 96, Fmin: 46 })};
    line-height: 1;
    text-transform: uppercase;

    span {
        color: ${theme.colors.accent};
    }

    @media ${theme.media.mobile} {
        line-height: 50px;
        margin-bottom: 12px;
    }
`

const Text = styled.p`
    ${font({family: "'Lexend', serif", color: theme.colors.fontText, weight: 500, Fmax: 26, Fmin: 20 })};
    line-height: 1;
    margin-bottom: 48px;

    @media ${theme.media.mobile} {
        line-height: 26px;
        margin-bottom: 24px
    }
`