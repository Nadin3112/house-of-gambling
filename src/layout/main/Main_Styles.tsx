import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';


const Main = styled.main`
    overflow: hidden;
    flex-grow: 1;

    
    ${FlexWrapper} {
        gap: 58px;

        @media ${theme.media.desktop} {
            gap: 30px;
        }
    }
`

export const S = {
    Main
}