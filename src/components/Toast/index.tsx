import React from 'react';
import { Container, ToastContent } from './styles';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';


const Toast: React.FC = () => {


    return (
        <Container>
            <ToastContent type="info" hasDescription>

                <FiAlertCircle size={20} />
                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>Não foi possível fazer login na aplicação</p>
                </div>
                <button type='button'><FiXCircle size={18} /></button>


            </ToastContent>

            <ToastContent type="success"hasDescription={false}> 

                <FiAlertCircle size={20} />
                <div>
                    <strong>Sucesso</strong>
                </div>
                <button type='button'><FiXCircle size={18} /></button>


            </ToastContent>

            <ToastContent type="error" hasDescription={false}>

                <FiAlertCircle size={20} />
                <div>
                    <strong>Aconteceu um erro</strong>
                </div>
                <button type='button'><FiXCircle size={18} /></button>


            </ToastContent>
        </Container>
    )
}

export default Toast;