import styled from 'styled-components/macro'

export const Background = styled.div`
    width: 100vw;
    // min-height: 550px;
    background: url(/images/HolidayDeals.jpg) center/cover no-repeat;
    display: flex;
    flex-direction: column;
    padding: 5px 0;

    @media (max-width: 500px) {
        background-position: bottom;
    }
`;

export const ShowProds = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: .8em;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    @media (max-width: 1000px) {
        // display: none;
        grid-template-columns: 1fr 1fr 1fr;
    }
    
`;
export const Prods = styled.div`
    background: #fff;
    padding: 15px 10px;
    justify-self: center;

    @media (max-width: 1000px) {
        &:nth-child(3){
            display: none;
        }
    }

    @media (max-width: 600px) {
        display: none;
    }

`;
export const Title = styled.h3`
    margin-bottom: 5px;
    color: #222;

    @media (max-width: 1050px) {
        font-size: 1rem;
    }
`;


export const Image = styled.img`
    width: 280px;
    height: 300px;
    object-fit: cover;

    @media (max-width: 1250px){
        width: 250px;
        height: 280px;
    }
    @media (max-width: 1130px){
        width: 200px;
    }

    @media (max-width: 1000px) {
        width: 250px;
    }
    @media (max-width: 850px) {
        height: 200px;
        width: 100%;
    }
    

`;

export const Break = styled.div`
    height: 200px;
    // border: solid red;

    @media (max-width: 600px) {
        height: 350px;
    }
`