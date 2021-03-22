import styled from 'styled-components';


export const SingleUser = styled.div`
    height: 36.57rem;
    overflow: auto;
    margin-top: 2rem;
`;

export const Results = styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex: 1 1 auto;
    cursor: pointer;
    align-items: center;
`;

export const ResultsText = styled.p`
    font-size: 1rem;
    text-transform: uppercase;
    opacity: 0.52;
    padding-left: 0.425rem;
`;

export const UserSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1.512rem;
    margin-top: 1.85rem;
    height: 15rem;
`;

export const UserImage = styled.div`
    height: 11.06rem;
    width: 11.06rem;
    background-image: url(${(props) => props.url});
    border-radius: 50%;
    border: 0.325rem solid var(--imgborder);
    background-size: cover;
    background-clip: padding-box;
    background-position: center;
`;

export const UserDetails = styled.div`
    display: flex;
    flex-flow: column;
`;

export const UserName = styled.h1`
    font-size: 1.325rem;
    line-height: 1.875rem;
`;

export const Age = styled.span`
    font-weight: 350;
`;

export const UserAddress = styled.p`
    font-size: 0.655rem;
    line-height: 3.25rem;
    display: inline-block;
    font-weight: 300;
`;

export const UserEmail = styled.div`
    background: var(--shadow);
    border-radius: 1.325rem;
    box-shadow: 0.425rem 0.425rem 2.325rem var(--shadow);
    display: flex;
    align-items: center;
    width: auto;
    padding: 0.56rem 0rem 0.56rem 0.25rem;
`;

export const EmailText = styled.p`
    font-size: 0.852rem;
    opacity: 0.52;
    padding-left: 0.725rem;
`;

export const Date = styled.div`
    line-height: 1rem;
    background: var(--allusers);
    opacity: 0.15;
    border-radius: 1.325rem;
    margin-top: 1.32rem;
    width: 12rem;
`;

export const DateText = styled.p`
    font-size: 0.56rem;
    line-height: 2.725rem;
    opacity: 1;
    text-transform: uppercase;
    color: var(--main-color);
`;

export const Mobile = styled.div`
    display: flex;
    align-items: center;
    opacity: 0.52;
    margin-top: 1.425rem;
`;

export const Number = styled.p`
    font-size: 0.752rem;
    padding-left: 0.725rem;
`;

