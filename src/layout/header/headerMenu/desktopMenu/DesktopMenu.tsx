import React from 'react';
import { Menu } from '../menu/Menu';
import { DesktopMenuUser } from './DesktopMenuUser';
import { S } from '../HeaderMenu_Styles';

export const DesktopMenu: React.FC = () => {
  return (
    <>
      <S.DesktopMenu>
        <Menu />
      </S.DesktopMenu>
      <DesktopMenuUser />
    </>
  );
};


