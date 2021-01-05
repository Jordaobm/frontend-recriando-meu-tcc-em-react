import { request } from 'https';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import ICategoryDTO from '../../dtos/ICategoryDTO';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { Body, Container, PresentationSession, PresentationText, VectorImageContent } from './styles';
import ImagePresentation from '../../assets/presentationImage.jpg'

interface CategoryParams {
    category: string;
}



const Category: React.FC = () => {
    // const {params} = useRouteMatch<CategoryParams>()

    // const categoryId = params.category

    // const {addToast} = useToast();

    // const [category, setCategory] = useState<ICategoryDTO>()



    // useEffect(()=>{
    //     api.get(`category/${categoryId}`).then(response=>{
    //         setCategory(response.data)
    //     }).catch(() => {
    //         addToast({
    //             title: 'Erro',
    //             type: 'error',
    //             description: 'Não foi possível carregar a categoria selecionada, tente novamente'
    //         });
    //     })
    // },[])


    return (
        <>
            <Header />
            <Body>

                <Container>
                    <PresentationSession>
                        
                        <PresentationText>
                            <h3>Herbicidas</h3>
                            <p>Bem vindo à categoria de Herbicidas</p>
                        </PresentationText>
                        <VectorImageContent>
                            <img src={ImagePresentation} alt="" />
                        </VectorImageContent>

                    </PresentationSession>
                </Container>

            </Body>
        </>
    )

}

export default Category;