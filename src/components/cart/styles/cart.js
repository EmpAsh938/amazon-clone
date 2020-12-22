import styled from 'styled-components/macro'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Image = styled.img`
    height: 100px;
    margin-top: 5px;
    object-fit: contain;
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    row-gap: 1em;
`;

export const Item = styled.div`
    display: flex;
    column-gap: 1em;

    & > img {
        height: 200px;
        width: 300px;
    }
`;

export const Title = styled.h4``;

export const Price = styled.p``;

export const Button = styled.button`
    margin-top: 5px;
    width: 150px;
    border: none;
    font-size: .9rem;
    background: linear-gradient(#f0a33e,#f59b25,#f7920c);
    padding: 7px 0;
    cursor: pointer;
    border-radius: 4px;
    color: #222;
`;