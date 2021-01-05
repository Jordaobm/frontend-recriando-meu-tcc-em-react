import styled, { css } from 'styled-components';

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

export const SectionCategories = styled.div`
    margin:80px 0;
    grid-gap:10px;
    display:grid;
    
    grid-template-columns:1fr 1fr 1fr;


`;

export const CardCategory = styled.div`


    padding:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    transition:0.2s;
    border:2px solid var(--jadri-color-1-hex);
    border-radius:10px;

    h3{
        text-transform: uppercase;
        margin-bottom:20px;
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 20px;
    }

    p {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 25px;
    }

    :hover {
        border:2px solid var(--jadri-color-4-hex);
    }


`;

export const Button = styled.div`
    margin-top:20px;
    width:100%;
    display:flex;
    justify-content:center;

    a {        
        display:flex;
        align-items:center;
        justify-content:center;
        width:60%;
        height:35px;
        background:var(--jadri-color-4-hex);        
        border-radius:10px;
        text-decoration:none;
        color:var(--jadri-color-cards)
    }

`;
export const SectionCoins = styled.div`
    background:white;
    padding:30px 0 ;
    margin:40px 0;
`;

export const TitleQuoteCoins = styled.div`

    margin-bottom:30px;

h3 {
        margin-bottom:20px;
        font-style: normal;
        font-weight: 500;
        font-size:30px;
        line-height: 20px;
}


`;

export const QuoteCoins = styled.div`

    grid-gap:60px;
    display:grid;    
    grid-template-columns:1fr 1fr 1fr;

    


`;

export const Coin = styled.div`

    color:var(--jadri-color-text-1-hex);

    h5{
        font-style: normal;
        font-weight: 500;
        font-size:20px;
        line-height: 20px; 
    }

`;

export const AttCoin = styled.p`
        font-style: normal;
        font-weight: lighter;
        font-size:12px;
        line-height: 12px;
        margin-bottom:10px;

`;



export const DataCoin = styled.div`

    grid-gap:10px;
    display:grid;    
    grid-template-columns:1fr 1fr;
    max-width:300px;

`;

export const Percentage = styled.div`
    width:50%;
    text-align:center;

    h5 {
        
        color:white;
        border-radius:10px;



        font-style: normal;
        font-weight: lighter;
        font-size:18px;
        line-height: 16px;
        padding:5px;

    }

`;

export const ValueAtual = styled.p`
    color:var(--jadri-color-4-hex);
        font-style: normal;
        font-weight: lighter;
        font-size:22px;
        line-height: 16px;
        padding:5px;
`;

export const Hight = styled.p`

        font-style: normal;
        font-weight: lighter;
        font-size:15px;
        line-height: 16px;
        padding:5px;
        color:var(--jadri-color-text-gray);
`;


export const Low = styled.p`
        font-style: normal;
        font-weight: lighter;
        font-size:15px;
        line-height: 16px;
        padding:5px;
        color:var(--jadri-color-text-gray);
`;


export const SectionWeatherAndAgriculturalQuotation = styled.div`
    margin:40px 0;
    display:flex;

    

`;


export const Weather = styled.div`
width:50%;

`;

export const TitleWeather = styled.div`
    h3{
        font-style: normal;
        font-weight: 500;
        font-size:30px;
        line-height: 20px;
    }

    h5{
        margin-top:5px;
    }

`;



export const WeatherContent = styled.div`
    width:100%;

`;




export const AgriculturalQuotation = styled.div`
    width:50%;

`;

export const TitleAgriculturalQuotation = styled.div`
    h3{
        font-style: normal;
        font-weight: 500;
        font-size:30px;
        line-height: 20px;
        }


`;


export const AgriculturalQuotationContent = styled.div`

    margin:57px 0;

    iframe{
        border:0;
    }

`;

export const CardWeatherPrimayAndSecondDay = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px 0;
    color:var(-jadri-color-text-1-hex);
    border-top:2px solid var(--jadri-color-1-hex);
    transition:0.2s;

    :hover{
        border-top:2px solid var(--jadri-color-4-hex);
    }
`;


export const SectionCardsWeatherPrimaryAndSecondDay = styled.div`
    margin-top:40px;
    grid-gap:40px;
    display:grid;    
    grid-template-columns:1fr 1fr;

`;

export const TitlePrimayAndSecondDay = styled.p`

        font-size: 20px;
        font-weight: 500;
        line-height: 15px;
        margin-bottom: 3px;

`;

export const IconAndMaxMinTemp = styled.div`
    display:flex;
    align-items:center;

    p {
        margin:0 10px;
        font-size:18px;
    }
    svg{
        width:60px;
        height:60px;
    }

    svg + p {
        color:var(--jadri-color-text-error);
    }
    p + p {
        color:var(--jadri-color-5-hex);
    }
`;


export const IconAndRestDaysWeather = styled.div`
    display:flex;
    align-items:center;

    p {
        margin:0 10px;
        font-size:18px;
    }
    svg{
        width:40px;
        height:40px;
    }

    svg + p {
        color:var(--jadri-color-text-error);
    }
    p + p {
        color:var(--jadri-color-5-hex);
    }
`;


export const RestInfoWeather = styled.div`



`;

export const ResumeWeather = styled.div`
        color:var(--jadri-color-text-gray);
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        margin-bottom: 10px;

`;

export const MaximumHumidityAndMinimal = styled.div`
    display:flex;
    align-items:center;

    div {
        display:flex;
        p{
            margin:0 10px;
            font-size: 14px;
            font-weight: lighter;

        }
    }
`;

export const DirectionAndIntesivyOfWinds = styled.div`

    display:flex;
    align-items:center;
    p {
        margin:0 10px;
        font-size: 14px;
        font-weight: lighter;
    }


`;

export const SectionCardsWeatherRestDays = styled.div`
    margin-top:40px;
    grid-gap:40px;
    display:grid;    
    grid-template-columns:1fr 1fr 1fr;

`;

