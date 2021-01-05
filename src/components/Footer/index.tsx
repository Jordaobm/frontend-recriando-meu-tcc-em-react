import React from 'react';
import { Body, ColorIcon, Container, LocaleContent, SocialIcons } from './styles';
import { FiFacebook, FiMail, FiTwitter } from 'react-icons/fi';


const Footer: React.FC = () => {

    return (
        <Body>
            <Container>
                <p>Jadri</p>
                <div>
                    <h5>Localização</h5>
                    <LocaleContent>                    
                        <p>Rua Maranhão, nº 866, Centro, Três Barras do Paraná - PR, CEP: 85485-000</p>
                        <p>Telefone: (45) 99137-4575</p>
                    </LocaleContent>
                </div>
                <div>
                    <h5>Também pelas redes sociais</h5>
                    <SocialIcons>
                        <a href="https://www.facebook.com/"><ColorIcon colorIcon='#385898'><FiFacebook size={30}/></ColorIcon></a>
                        <a href="mailto: jbmassariol@gmail.com"><ColorIcon colorIcon='#d93025'><FiMail size={30}/></ColorIcon></a>
                        <a href="https://twitter.com/home"><ColorIcon colorIcon='rgba(29,161,242,1.00)'><FiTwitter size={30}/></ColorIcon></a>
                    </SocialIcons>
                </div>
            </Container>
        </Body>
    )

}

export default Footer;