import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import * as Yup from 'yup';
import { Container, Content, Background, AnimationContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link, useHistory } from 'react-router-dom';


interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

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

      await signIn({
        email: data.email,
        password: data.password
      })

      history.push('/dashboard')


    } catch (error) {
      if (error instanceof (Yup.ValidationError)) {
        const errors = getValidationErrors(error)

        formRef.current?.setErrors(errors);


        return;
      }

      addToast({
        title: 'Ocorreu um erro',
        type: 'error',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais'
      });

    }
  }, [signIn, addToast])






  return (
    <Container>

      <Content>

        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit} >
            <h1>Faça seu Login</h1>

            <Input icon={FiMail} name='email' placeholder="E-mail" />

            <Input icon={FiLock} name='password' type="password" placeholder="Senha" />

            <Button type="submit">Entrar</Button>


          </Form>

          <Link to='/signup'>
            <FiArrowLeft />
          Criar uma conta
        </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;