import React from 'react';
import { S } from '../HeaderMenu_Styles';
import { Button } from '../../../../components/Button';
import { theme } from '../../../../styles/Theme';

export const MobileMenuUser:React.FC = () => {
    return (
        <S.MobileMenuUser>
            <Button aria-label={"log in"} btnType={'outlined'} backgroundColor={theme.colors.secondaryBg}>Log in</Button>
            <Button aria-label={"sign up"} btnType={'primary'}>Sign up</Button>
        </S.MobileMenuUser>
    );
};
