import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Item = styled.div`
    box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
    width: 300px;
    padding: 4px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: .3em;
`;
    
export const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain;
`;

export const Price = styled.h3`
    font-weight: 400;
`;

export const Title = styled.h4``;

export const Rating = styled.p``;

export const AddButton = styled.button`
    font-size: 1rem;
    padding: 10px 0;
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: 4px;
    color: rgba(0, 0, 0, .6);
    background: linear-gradient(#f0a33e,#f59b25,#f7920c);
    cursor: pointer;
    transition: all .3s linear;
`;