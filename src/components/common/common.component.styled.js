import styled from 'styled-components';


export const Form = styled.form`
    background: var(--search);
    border: 1px solid var(--search);
    border-radius: 1.375rem;
    opacity: 1;
    height: 3.525rem;
    position: relative;
    display: flex;
    flex-grow: 1;
    align-items: center;
    width: 90%;
`;

export const SearchIcon = styled.span`
    color: var(--text);
    opacity: 1;
    display: block;
    line-height: ${props => props.user ? "3.531rem" : "1rem"};
    pointer-events: none;
    padding-left: ${props => props.user ? "1.91rem" : "0.921rem"};
`;

export const Input = styled.input`
    background: transparent;
    opacity: 1;
    font-size: ${props => props.user ? "0.925rem" : "0.8125rem"};
    font-weight: 600;
    border: none;
    padding-left: ${props => props.user ? "2rem" : "0.625rem"};
    letter-spacing: -0.05rem;
    display: block;
    width: 100%;
    height: inherit;
    outline: none;
    color: ${props => props.user ? "var(--text)" : "var(--main-color)"};
    ::placeholder {
        color: ${props => props.user ? "var(--text)" : "var(--search)"};
        opacity: 1;
    }
`;

export const DynamicBox = styled.div`
    width: 100%;
`;

export const DynamicText = styled.h1`
    font-size: 1.325rem;
    line-height: 1.875rem;
`;

export const FilterText = styled.p`
    font-weight: 300;
    font-size: 0.825rem;
    padding-top: 0.725rem;
`;

export const FilterBox = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 2fr 1.2fr 1.5fr;
    grid-column-gap: 0.875rem;
    padding-top: 0.815rem;
`;

export const ListForm = styled.form`
    background: var(--search);
    border: 0.025rem solid var(--search);
    opacity: 0.11;
    border-radius: 1.625rem;
    height: 2rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

export const Select = styled.select`
    color: black;
`;


export const ShowCountry = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row no-wrap;
`;

export const CountryText = styled.p`
    font-size: 0.725rem;
    font-weight: 600;
    padding-left: 0.225rem;
`;
