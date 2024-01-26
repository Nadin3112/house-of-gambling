import styled, {css} from 'styled-components';
import { theme } from '../styles/Theme';

type StyledBtnPropsType = {
    backgroundColor?: string
    btnType: "primary" | "outlined"
}

export const Button = styled.button<StyledBtnPropsType>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px;
    font-family: 'Lexend', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    border-radius: 24px;
    cursor: pointer;
    color: ${theme.colors.font};
    text-transform: uppercase;


    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: ${theme.colors.accent};
        border: none;
    `}

    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        background-color: transparent;
        border: 2px solid ${theme.colors.accent};
    `}
`
