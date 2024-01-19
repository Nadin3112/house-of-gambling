import React from 'react';
import { S } from '../HeaderMenu_Styles';
import { Button } from '../../../../components/Button';
import { LangMenu } from '../langMenu/LangMenu';

export const DesktopMenuUser: React.FC = () => {
    return (
        <S.MenuUser>
            <LangMenu />
            <Button btnType={'outlined'}>Log in</Button>
            <Button btnType={'primary'}>Sign up</Button>
        </S.MenuUser>
    );
};
