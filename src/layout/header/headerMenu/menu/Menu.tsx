import React from 'react';
import { S } from '../HeaderMenu_Styles';

const items = [
  { title: "About us", href: "#" },
  { title: "Brands", href: "#" },
  { title: "Commissions", href: "#" },
  { title: "News", href: "#" },
  { title: "Contact us", href: "#" },
  { title: "Careers", href: "#" }
]

export const Menu: React.FC = () => {
  return (
    <S.MenuList>
        {items.map((item, index) => {
          return <S.MenuItem key={index}>
            <S.NavLink
              href={"#"}>
              {item.title}
            </S.NavLink>
          </S.MenuItem>
        })}
      </S.MenuList>
  );
};


