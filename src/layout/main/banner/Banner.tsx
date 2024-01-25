import React from 'react';
import { MobileBanner } from './mobileBanner/MobileBanner';
import { DesktopBanner } from './desktopBanner/DesktopBanner';

export const Banner: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1200;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);


        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <>
            {width < breakpoint ? <MobileBanner /> : <DesktopBanner />}
        </>
    );
};
