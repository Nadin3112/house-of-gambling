import styled from 'styled-components';

const DesktopBanner = styled.div`
    display: flex;
    gap: 17px;
    height: 1026px;
    `

const DesktopBannerList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
    

    &:nth-of-type(odd) {
        animation: translateY 20s ease-in infinite alternate;
    }

    &:nth-of-type(even) {
        animation: translateY 20s ease-in infinite alternate-reverse;
    }

    @keyframes translateY {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(100%);
        }
    }
`

const MobileBanner = styled.div`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
`

const MobileBannerList = styled.ul`
        display: flex;
        gap: 12px;

    &:nth-of-type(odd) {
        animation: translateX 20s ease-in infinite alternate;
    }

    &:nth-of-type(even) {
        animation: translateX 20s ease-in infinite alternate-reverse;
    }

    @keyframes translateX {
        0% {
            transform: translateX(100%);
        }

        100% {
            transform: translateX(-100%);
        }
    }
`

export const S = {
    DesktopBanner,
    DesktopBannerList,
    MobileBanner,
    MobileBannerList
}