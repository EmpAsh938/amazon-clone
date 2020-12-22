import styled from 'styled-components/macro'

export const Container = styled.div`
    background: #052126;
    color: #fff;
    display: flex;
    flex-direction: column;
`;

export const Main = styled.div`
    width: 85vw;
    margin: 10px auto;
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    @media (max-width: 800px) {
        gap: 1rem;
    }
    @media (max-width: 720px) {
        gap: 0;
        width: 90vw;
        grid-template-columns: repeat(4, 1fr);
        row-gap: 1rem;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 350px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const Products = styled.div`
    justify-self: center;
    padding: 5px;
    display: flex;
    flex-direction: column;
    width: 110px;
`;

export const Title = styled.h5``;

export const SubText = styled.p`
    font-size: .8rem;
    text-align: left;
    color: #f5f5f5;
    opacity: .7;
`;

export const Foot = styled.div`
    font-size: .8rem;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 700px) {
        font-size: .78rem;
    }
`;

export const FootText = styled.span`
    margin: 0 8px;

    &:last-of-type {
        font-size: .72rem;
    }

    @media (max-width: 700px) {
        margin: 0 5px;
    }
`;
