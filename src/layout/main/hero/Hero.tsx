import React from 'react';
import { Button } from '../../../components/Button';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const Hero:React.FC = () => {
    return (
        <HeroStyled>
            <HeroTitle>House of <span>gambling</span></HeroTitle>
            <Text>Raise your ROI with direct advertiser</Text>
            <Button btnType={'primary'}>Become a Partner</Button>
        </HeroStyled>
    );
};

const HeroStyled = styled.section`
    max-width: 658px;
    padding: 296px 0 0 8px;
    //margin-right: 58px;

    ${Button} {
        padding: 20px 72px;
        border-radius: 48px;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        text-transform: uppercase;

        @media ${theme.media.mobile} {
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

    span {
        color: ${theme.colors.accent};
    }

    @media ${theme.media.mobile} {
        line-height: 50px;
        margin-bottom: 12px;
        font-size: 46px;
    }
`

const Text = styled.p`
    color: ${theme.colors.fontText};
    font-weight: 500;
    font-size: 32px; 
    line-height: 1;
    margin-bottom: 48px;

    @media ${theme.media.mobile} {
        line-height: 26px;
        margin-bottom: 24px;
        font-size: 20px;

    }
`