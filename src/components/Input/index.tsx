import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { Container, Error } from './styles';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;

}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

    const [isFocused, setIsFocused] = useState(false);
    const [isField, setIsField] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputFocus = useCallback(()=>{
        setIsFocused(true)
    }, [])


    const handleInputBlur = useCallback(() => {
        setIsFocused(false)

        setIsField(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField]);


    return (
        <Container isErrored={!!error} isField={isField} isFocused={isFocused}>
            {Icon && <Icon size={20} />}
            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                ref={inputRef} {...rest}
            />
            {error && 
            <Error title={error}>
                <FiAlertCircle size={20} style={{color:'red'}}/>
            </Error>}
        </Container>
    )
}

export default Input