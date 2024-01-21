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
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Hero />
                    <Banner />
                    <Blog/>
                </FlexWrapper>
            </Container>
        </MainStyled>
    );
};

const MainStyled = styled.main`
    ${FlexWrapper} {
        gap: 40px;
    }
`