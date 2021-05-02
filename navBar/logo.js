import React from 'react';
import styled from 'styled-components';

const LogoWrap = styled.div`
    margin: auto 0;
    flex: 0 1 36px;

    @media (max-width: 768px) and (orientation: landscape) {
        flex: 0 1 25px;
    }
`;
const Logo = () => {
    return <LogoWrap to='/'></LogoWrap>;
};

export default Logo;