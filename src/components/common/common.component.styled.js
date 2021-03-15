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
    width: 100%;
`;

export const SearchIcon = styled.span`
    color: ${props => props.user ? "var(--text)" : "var(--icons)"};
    opacity: 1;
    display: block;
    line-height: 3.531rem;
    pointer-events: none;
    padding-left: 1.91rem;
`;

export const Input = styled.input`
    background: transparent;
    opacity: 1;
    font-size: 0.925rem;
    font-weight: 600;
    border: none;
    padding-left: 2rem;
    letter-spacing: -0.05rem;
    display: block;
    width: 100%;
    height: inherit;
    outline: none;
    color: var(--text);
`;