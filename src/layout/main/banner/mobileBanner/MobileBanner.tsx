import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Banner_Styles';

const iconsMobileOneData = [
    {
        iconId: "crown-long-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "m-blue-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "shield-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "soccer-white-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "shield-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "crown-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "m-blue-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "shield-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "soccer-white-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "shield-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
]

const iconsMobileTwoData = [
    {
        iconId: "m-white-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "timer-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "crown-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "world-mobile",
        width: "109",
        height: "49",
        viewBox: "0 0 109 49",
    },
    {
        iconId: "m-white-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "timer-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "crown-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "world-mobile",
        width: "109",
        height: "49",
        viewBox: "0 0 109 49",
    }
]

const iconsMobileThreeData = [
    {
        iconId: "shield-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "dollar-mobile",
        width: "110",
        height: "50",
        viewBox: "0 0 110 50",
    },
    {
        iconId: "soccer-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "m-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "shield-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "dollar-mobile",
        width: "110",
        height: "49",
        viewBox: "0 0 110 49",
    },
    {
        iconId: "soccer-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "m-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
    {
        iconId: "shield-mobile",
        width: "49",
        height: "49",
        viewBox: "0 0 49 49",
    },
]

export const MobileBanner: React.FC = () => {
    return (
        <S.MobileBanner>
            <S.MobileBannerList>
                {iconsMobileOneData.map((i, index) => {
                    return <li><Icon iconId={i.iconId} width={i.width} height={i.height} viewBox={i.viewBox} key={index} /></li>
                })}
            </S.MobileBannerList>
            <S.MobileBannerList>
                {iconsMobileTwoData.map((i, index) => {
                    return <li><Icon iconId={i.iconId} width={i.width} height={i.height} viewBox={i.viewBox} key={index} /></li>
                })}
            </S.MobileBannerList>
            <S.MobileBannerList>
                {iconsMobileThreeData.map((i, index) => {
                    return <li><Icon iconId={i.iconId} width={i.width} height={i.height} viewBox={i.viewBox} key={index} /></li>
                })}
            </S.MobileBannerList>
        </S.MobileBanner>
    );
};
