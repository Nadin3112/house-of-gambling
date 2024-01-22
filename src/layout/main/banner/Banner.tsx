import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';

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
        </BannerStyled>
    );
};

const BannerStyled = styled.div`
    display: flex;
    gap: 17px;
    height: 1026px;
    //margin-right: 58px;

    ul {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    ul:nth-of-type(odd) {
        animation: translateOdd 20s ease-in infinite alternate;
    }

    ul:nth-of-type(even) {
        animation: translateEven 20s ease-in infinite alternate-reverse;
    }

    @keyframes translate {
        0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(100%);
    }
        }
        
    
`
