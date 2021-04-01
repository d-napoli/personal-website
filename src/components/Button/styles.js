import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`;

export const Btn = styled.button`

    display: flex;

    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid var(--primary);
    border-radius: 20px;
    color: var(--white);

    margin-bottom: 20px;

    font-weight: 500;

    &:hover {
        background-color: var(--primary);
        transition: 0.3s ease 0s all;
        cursor: pointer;
    }
`;