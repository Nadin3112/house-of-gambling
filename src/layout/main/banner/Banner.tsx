import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';

const iconsOneData = [
    {
        iconId: "shield",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "m",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "soccer",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "dollar",
        width: "100",
        height: "221",
        viewBox: "0 0 100 221",
    },
    {
        iconId: "shield",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "m",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "soccer",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "dollar",
        width: "100",
        height: "221",
        viewBox: "0 0 100 221",
    },
    {
        iconId: "shield",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    }
]

const iconsTwoData = [
    {
        iconId: "m-white",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "timer",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "crown",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "world",
        width: "100",
        height: "221",
        viewBox: "0 0 100 222",
    },
    {
        iconId: "m-white",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "timer",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "crown",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "world",
        width: "100",
        height: "221",
        viewBox: "0 0 100 222",
    }
]
const iconsThreeData = [
    {
        iconId: "crown-long",
        width: "101",
        height: "221",
        viewBox: "0 0 101 221",
    },
    {
        iconId: "m-blue",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "shield",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "soccer-white",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "shield",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "crown",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "m-blue",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "shield",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "soccer-white",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    },
    {
        iconId: "shield",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
    }
]

export const Banner: React.FC = () => {
    return (
        <BannerStyled>
            <BannerTitle></BannerTitle>
            <FlexWrapper >
                <ul>
                    {iconsOneData.map((i, index) => {
                        return <li><Icon iconId={i.iconId} width={i.width} height={i.height} viewBox={i.viewBox} key={index} /></li>
                    })}
                </ul>
                <ul>
                    {iconsTwoData.map((i, index) => {
                        return <li><Icon iconId={i.iconId} width={i.width} height={i.height} viewBox={i.viewBox} key={index} /></li>
                    })}
                </ul>
                <ul>
                    {iconsThreeData.map((i, index) => {
                        return <li><Icon iconId={i.iconId} width={i.width} height={i.height} viewBox={i.viewBox} key={index} /></li>
                    })}
                </ul>
            </FlexWrapper>
        </BannerStyled>
    );
};

const BannerStyled = styled.section`
    
    ${FlexWrapper} {
        gap: 16px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
    
`

const BannerTitle = styled.h2`
    
`
