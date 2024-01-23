import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import logo2x from '../../assets/images/logo@2x.png';
import logoWebp from '../../assets/images/logo.webp';
import logoWebp2x from '../../assets/images/logo@2x.webp';
import logoAvif from '../../assets/images/logo.avif';
import logoAvif2x from '../../assets/images/logo@2x.avif';
import logoMobile from '../../assets/images/logo-mobile.png';
import logoMobile2x from '../../assets/images/logo-mobile@2x.png';
import logoWebpMobile from '../../assets/images/logo-mobile.webp';
import logoWebpMobile2x from '../../assets/images/logo-mobile@2x.webp';
import logoAvifMobile from '../../assets/images/logo-mobile.avif';
import logoAvifMobile2x from '../../assets/images/logo-mobile@2x.avif';
import { theme } from '../../styles/Theme';

export const Logo:React.FC = () => {
  return (
    <LogoLink href={"index.html"}>
      <picture>
        <source type="image/avif" media="(max-width: 576px)" srcSet = {`${logoAvifMobile} 1x, ${logoAvifMobile2x} 2x`} />
        <source type="image/webp" media="(max-width: 576px)" srcSet= {`${logoWebpMobile} 1x, ${logoWebpMobile2x} 2x`} />
        <source media="(max-width: 576px)" srcSet={`${logoMobile} 1x, ${logoMobile2x} 2x`} />
        <source type="image/avif" srcSet={`${logoAvif} 1x, ${logoAvif2x} 2x`} />
        <source type="image/webp" srcSet={`${logoWebp} 1x, ${logoWebp2x} 2x`} />
        <Image src={logo} srcSet={`${logo2x} 2x`} alt="logo vebsite" />
      </picture>
    </LogoLink>
  );
};

const LogoLink = styled.a`
    display: block;
    z-index: 999;
`
const Image = styled.img`
    

  ${theme.media.mobile} {
    
  }
`
