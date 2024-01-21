import React from 'react';
import styled from 'styled-components';
import { Hero } from './hero/Hero';
import { Container } from '../../components/Container';
import { Banner } from './banner/Banner';
import { Blog } from './blog/Blog';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Main = () => {
    return (
        <MainStyled>
            <Container>
                <FlexWrapper justify={"space-between"}>
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
    ${FlexWrapper} {
        gap: 65px;
    }
`