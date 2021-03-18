import styled from 'styled-components';


export const GlobalDiv = styled.div`
    height: 36.57rem;
    width: 100%;
    overflow: auto;
    margin-top: 2rem;
`;

export const SingleUsers = styled.div`
    width: inherit;
    background: #FCFCFF 0% 0% no-repeat padding-box;
    box-shadow: 0.625rem 0.625rem 2.5rem #0000000D;
    border-radius: 0.75rem;
    padding: 1.125rem;
    display: grid;
    grid-template-columns: 3fr 14fr;
    grid-gap: 0.625rem;
    align-items: center;
    margin-bottom: 1.125rem;
    height: 9.125rem;
`;

export const UserImage = styled.div`
    height: 5.125rem;
    width: 5.125rem;
    background-image: url(${(props) => props.url});
    border-radius: 50%;
    border: 0.325rem solid var(--imgborder);
    background-size: cover;
    background-clip: padding-box;
    background-position: center;
`;

export const UserDetails = styled.div`
    height: 6.125rem;
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
    padding: 0.9125rem 0rem 0rem 0.852rem;
`;

export const UserName = styled.h5`
    font-weight: 600;
    padding-bottom: 0.725rem;
`;

export const UserAddress = styled.address`
    font-weight: 200;
    font-size: 0.625rem;
    display: inline-block;
`;

export const Contact = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding-top: 0.425rem;
    padding-right: 0.3125rem;
    font-size: 0.725rem;
`;

export const Icon = styled.span`
    padding-right: 0.25rem;
    padding-top: 0.25rem;
}
`;

export const List = styled.li`
    list-style-type: none;
    padding-right: 0.151rem;
    flex: 1 1 auto;
    font-weight: 200;
    line-height: 1rem;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
`;

export const RouteBtn = styled.div`
    width: 2.25rem;
    height: 2rem;
    background-color: var(--btnroute);
    border-radius: 0.415rem;
    box-shadow: 0.125rem 0.825rem 1.45rem var(--routebtnshadow);
    opacity: 1;
    color: var(--global-bg);
    text-align: center;
    padding: 0.50rem;
    cursor: pointer;
    outline: none;
`;

