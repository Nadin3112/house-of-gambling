import React from 'react';
import { S } from '../HeaderMenu_Styles';
import { Button } from '../../../../components/Button';

export const MobileMenuUser:React.FC = () => {
    return (
        <S.MenuUser>
            <Button btnType={'outlined'}>Log in</Button>
            <Button btnType={'primary'}>Sign up</Button>
        </S.MenuUser>
    );
};
