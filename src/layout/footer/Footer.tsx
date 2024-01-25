import React from 'react';
import { Container } from '../../components/Container';
import { FooterMenu } from './menu/FooterMenu';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileSocial } from './social/mobileSocial/MobileSocial';
import { DesktopSocial } from './social/desktopSocial/DesktopSocial';
import { S } from './Footer_Styles';

export const Footer: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 576;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);


        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify={"space-between"} align={"flex-end"} wrap={"wrap"}>
                    <FooterMenu />
                    {width<breakpoint ? <MobileSocial /> : <DesktopSocial />}
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};
