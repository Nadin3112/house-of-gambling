import React from 'react';
import { Button } from '../../../components/Button';
import { S } from './Hero_Styles';

export const Hero:React.FC = () => {
    return (
        <S.Hero>
            <S.HeroTitle>House of <span>gambling</span></S.HeroTitle>
            <S.HeroText>Raise your ROI with direct advertiser</S.HeroText>
            <Button btnType={'primary'}>Become a Partner</Button>
        </S.Hero>
    );
};

