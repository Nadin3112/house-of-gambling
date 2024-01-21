import React from 'react';
import { BlogItem } from './BlogItem';
import { S } from './Blog_Styles';

const articlesData = [
    {
        href: "#",
        text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
        date: "10.02.2023"
    },
    {
        href: "#",
        text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
        date: "10.02.2023"
    },
    {
        href: "#",
        text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
        date: "10.02.2023"
    },
    {
        href: "#",
        text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
        date: "10.02.2023"
    },
    {
        href: "#",
        text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
        date: "10.02.2023"
    }
]


export const Blog: React.FC = () => {
    return (
        <S.Blog>
            <S.BlogTitle>Blog</S.BlogTitle>
            <S.BlogContainer>
                <S.BlogList>
                    {articlesData.map((a, index) => {
                        return <BlogItem href={a.href} text={a.text} date={a.date} key={index} />
                    })}
                </S.BlogList>
            </S.BlogContainer>
        </S.Blog>
    );
};

