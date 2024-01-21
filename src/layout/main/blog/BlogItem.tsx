import React from 'react';
import { S } from './Blog_Styles';

type BlogPropsType = {
    text: string
    date: string
    href: string
    }

export const BlogItem:React.FC<BlogPropsType> = (props:BlogPropsType) => {
    return (
        <S.BlogItem>
            <S.BlogLink href={props.href}>
                <S.BlogText>{props.text}</S.BlogText>
                <S.BlogTime>{props.date}</S.BlogTime>
            </S.BlogLink>
        </S.BlogItem>
    );
};
