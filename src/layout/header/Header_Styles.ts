import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';

const Header = styled.header`
  position: relative;

  ${Container} {
    border-radius: 64px;
    border: 4px solid ${theme.colors.accent};
    padding: 18px 44px;

    @media ${theme.media.tablet} {
      border-width: 2px;
      padding: 6px 50px 6px 14px;
    }
  }

  ${FlexWrapper} {
    gap: 20px;
  }



`

export const S = {
  Header
}
