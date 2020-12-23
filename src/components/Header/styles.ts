import styled from 'styled-components';



export const Container = styled.div`
    /* background:var(--jadri-color-5-hex); */
    width:100%;
    

    

`
export const Content = styled.div`
    height:92px;
    max-width:1120px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;

    a {
        text-decoration:none;
        color:var(--jadri-color-4-hex);
        font-size: 26px;
    }
`;


export const ContainerLinks = styled.div`

    a {
        
        text-decoration:none;
        color:var(--jadri-color-text-1-hex);
        margin:0 30px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        transition:0.2s;

        :hover {
            color:var(--jadri-color-4-hex);
        }

    }

`;


export const ContainerIcons = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;

    /* background:blue; */

    svg {
        margin:0 30px;
        color:var(--jadri-color-text-1-hex);
        position: relative;
        top:3px;
        transition:0.2s;

        :hover {
            color:var(--jadri-color-4-hex);
        }
    }

`;

export const Cart = styled.div`
    
    svg{
        color:var(--jadri-color-text-1-hex);
        position: relative;
        top:13px;
        transition:0.2s;

        :hover {
            color:var(--jadri-color-4-hex);
        }
        
    }
    
`;

export const NumberOfProductsTheCart = styled.div`

    text-align:center;
    position:relative;
    width:18px;
    height:18px;
    background:red;
    border-radius:50%;
    color:white;
    top: -3px;
    left: 45px;

    p{
        position: relative;
        top:3px;
        font-size:10px;
    }

`;
export const NotNumberOfProductsTheCart = styled.div`

    text-align:center;
    position:relative;
    width:18px;
    height:18px;
    /* background:red; */
    border-radius:50%;
    color:white;
    top: -3px;
    left: 45px;

    p{
        position: relative;
        top:3px;
        font-size:10px;
    }

`;


