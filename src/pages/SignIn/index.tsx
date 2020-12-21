import React, { useCallback, useRef, useContext } from 'react';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/AuthContext';
import * as Yup from 'yup';
import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';


interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
      })

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({
        email: data.email,
        password: data.password
      })


    } catch (error) {
      if (error instanceof (Yup.ValidationError)) {
        const errors = getValidationErrors(error)

        formRef.current?.setErrors(errors);
      }

      // disparar um toast

    }
  }, [signIn])






  return (
    <Container>

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit} >
          <h1>Faça seu Login</h1>

          <Input icon={FiMail} name='email' placeholder="E-mail" />

          <Input icon={FiLock} name='password' type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>


        </Form>

        <a href="signup">
          <FiArrowLeft />
          Criar uma conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;