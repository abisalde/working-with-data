import styled from 'styled-components';


export const GlobalDiv = styled.div`
    max-height: 36.57rem;
    width: 100%;
    overflow: auto;
`;

export const SingleUsers = styled.div`
    height: 12:19rem;
    width: inherit;
    background: #FCFCFF 0% 0% no-repeat padding-box;
    box-shadow: 0.625rem 0.625rem 2.5rem #0000000D;
    border-radius: 0.75rem;
    padding: 1.125rem;
    display: grid;
    grid-template-columns: 1.5fr 2.3fr 0.5fr;
    grid-gap: 0.251rem;
`;

export const UserImage = styled.div`
    height: 6.125rem;
    width: 6.125rem;
    background: url(${props => props.url}) center cover no-repeat;
    border-radius: 0.325rem solid (--male-user);
`;

export const UserDetails = styled.div`
    height: 6.125rem;
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
`;

export const UserName = styled.h5`
    font-weight: 600;
    padding-bottom: 0.325rem;
`;

export const UserAddress = styled.address`
    font-weight: 200;
    font-size: 0.625rem;
    display: inline-block;
`;

export const Contact = styled.ul`
    display: inline-block;
`;

export const List = styled.li`
    list-style-type: none;
    padding-right: 0.251rem;
    font-size
`;