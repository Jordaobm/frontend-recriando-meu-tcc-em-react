import React, { useCallback, useState } from 'react';
import { FiArrowDown, FiShoppingBag, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, ContainerIcons, ContainerLinks, Cart, NumberOfProductsTheCart, NotNumberOfProductsTheCart} from './styles';

interface Products{
    id:string;
    quantity:number;
}


const Header: React.FC = () => {

    const [products, setProducts] = useState<Products[]>([]);

    const handleAddToProductToCart = useCallback((id:string, quantity:number)=>{
        const product = {
            id,
            quantity
        }
        
        setProducts([...products, product]);
        

    },[products])

    return (
        <Container>
            <Content>
                <Link to='/'>Jadri</Link>

                <ContainerLinks>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Produtos  </Link>
                    <Link to='/'>Sobre</Link>
                    <Link to='/'>Contato</Link>

                </ContainerLinks>
                <ContainerIcons>
                    <Cart>
                        <Link to='/cart'><FiShoppingCart size={25} /></Link>
                        {products.length? <NumberOfProductsTheCart>
                            <p>{products.length}</p>
                        </NumberOfProductsTheCart> : <NotNumberOfProductsTheCart/>}
                    </Cart>
                    <Link to='/user'><FiUser size={25} /></Link>
                </ContainerIcons>

            </Content>
            {/* <button onClick={()=>handleAddToProductToCart('id_do_produto', 5)} type='button'>add produto</button> */}


        </Container>

    )

}

export default Header
