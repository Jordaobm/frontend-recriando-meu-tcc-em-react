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

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null)



  const handleSubmit = useCallback(async (data: object) => {
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


    } catch (error) {
      const errors = getValidationErrors(error)

      formRef.current?.setErrors(errors);
    }
  }, [])



  return (
    <Container>

      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit} >
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name='name' placeholder="Nome" />

          <Input icon={FiMail} name='email' placeholder="E-mail" />

          <Input icon={FiLock} name='password' type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>


        </Form>

        <a href="signup">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;