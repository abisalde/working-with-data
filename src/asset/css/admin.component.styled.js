import styled from 'styled-components';


export const Wrapper = styled.section`
    background: transparent;
    position: relative;
    width: 41.2%;
    padding-right: 0.9375rem;
    padding-left: 0.9375rem;
    margin: auto;
    left: 3.725rem;
`;

export const DashboardGreeting = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding-bottom: 2.125rem;
`;

export const Greeting = styled.h1`
    display: flex;
    align-items: center;
    font-weight: 200;
    font-size: 2rem;
    line-height:  4.123rem;
    opacity: 1
    letter-spacing: -0.021rem;
`;

export const AdminName = styled.span`
    font-weight: 800;
    line-height: 3.251rem;
    padding-left: 0.825rem;
    padding-top: 0.525rem;
    font-size: 1.525rem;
`;

export const WelcomeMessage = styled.p`
    font-weight: 300;
    line-height: 1.525rem;
    padding-top: 0.375rem;
    font-size: 0.725rem;
    opacity: 0.66;
`;