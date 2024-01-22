import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';

const Header = styled.header`
  padding-top: 16px;
  background-color: ${theme.colors.primaryBg};
  z-index: 999999;

  ${Container} {
    
  }


  ${FlexWrapper} {
    gap: 20px;
    border-radius: 64px;
    border: 4px solid ${theme.colors.accent};
    padding: 18px 48px;
    background-color: ${theme.colors.primaryBg};


    @media ${theme.media.tablet} {
      border-width: 2px;
      padding: 6px 50px 6px 14px;
    }
  }



`

export const S = {
  Header
}
