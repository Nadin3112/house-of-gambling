import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Banner_Styles';

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

export const DesktopBanner: React.FC = () => {
    return (
        <S.DesktopBanner>
            <S.DesktopBannerList>
                {iconsOneData.map((i, index) => {
                    return <li><Icon iconId={i.iconId} width={i.width} height={i.height} viewBox={i.viewBox} key={index} /></li>
                })}
            </S.DesktopBannerList>
            <S.DesktopBannerList>
                {iconsTwoData.map((i, index) => {
                    return <li><Icon iconId={i.iconId} width={i.width} height={i.height} viewBox={i.viewBox} key={index} /></li>
                })}
            </S.DesktopBannerList>
            <S.DesktopBannerList>
                {iconsThreeData.map((i, index) => {
                    return <li><Icon iconId={i.iconId} width={i.width} height={i.height} viewBox={i.viewBox} key={index} /></li>
                })}
            </S.DesktopBannerList>
        </S.DesktopBanner>
    );
};

