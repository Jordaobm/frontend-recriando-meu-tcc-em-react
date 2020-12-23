import React from 'react';
import Header from '../../components/Header';
import { Body, Container, TextApresentation, CenterText, SubtitleApresentation, SectionNewProducts, CardContainer, SectionCards, Available, NotAvailable, ProductDescription } from './styles';
import parallaxImage from '../../assets/parallax-image-home.jpg';
import { Parallax } from 'react-parallax';
import { FiCheck, FiX } from 'react-icons/fi';


const Home: React.FC = () => {
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


                <SectionNewProducts>
                    <Container>
                        <h3>New Products</h3>

                        <SectionCards>

                            <CardContainer>
                                
                                <Available>
                                    <FiCheck/> <p>Disponível</p>
                                </Available>
                                
                                <ProductDescription>
                                    <img src="https://bra-agroquimica.com.br/wp-content/uploads/2017/09/bra-agroquimica-grassato-20-litros.png" alt=""/>
        
                                    <h5>GRASSATO 480</h5>
                                    <p>Price: R$499.00</p>
                                </ProductDescription>


                            </CardContainer>

                            <CardContainer>
                                
                                <Available>
                                    <FiCheck/> <p>Disponível</p>
                                </Available>
                                
                                <ProductDescription>
                                    <img src="https://bra-agroquimica.com.br/wp-content/uploads/2017/09/bra-agroquimica-grassato-20-litros.png" alt=""/>
        
                                    <h5>GRASSATO 480</h5>
                                    <p>Price: R$499.00</p>
                                </ProductDescription>


                            </CardContainer>

                            <CardContainer>
                                
                                <Available>
                                    <FiCheck/> <p>Disponível</p>
                                </Available>
                                
                                <ProductDescription>
                                    <img src="https://bra-agroquimica.com.br/wp-content/uploads/2017/09/bra-agroquimica-grassato-20-litros.png" alt=""/>
        
                                    <h5>GRASSATO 480</h5>
                                    <p>Price: R$499.00</p>
                                </ProductDescription>


                            </CardContainer>






                            <CardContainer>
                                
                                <Available>
                                    <FiCheck/> <p>Disponível</p>
                                </Available>
                                
                                <ProductDescription>
                                    <img src="https://bra-agroquimica.com.br/wp-content/uploads/2017/09/bra-agroquimica-grassato-20-litros.png" alt=""/>
        
                                    <h5>GRASSATO 480</h5>
                                    <p>Price: R$499.00</p>
                                </ProductDescription>


                            </CardContainer>

                            <CardContainer>
                                
                                <Available>
                                    <FiCheck/> <p>Disponível</p>
                                </Available>
                                
                                <ProductDescription>
                                    <img src="https://bra-agroquimica.com.br/wp-content/uploads/2017/09/bra-agroquimica-grassato-20-litros.png" alt=""/>
        
                                    <h5>GRASSATO 480</h5>
                                    <p>Price: R$499.00</p>
                                </ProductDescription>


                            </CardContainer>

                            <CardContainer>
                                
                                <NotAvailable>
                                    <FiX/> <p>Não disponível</p>
                                </NotAvailable>
                                
                                <ProductDescription>
                                    <img src="https://bra-agroquimica.com.br/wp-content/uploads/2017/09/bra-agroquimica-grassato-20-litros.png" alt=""/>
        
                                    <h5>GRASSATO 480</h5>
                                    <p>Price: R$499.00</p>
                                </ProductDescription>


                            </CardContainer>
                            
                        </SectionCards>
                    </Container>
                </SectionNewProducts>




            </Body>

        </>
    )
}

export default Home;