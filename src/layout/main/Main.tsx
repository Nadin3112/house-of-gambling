import React from 'react';
import { Hero } from './hero/Hero';
import { Container } from '../../components/Container';
import { Banner } from './banner/Banner';
import { Blog } from './blog/Blog';
import { FlexWrapper } from '../../components/FlexWrapper';
import { S } from './Main_Styles';

export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify={"center"} wrap={"wrap"}>
                    <Hero />
                    <Banner />
                    <Blog/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
