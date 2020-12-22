import styled from 'styled-components/macro'

export const Container = styled.div`
    background: #0c2d45;
    display: flex;
    flex-direction: column;
`;
export const Service = styled.div`
    width: 78vw;
    margin: auto;
    display: flex;
    margin-top: 20px;
    padding: 10px 5px;
    justify-content: space-between;
    
    @media (max-width: 1000px) {
        width: 85vw;
    }
`;

export const Info = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    row-gap: .3rem;
    margin: 0 5px;
`;

export const Title = styled.h3`
    font-size: 1rem;

    @media (max-width: 1000px) {
        font-size: .9rem;
    }
`;

export const Links = styled.p`
    text-transform: capitalize;
    font-size: .8rem;
    opacity: .8;

    @media (max-width: 1000px) {
        font-size: .7rem;
    }
`;

export const Foot = styled.div`
    display: grid;
    place-items: center;

    & > img {
        width: 140px;
    }
`;