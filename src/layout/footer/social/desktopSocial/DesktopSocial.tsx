import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Social_Styles';


const socialItemsData = [
    { iconId: "twitter", ariaLabel: "twitter", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "facebook", ariaLabel: "facebook", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "instagram", ariaLabel: "instagram", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "linkedin", ariaLabel: "linkedin", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "YouTube", ariaLabel: "YouTube", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "TikTok", ariaLabel: "TikTok", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "telegram", ariaLabel: "telegram", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" },
    { iconId: "vk", ariaLabel: "vkontakte", href: "#", width: "16", height: "16", viewBox: "0 0 16 16" }
]

export const DesktopSocial: React.FC = () => {
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

