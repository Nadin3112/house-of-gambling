import React from 'react';
import styled from 'styled-components';
import { Hero } from './hero/Hero';
import { Container } from '../../components/Container';
import { Banner } from './banner/Banner';
import { Blog } from './blog/Blog';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';

export const Main = () => {
    return (
        <MainStyled>
            <Container>
                <FlexWrapper justify={"center"} wrap={"wrap"}>
                    <Hero />
                    <Banner />
                    <Blog/>
                </FlexWrapper>
            </Container>
        </MainStyled>
    );
};

const MainStyled = styled.main`
    overflow: hidden;
    flex-grow: 1;

    
    ${FlexWrapper} {
        gap: 58px;

        @media ${theme.media.desktop} {
            gap: 30px;
        }
    }
`