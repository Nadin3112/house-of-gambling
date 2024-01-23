import React, { useState } from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';
import { MobileMenuUser } from './MobileMenuUser';
import { LangMenu } from '../langMenu/LangMenu';

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen) }
  return (
    <S.MobileMenu>
      <S.BurgerWrapper>
        <LangMenu/>
        <S.BurgerButton aria-label="open menu" isOpen={menuIsOpen} onClick={onBurgerBtnClick}/>
      </S.BurgerWrapper>
      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => { setMenuIsOpen(false) }}>
        <Menu />
        <MobileMenuUser />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};


