import styled from 'styled-components';


export const ShowUsers = styled.div`
    padding-top: 4rem;
`;

export const Text = styled.p`
    padding-top: 0.852rem;
    font-size: ${props => props.size ? "0.652rem" : "0.915rem"};
    font-weight: 600;
    opacity: 0.66;
`;

export const ButtonRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 2.625rem;
`;

export const Selector = styled.div`
    text-align: center;
    padding-right: 1.825rem;
    transition: all .6s cubic-bezier(0.23, 0.42, 0.9, 0.48);
    :hover {
        text-decoration: none;
        transform: scale(1.25, 1.25);
    }
`;

export const AllUsers = styled.button`
    width: 5.425rem;
    color: var(--text);
    background-color: var(--allusers);
    height: 5.425rem;
    border-radius: 1.325rem;
    opacity: var(--text);
    outline: none;
    border: none;
    cursor: pointer;
`;

export const MaleUsers = styled(AllUsers)`
    background-color: var(--maleuser);
`;

export const FemaleUsers = styled(AllUsers)`
    background-color: var(--femaleuser);
`;
