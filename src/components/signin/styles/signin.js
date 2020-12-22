import styled from 'styled-components/macro'

export const Container = styled.div`
    display: grid;
    place-items: center;
`;

export const Inner = styled.div`
    text-align: center;
    width: 350px;
    height: 90vh;
    padding: 20px 0;

    & img {
        filter: invert(0);
    }

    & > form {
        flex-direction: column;
        text-align: left;
        row-gap: .5em;
        height: auto;
        box-shadow: 0 5px 15px rgba(0, 0, 0, .4);
        border-radius: 5px;
        padding: 10px 20px;

        & > input {
            border: 1px solid rgba(0, 0, 0, .3);
            padding: 5px 5px;
            border-radius: 4px;
            width: 100%;
        }

        &  button {
            padding: 10px 0;
            width: 100%;
            border: 1px solid rgba(0, 0, 0, .3);
            border-top: 1px solid rgba(0, 0, 0, .1);
            font-weight: 500;
        }
    }
`;

export const Title = styled.h1`
    font-weight: 500;
    color: #111;
    margin-bottom: 8px;
`;

export const Label = styled.label`
    font-weight: bold;
`;
    
export const Text = styled.p`
    font-size: .8rem;
    font-weight: 500;

    &:last-of-type {
        text-align: center;
        margin: 7px 0;
        opacity: .7;
        pointer-events: none;
    }
`;

export const SubText = styled.span`
    color: #3e8da3;
`;

