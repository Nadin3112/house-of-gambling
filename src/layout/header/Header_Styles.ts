import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/FlexWrapper';

const Header = styled.header`
  padding-top: 16px;
  background-color: ${theme.colors.primaryBg};

  @media ${theme.media.tablet} {
      padding-top: 0;
    }


  ${FlexWrapper} {
    gap: 20px;
    border-radius: 64px;
    border: 4px solid ${theme.colors.accent};
    padding: 18px 48px;
    background-color: ${theme.colors.primaryBg};
    
    @media ${theme.media.tablet} {
      position: relative;
      border: 2px solid ${theme.colors.accent};
      padding: 8px 50px 8px 14px;
      z-index: 9999;
    }
  }



`

export const S = {
  Header
}
