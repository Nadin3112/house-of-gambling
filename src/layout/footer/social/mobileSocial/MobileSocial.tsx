import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Social_Styles';

const socialItemsData = [
    { iconId: "twitter-mobile", ariaLabel: "twitter", href: "#", width: "15", height: "15", viewBox: "0 0 15 15" },
    { iconId: "facebook-mobile", ariaLabel: "facebook", href: "#", width: "15", height: "15", viewBox: "0 0 15 15" },
    { iconId: "instagram-mobile", ariaLabel: "instagram", href: "#", width: "15", height: "15", viewBox: "0 0 15 15" },
    { iconId: "linkedin-mobile", ariaLabel: "linkedin", href: "#", width: "15", height: "15", viewBox: "0 0 15 15" },
    { iconId: "YouTube-mobile", ariaLabel: "YouTube", href: "#", width: "15", height: "15", viewBox: "0 0 15 15" },
    { iconId: "TikTok-mobile", ariaLabel: "TikTok", href: "#", width: "15", height: "15", viewBox: "0 0 15 15" },
    { iconId: "telegram-mobile", ariaLabel: "telegram", href: "#", width: "15", height: "15", viewBox: "0 0 15 15" },
    { iconId: "vk-mobile", ariaLabel: "vkontakte", href: "#", width: "15", height: "15", viewBox: "0 0 15 15" }
]

export const MobileSocial: React.FC = () => {
    return (
        <S.Social>
            <S.SocialTitle>Our social media:</S.SocialTitle>
            <S.SocialList>
                {socialItemsData.map((s, index) => {
                    return <S.SocialItem key={index}>
                        <S.SocialLink aria-label={s.ariaLabel} href={s.href}>
                            <Icon iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox} />
                        </S.SocialLink>
                    </S.SocialItem>
                })}
            </S.SocialList>
        </S.Social>
    );
};


