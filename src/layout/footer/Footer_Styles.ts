import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/FlexWrapper';


const Footer = styled.footer`
    padding: 40px 0 24px;
    border-radius: 64px 64px 0px 0px;
    border-top: 4px solid ${theme.colors.accent};
    border-right: 4px solid ${theme.colors.accent};
    border-left: 4px solid ${theme.colors.accent};
    background-color: ${theme.colors.secondaryBg};

    @media ${theme.media.desktop} {
        padding: 20px 10px;
        border-radius: 50px 50px 0px 0px;
        border-top: 2px solid ${theme.colors.accent};
        border-right: 2px solid ${theme.colors.accent};
        border-left: 2px solid ${theme.colors.accent};
        background: ${theme.colors.secondaryBg};


        ${FlexWrapper} {
            flex-direction: column;
            gap: 20px;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }
`

export const S = {
    Footer
}