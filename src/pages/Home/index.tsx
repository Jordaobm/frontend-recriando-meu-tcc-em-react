import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Body, Button, Container, TextApresentation, CenterText, SubtitleApresentation, SectionNewProducts, CardContainer, SectionCards, Available, NotAvailable, ProductDescription } from './styles';
import parallaxImage from '../../assets/parallax-image-home.jpg';
import { Parallax } from 'react-parallax';
import { FiCheck, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';


interface Category {
    id: string;
    name: string;
}

interface Products {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image_url: string;
    created_at: Date;
    updated_at: Date;
    category_id: string;
    measure: string;
    category: Category;
}


const Home: React.FC = () => {

    const [listProducts, setListProducts] = useState<Products[]>([])

    // const getListProductsAPI = useCallback(async () => {
    //     const response = await api.get('product');

    //     const products = response.data;



    //     setData([...data, products]);
    //     console.log(products);
    // }, []);

    useEffect(() => {

        api.get<Products[]>('product').then(
            response => {
                const products = response.data
                setListProducts(products);
            }
        )

    }, [])

    console.log(listProducts);



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

                            {listProducts.map(product => (
                                <CardContainer available={product.quantity > 0 ? true : false}>

                                    {product.quantity > 0 ? <Available>
                                        <FiCheck /> <p>Disponível</p>
                                    </Available> : <NotAvailable>
                                            <FiX /> <p>Não disponível</p>
                                        </NotAvailable>}

                                    <ProductDescription>
                                        <img src={product.image_url} alt={product.name} />

                                        <h5>{product.name}</h5>
                                        <p>Price: R${product.price}</p>

                                        <Button available={product.quantity > 0 ? true : false}>Saiba mais</Button>

                                    </ProductDescription>
                                    

                                </CardContainer>
                            ))}



                        </SectionCards>
                    </Container>
                </SectionNewProducts>




            </Body>

        </>
    )
}

export default Home;