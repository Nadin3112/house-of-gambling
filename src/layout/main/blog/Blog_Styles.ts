import styled from 'styled-components';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/Theme';

const Blog = styled.section`
    
`
const BlogTitle = styled.h2`
    margin: 0;
    margin-bottom: 24px;
    ${font({family: "'Lexend', serif", color: theme.colors.font, weight: 600, Fmax: 40, Fmin: 32 })};
    line-height: 40px;
    text-transform: uppercase;
    text-align: center;

    @media ${theme.media.tablet} {
        margin-bottom: 18px;
    }
`

const BlogContainer = styled.div`
    background-color: ${theme.colors.bgBlog};
    backdrop-filter: blur(10px);
    border-radius: 100px;
    border: 3px solid ${theme.colors.accent};
    padding-right: 16px;
`

const BlogList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 100px;
    
    
    height: 601px;
    padding: 24px 16px 24px 24px;
    overflow: auto;
    

    &::-webkit-scrollbar {
        width: 8px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 10px;
        margin: 100px 0;
        background-color: ${theme.colors.bgBlog};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.accent};
    }
`

const BlogItem = styled.li`
    border-radius: 196px;
    background-color: ${theme.colors.secondaryBg};
    padding: 16px 64px;

    &:first-child {
        background-color: ${theme.colors.accent};
    }
    
    @media ${theme.media.tablet} {
        padding: 15px 35px;
    }
`

const BlogLink = styled.a`
    
`

const BlogText = styled.p`
    width: 340px;
    ${font({family: "'Lexend', serif", color: theme.colors.font,  Fmax: 24, Fmin: 16 })};
    line-height: 28px;
    margin-bottom: 14px;

    @media ${theme.media.mobile} {
        line-height: 20px;
        margin-bottom: 6px;
    }
`

const BlogTime = styled.time`
    font-size: 14px;
    line-height: 16px; 
    color: ${theme.colors.fontText};
    font-feature-settings: 'liga' off;
`

export const S = {
    Blog,
    BlogTitle,
    BlogContainer,
    BlogList,
    BlogItem,
    BlogLink,
    BlogText,
    BlogTime
}