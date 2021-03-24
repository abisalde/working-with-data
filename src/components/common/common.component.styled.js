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
    color: ${props => props.user ? "var(--text)" : "#353839"}
    opacity: 1;
    background: ${props => props.user ? null : "#DCDCDC"};
    border-radius: ${props => props.user ? null : "1.625rem 0rem 0rem 1.625rem"};
    display: block;
    line-height: ${props => props.user ? "3.531rem" : "inherit"};
    pointer-events: none;
    padding: ${props => props.user ? "0rem 0rem 0rem 1.91rem" : "0.221rem 0.912rem 0.212rem 0.825rem"};
`;

export const Input = styled.input`
    background: ${props => props.user ? "transparent" : "#DCDCDC"};
    opacity: 1;
    font-size: ${props => props.user ? "0.925rem" : "0.8125rem"};
    font-weight: 600;
    border: none;
    padding-left: ${props => props.user ? "2rem" : "0.625rem"};
    letter-spacing: -0.05rem;
    display: block;
    border-radius: ${props => props.user ? null : "0rem 1.625rem 1.625rem 0rem"};
    width: 100%;
    height: inherit;
    outline: none;
    color: ${props => props.user ? "var(--text)" : "#353839"};
    ::placeholder {
        color: ${props => props.user ? "var(--text)" : "#353839"};
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
    background: var(--shadow);
    border: 0.025rem solid var(--shadow);
    border-radius: 1.625rem;
    height: 2rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

export const Select = styled.select`
    background: #DCDCDC;
    border: 0.025rem solid #DCDCDC;
    border-radius: 1.625rem;
    outline: none;
    cursor: pointer;
    font-family: inherit;
    padding: 0.35rem 0.925rem;
    font-weight: 600;
    font-size: 0.725rem;
    color: inherit;
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
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


export const BottomDivUser = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    bottom: 0.52rem;
`;

export const PageDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.45rem;
`;

export const PageArrow = styled.div`
    width: 2.21rem;
    height: 1.95rem;
    background: #E2E2EA;
    text-align: center;
    padding-top: 0.21rem;
    color: var(--main-color);
    box-shadow: 0.21rem 0.29rem 0.95rem var(--pageshadow);
    border-radius: 0.475rem;
    :active {
        background: var(--main-color);
        color: var(--text);
    }
`;