import React from 'react';
import { S } from './FooterMenu_Styles';

export const FooterMenu: React.FC = () => {
    return (
        <S.FooterList>
            <S.FooterItem >
                <S.FooterLink active href={"#"}>Terms & Conditions</S.FooterLink>
            </S.FooterItem>
            <S.FooterItem >
                <S.FooterLink href={"#"}>Cookies</S.FooterLink>
            </S.FooterItem>
            <S.FooterItem >
                <S.FooterLink href={"#"}>Contacts</S.FooterLink>
            </S.FooterItem>
            <S.FooterItem >
                <S.FooterLink href={"#"}>Careers</S.FooterLink>
            </S.FooterItem>
            <S.FooterItem >
                <S.FooterLink href={"#"}>Brand Guide</S.FooterLink>
            </S.FooterItem>
        </S.FooterList>
    );
};

