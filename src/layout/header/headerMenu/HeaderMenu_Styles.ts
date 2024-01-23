import styled, { css } from 'styled-components';
import { theme } from "../../../styles/Theme";
import { Button } from '../../../components/Button';
import close from '../../../assets/images/close.svg';
import menu from '../../../assets/images/menu.svg';
import planet from '../../../assets/images/planet.svg';
import planetMobile from '../../../assets/images/planet-mobile.svg';

//Menu
const MenuItem = styled.li`

`

const NavLink = styled.a`
  font-family: 'Lexend', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${theme.colors.font}; 
  padding: 8px;
  

  @media ${theme.media.tablet} {
    display: flex;
    align-items: center;
    min-width: 300px;
    border-radius: 28px;
    border: 2px solid ${theme.colors.accent};
    font-size: 18px;
    line-height: 24px;
    padding: 13px 20px 10px;
    
  }
`

//MobileMenu
const MobileMenu = styled.nav`
  

  ${Button} {
    padding: 8px;
  }
`

const BurgerWrapper = styled.div`
  display: flex;
  gap: 8px;

`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 99;
  background-color: ${theme.colors.primaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  transform: translateY(-100%);
  transition: 1s ease-in-out;


  ${props => props.isOpen && css <{ isOpen: boolean }> `
    transform: translateY(0);
  `}

  ${Button} {
    min-width: 300px;
    padding: 13px 20px 10px;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  width: 28px;
  height: 28px;
  right: 14px;
  top: 12px;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url(${menu});
  background-size: 28px 28px;
  border: none;
  z-index: 999;
  border: none;
  cursor: pointer;

  ${props => props.isOpen && css <{ isOpen: boolean }> `
    background-image: url(${close});
  `}
`

//Desktop
const DesktopMenu = styled.nav`
`

const MenuList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

    @media ${theme.media.tablet} {
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    padding-top: 96px;
  }
  
`
const MenuUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 14px;

    @media ${theme.media.tablet} {
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    padding: 0;
  }
`
//LangMenu

const LangMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 74px;
  min-height: 48px;

  @media ${theme.media.tablet} {
    width: 36px;
    min-height: 36px;
    }
  
  select {
    position: absolute;
    padding: 14px 14px 14px 38px;
    content: "";
    background-color: ${theme.colors.primaryBg};
    background-image: url(${planet});
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: left 14px center;
    border-radius: 24px;
    border: 2px solid ${theme.colors.accent};
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    outline: none;
    color: ${theme.colors.font};
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 999;

      @media ${theme.media.tablet} {
        color: transparent;
        background-image: url(${planetMobile});
        background-size: 20px 20px;
        background-position: center;
        padding: 6px;
      }
  }
`

export const S = {
  DesktopMenu,
  MenuList,
  MenuUser,
  MenuItem,
  NavLink,
  MobileMenu,
  BurgerWrapper,
  MobileMenuPopup,
  BurgerButton,
  LangMenu
}
