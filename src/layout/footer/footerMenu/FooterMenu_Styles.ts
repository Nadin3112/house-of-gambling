import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';


const FooterList = styled.ul`
    align-items: flex-end;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;

    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: flex-start;
        gap: 1px;
    }
`
const FooterItem = styled.li`
`
const FooterLink = styled.a<{ active?: boolean }>`
    font-family: 'Lexend',  sans-serif;
    color: ${theme.colors.font};
    font-size: 16px;
    line-height: 20px;

    @media ${theme.media.tablet} {
        font-size: 14px;
    }

    &:hover {
        color: ${theme.colors.accent};
        text-decoration-line: underline;
    }

    ${props => props.active && css<{ active?: boolean }>`
        color: ${theme.colors.accent};
        text-decoration-line: underline;
    `}

`

export const S = {
    FooterList,
    FooterItem,
    FooterLink
}