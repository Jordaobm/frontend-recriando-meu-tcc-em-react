import { shade } from 'polished';
import styled from 'styled-components';
import parallaxImage from '../../assets/parallax-image-home.jpg';

export const Body = styled.div`
   
`;

export const Container = styled.div`
    max-width:1120px;
    margin:0 auto;
    /* background:red; */

`;

export const CenterText = styled.div`
    /* background:red; */
    max-width:600px;
    height:500px;
    display:flex;
    align-items:center;
`;



export const TextApresentation = styled.p`
    font-size:40px;
    color:var(--jadri-color-1-hex);
    font-weight: 500;
    line-height: 60px;

`;

export const SubtitleApresentation = styled.p`
    font-size:18px;
    color:var(--jadri-color-1-hex);
    font-weight: 400;
    line-height: 20px;

`;


export const SectionNewProducts = styled.section`
    margin:20px 0;
    width:100%;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    /* display:flex; */

    /* background:red; */
`;

export const SectionCards = styled.div`

    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

`;


interface CardContainerProps {
    available: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
    /* background:red; */
    /* margin:20px 0; */
    margin:30px;
    background:var(--jadri-color-cards);
    border-radius: 8px;
    border:2px solid var(--jadri-color-cards);
    transition:0.2s;

    &:hover {
        border:2px solid ${({ available }: CardContainerProps): string => (available ? '#8DDB46' : '#C94D3F')};
    };


`;

export const Available = styled.div`
    margin-top: 20px;
    margin-left: 13px;
    /* background:blue; */
    display:flex;
    /* justify-content:center; */
    align-items:center;

    svg{
        margin:0 10px;
        color:var(--jadri-color-text-success);
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 210%;
        color:var(--jadri-color-text-success);
    }

`;

export const NotAvailable = styled.div`
    margin-top: 20px;
    margin-left: 13px;
    /* background:blue; */
    display:flex;
    /* justify-content:center; */
    align-items:center;

    svg{
        margin:0 10px;
        color:var(--jadri-color-text-error);
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 210%;
        color:var(--jadri-color-text-error);
    }

`;


export const ProductDescription = styled.div`

    /* background:green; */
    padding:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    img {
        width:200px;
    }
    

    h5 {
        margin-top:20px;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 19px;
    }
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
    }

`;

interface ButtonProps {
    available: boolean;
}

export const Button = styled.button`


        position:relative;
        bottom:0;
        display:flex;
        align-items:center;
        justify-content:center;
        text-decoration:none;
        background:${({ available }: CardContainerProps): string => (available ? '#8DDB46' : '#C94D3F')};

        height: 35px;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        color: #fff;
        width: 100%;
        font-weight: 500;
        margin-top: 16px;
        transition: 0.2s;

        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        



        &:hover {
            background: ${({ available }: CardContainerProps): string => (available ? '#74b538' : '#ab4135')};
        };

`;





