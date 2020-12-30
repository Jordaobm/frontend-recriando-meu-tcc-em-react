import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import {
    Body,
    Container,
    TextApresentation,
    CenterText,
    SubtitleApresentation,
    SectionCategories,
    CardCategory,
    Button,
    QuoteCoins,
    Coin,
    SectionCoins,
    TitleQuoteCoins,
    AttCoin,
    Percentage,
    DataCoin,
    ValueAtual,
    Hight,
    Low,
    SectionWeatherAndAgriculturalQuotation,
    Weather,
    TitleWeather,
    WeatherContent,
    AgriculturalQuotation,
    TitleAgriculturalQuotation,
    AgriculturalQuotationContent,

} from './styles';
import parallaxImage from '../../assets/parallax-image-home.jpg';
import { Parallax } from 'react-parallax';
import api from '../../services/api';
import awesomeapi from '../../services/awesomeapi';
import apiprevmet3 from '../../services/apiprevmet3';
import { useToast } from '../../hooks/toast';

interface Category {
    id: string;
    name: string;
}

interface Coin {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    pctChange: string;
    bid: string;
    create_date: string;
}

interface WeatherResponse {
    4127858: Object
}
interface primaryAndSecondDaysWeather {
    manha:{
        dia_semana:string;
    }
}

const Home: React.FC = () => {

    const [categories, setCategories] = useState<Category[]>([]);

    const [coins, setCoins] = useState<Coin[]>([])

    const [primaryAndSecondDaysWeatherState, setPrimaryAndSecondDaysWeather] = useState<primaryAndSecondDaysWeather[]>([])

    const [restDaysWeatherState, setRestDaysWeatherState] = useState()


    const { addToast } = useToast();



    // useEffect(() => {
    //     api.get('category').then(response => {
    //         const data = response.data
    //         setCategories(data)
    //     }).catch(() => {
    //         addToast({
    //             title: 'Erro',
    //             type: 'error',
    //             description: 'Ocorreu um erro ao conectar com o servidor, tente novamente'
    //         });
    //     })
    // }, [])

    // useEffect(() => {

    //     awesomeapi.get<Coin[]>('/all/USD-BRL,EUR-BRL,BTC-BRL').then(response => {
    //         const coins = Object.values(response.data)
    //         setCoins(coins)
    //     })
    // }, [])

    useEffect(() => {
        apiprevmet3.get<WeatherResponse>('/previsao/4127858').then(response => {
            const data = Object.values(response.data[4127858])
            const primaryAndSecondDaysWeather = data.splice(0, 2)
            const restDaysWeather = data;

            setPrimaryAndSecondDaysWeather(primaryAndSecondDaysWeather)



            // console.log(primaryAndSecondDaysWeather)
            // console.log(restDaysWeather)
        })
    }, [])

    console.log(primaryAndSecondDaysWeatherState[1])



    return (
        <>
            <Header />


            <Body>
                <Parallax style={{ height: '500px' }} bgImage={parallaxImage} strength={200}>


                    <Container>
                        <CenterText>
                            <div>
                                <TextApresentation>Bem vindo à <strong>Jadri!</strong></TextApresentation>
                                <SubtitleApresentation>Nosso objetivo é através dos nossos produtos e serviços tecnológicos promover a transformação ambiental.</SubtitleApresentation>

                            </div>
                        </CenterText>
                    </Container>

                </Parallax>
                <Container>

                    <SectionCategories>

                        {categories.map(category => (
                            <CardCategory key={category.id}>
                                <h3>{category.name}</h3>
                                <p>são compostos químicos utilizados na agricultura para controlar o desenvolvimento de ervas daninhas. Essas plantas são eliminadas geralmente quando disputam certos recursos com as cultiváveis, como por exemplo, espaço, água, sais minerais, entre outros.</p>
                                <Button><Link to={`product/category/${category.id}`} >Ver Produtos</Link></Button>
                            </CardCategory>
                        ))}



                    </SectionCategories>
                </Container>


                <SectionCoins>
                    <Container>
                        <TitleQuoteCoins>
                            <h3>Cotação Monetária</h3>
                        </TitleQuoteCoins>


                        <QuoteCoins>


                            {coins.map(coin => (
                                <Coin key={coin.name}>
                                    <h5>{coin.name}</h5>
                                    <AttCoin>Atualizado: {coin.create_date}</AttCoin>
                                    <DataCoin>
                                        {Number(coin.pctChange) > 0 ? <Percentage style={{ background: '#8DDB46', borderRadius: '10px' }}>
                                            <h5>{coin.pctChange}%</h5>
                                        </Percentage> : <Percentage style={{ background: '#C94D3F', borderRadius: '10px' }}>
                                                <h5>{coin.pctChange}%</h5>
                                            </Percentage>}
                                        <ValueAtual>R${coin.bid}</ValueAtual>
                                        <Hight>Alta: R${coin.high}</Hight>
                                        <Low>Baixa: R${coin.low}</Low>
                                    </DataCoin>
                                </Coin>
                            ))}


                        </QuoteCoins>
                    </Container>

                </SectionCoins>

                <Container>
                    <SectionWeatherAndAgriculturalQuotation>
                        <AgriculturalQuotation>
                            <TitleAgriculturalQuotation>
                                <h3>Cotação Agrícola</h3>
                            </TitleAgriculturalQuotation>
                            <AgriculturalQuotationContent>
                                <iframe src="https://www.agron.com.br/widgets/cotacao_interna.php" width="290px;" height="320px;" scrolling="no"></iframe>

                            </AgriculturalQuotationContent>
                        </AgriculturalQuotation>
                        <Weather>
                            <TitleWeather>
                                <h3>Previsão do Tempo</h3>
                            </TitleWeather>
                            <WeatherContent>
                                {primaryAndSecondDaysWeatherState.map(day=> (
                                    <p key={primaryAndSecondDaysWeatherState.indexOf(day)}>{day.manha.dia_semana}</p>
                                ))}
                            </WeatherContent>
                        </Weather>

                    </SectionWeatherAndAgriculturalQuotation>
                </Container>

            </Body>

        </>
    )
}

export default Home;