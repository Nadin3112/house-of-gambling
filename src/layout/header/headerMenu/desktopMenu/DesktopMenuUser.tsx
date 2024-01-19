import React from 'react';
import { S } from '../HeaderMenu_Styles';
import { Button } from '../../../../components/Button';
import { LangMenu } from '../langMenu/LangMenu';

export const DesktopMenuUser: React.FC = () => {
    return (
        <S.MenuUser>
            <LangMenu />
            <Button aria-label={"log in"} btnType={'outlined'}>Log in</Button>
            <Button aria-label={"sign up"} btnType={'primary'}>Sign up</Button>
        </S.MenuUser>
    );
};
