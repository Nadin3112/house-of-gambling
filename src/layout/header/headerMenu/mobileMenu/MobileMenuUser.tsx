import React from 'react';
import { S } from '../HeaderMenu_Styles';
import { Button } from '../../../../components/Button';

export const MobileMenuUser:React.FC = () => {
    return (
        <S.MenuUser>
            <Button aria-label={"log in"} btnType={'outlined'}>Log in</Button>
            <Button aria-label={"sign up"} btnType={'primary'}>Sign up</Button>
        </S.MenuUser>
    );
};
