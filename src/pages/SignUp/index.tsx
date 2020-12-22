import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Form } from '@unform/web';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { AnimationContainer } from './styles';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';


interface SignupFormData {
  name:string;
  email:string;
  password:string;
  authorization:string;
}

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const {addToast} = useToast();

  const history = useHistory();



  const handleSubmit = useCallback(async (data: SignupFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
      })

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('users', {
        name:data.name,
        email:data.email,
        password:data.password,
        authorization:'client'
      });

      addToast({
        title:'Cadastro realizado',
        type:'success',
        description:'Você já pode fazer seu logon!'
      })

      history.push('/')


      

    } catch (error) {
      if (error instanceof (Yup.ValidationError)) {
        const errors = getValidationErrors(error)

        formRef.current?.setErrors(errors);


        return;
      }

      addToast({
        title: 'Erro no cadastro',
        type: 'error',
        description: 'Ocorreu um erro ao fazer o cadastro, tente novamente'
      });
    }
  }, [addToast, history])



  return (
    <Container>

      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit} >
            <h1>Faça seu cadastro</h1>

            <Input icon={FiUser} name='name' placeholder="Nome" />

            <Input icon={FiMail} name='email' placeholder="E-mail" />

            <Input icon={FiLock} name='password' type="password" placeholder="Senha" />

            <Button type="submit">Cadastrar</Button>


          </Form>

          <Link to='/'>
            <FiArrowLeft />
          Voltar para logon
        </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;