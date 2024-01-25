import React from 'react';
import styled, {css} from 'styled-components';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/Theme';


const items = [
    { title: "Terms & Conditions", href: "#",  },
    { title: "Cookies", href: "#" },
    { title: "Contacts", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Brand Guide", href: "#" }
]

export const FooterMenu: React.FC = () => {
    return (
        <FooterList>
            {items.map((item, index) => {
                return <FooterItem key={index}>
                    <FooterLink active={true}
                        href={"#"}>
                        {item.title}
                    </FooterLink>
                </FooterItem>
            })}
        </FooterList>
    );
};

const FooterList = styled.ul`
    align-items: flex-end;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;

    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
    }
`
const FooterItem = styled.li`
    
    
    
`
const FooterLink = styled.a<{active: boolean}>`
    ${font({ family: "'Lexend',  sans-serif", color: theme.colors.font, Fmax: 16, Fmin: 14 })};
    line-height: 20px;

    &:hover {
        color: ${theme.colors.accent};
        text-decoration-line: underline;
    }

    ${props => props.active && css<{active: boolean}>`
        color: ${theme.colors.accent};
        text-decoration-line: underline;
    `}

`