import React, { useCallback, useEffect, useState } from 'react';
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
    CardWeatherPrimayAndSecondDay,
    SectionCardsWeatherPrimaryAndSecondDay,
    TitlePrimayAndSecondDay,
    IconAndMaxMinTemp,
    IconAndRestDaysWeather,
    RestInfoWeather,
    ResumeWeather,
    MaximumHumidityAndMinimal,
    DirectionAndIntesivyOfWinds,
    SectionCardsWeatherRestDays,

} from './styles';
import parallaxImage from '../../assets/parallax-image-home.jpg';
import { Parallax } from 'react-parallax';
import api from '../../services/api';
import awesomeapi from '../../services/awesomeapi';
import apiprevmet3 from '../../services/apiprevmet3';
import { WiCloud, WiCloudy, WiHumidity, WiNightPartlyCloudy, WiNightRainMix, WiRain, WiStrongWind } from 'react-icons/wi';
import { useToast } from '../../hooks/toast';
import Footer from '../../components/Footer';

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
    manha: {
        dia_semana: string;
        resumo: string;
        temp_max: string;
        temp_min: string;
        dir_vento: string;
        int_vento: string;
        cod_icone: string;
        umidade_max: string;
        umidade_min: string;

    }
}

interface restDaysWeather {
    dia_semana: string;
    resumo: string;
    temp_max: string;
    temp_min: string;
    dir_vento: string;
    int_vento: string;
    cod_icone: string;
    umidade_max: string;
    umidade_min: string;
}

const Home: React.FC = () => {

    const [categories, setCategories] = useState<Category[]>([]);

    const [coins, setCoins] = useState<Coin[]>([])

    const [primaryAndSecondDaysWeatherState, setPrimaryAndSecondDaysWeather] = useState<primaryAndSecondDaysWeather[]>([])

    const [restDaysWeatherState, setRestDaysWeatherState] = useState<restDaysWeather[]>([])


    const { addToast } = useToast();

    const getIcon = useCallback((cod_icone:string) => { 
        console.log(cod_icone)
        if(cod_icone == '37'){
            return (<WiCloudy/>)
        }

        if(cod_icone == '36'){
            return (<WiRain />)
        }

        if(cod_icone == '88'){
            return (<WiNightRainMix/>)
        }

        if(cod_icone == '87'){
            return (<WiCloudy/>)
        }

        if(cod_icone == '29'){
            return (<WiNightPartlyCloudy/>)
        }

        



    }, [])


    useEffect(() => {
        api.get('category').then(response => {
            const data = response.data
            setCategories(data)
        }).catch(() => {
            addToast({
                title: 'Erro',
                type: 'error',
                description: 'Ocorreu um erro ao conectar com o servidor, tente novamente'
            });
        })
    }, [])

    useEffect(() => {

        awesomeapi.get<Coin[]>('/all/USD-BRL,EUR-BRL,BTC-BRL').then(response => {
            const coins = Object.values(response.data)
            setCoins(coins)
        })
    }, [])

    useEffect(() => {
        apiprevmet3.get<WeatherResponse>('/previsao/4127858').then(response => {
            const data = Object.values(response.data[4127858])
            const primaryAndSecondDaysWeather = data.splice(0, 2)
            const restDaysWeather = data;

            setPrimaryAndSecondDaysWeather(primaryAndSecondDaysWeather)
            setRestDaysWeatherState(restDaysWeather);



            // console.log(primaryAndSecondDaysWeather)
            // console.log(restDaysWeather)
        })
    }, [])

    // console.log(primaryAndSecondDaysWeatherState[1])




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
                                <Button><Link to={`category/${category.id}`} >Ver Produtos</Link></Button>
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
                                <h5>em Três Barras do Paraná</h5>
                            </TitleWeather>

                            <WeatherContent>

                                <SectionCardsWeatherPrimaryAndSecondDay>

                                    {primaryAndSecondDaysWeatherState.map(day => (
                                        <CardWeatherPrimayAndSecondDay key={primaryAndSecondDaysWeatherState.indexOf(day)}>
                                            <TitlePrimayAndSecondDay>{day.manha.dia_semana}</TitlePrimayAndSecondDay>
                                            <IconAndMaxMinTemp>
                                                {getIcon(day.manha.cod_icone)}
                                                <p>{day.manha.temp_max}ºC</p>
                                                <p>{day.manha.temp_min}ºC</p>
                                            </IconAndMaxMinTemp>
                                            <RestInfoWeather>
                                                <ResumeWeather>{day.manha.resumo}</ResumeWeather>
                                                <MaximumHumidityAndMinimal>
                                                    <WiHumidity size={40} />
                                                    <div><p>{day.manha.umidade_max}%</p>
                                                        <p>{day.manha.umidade_min}%</p>
                                                    </div>

                                                </MaximumHumidityAndMinimal>
                                                <DirectionAndIntesivyOfWinds>
                                                    <WiStrongWind size={40} />
                                                    <p>{day.manha.dir_vento}</p>
                                                    <p>{day.manha.int_vento}</p>
                                                </DirectionAndIntesivyOfWinds>
                                            </RestInfoWeather>

                                        </CardWeatherPrimayAndSecondDay>
                                    ))}


                                </SectionCardsWeatherPrimaryAndSecondDay>

                                <SectionCardsWeatherRestDays>
                                    {restDaysWeatherState.map(day => (
                                        <CardWeatherPrimayAndSecondDay key={restDaysWeatherState.indexOf(day)}>
                                            <TitlePrimayAndSecondDay style={{ fontSize: '16px' }}>{day.dia_semana}</TitlePrimayAndSecondDay>
                                            <IconAndRestDaysWeather>
                                                {getIcon(day.cod_icone)}
                                                <p>{day.temp_max}ºC</p>
                                                <p>{day.temp_min}ºC</p>
                                            </IconAndRestDaysWeather>
                                            <RestInfoWeather>
                                                <MaximumHumidityAndMinimal>
                                                    <WiHumidity size={20} />
                                                    <div><p>{day.umidade_max}%</p>
                                                        <p>{day.umidade_min}%</p>
                                                    </div>

                                                </MaximumHumidityAndMinimal>
                                                <DirectionAndIntesivyOfWinds>
                                                    <WiStrongWind size={20} />
                                                    <p>{day.dir_vento}</p>
                                                    <p>{day.int_vento}</p>
                                                </DirectionAndIntesivyOfWinds>
                                            </RestInfoWeather>

                                        </CardWeatherPrimayAndSecondDay>
                                    ))}
                                </SectionCardsWeatherRestDays>

                            </WeatherContent>


                        </Weather>

                    </SectionWeatherAndAgriculturalQuotation>
                </Container>

            </Body>

            <Footer/>

        </>
    )
}

export default Home;