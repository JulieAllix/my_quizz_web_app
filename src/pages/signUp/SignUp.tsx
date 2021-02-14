import * as React from 'react';
import {useState} from "react";
//import {useHistory} from "react-router-dom";

import {TextInput} from '../../components/TextInput';
import {ButtonCustom} from '../../components/ButtonCustom';
import {TextCustom} from "../../components/TextCustom";

import {
    auth,
    registerWithEmailAndPassword
} from "../../utils/firebaseConfig";
import './SignUp.scss';

interface Props {
}

export const SignUp: React.FC<Props> = () => {
    //const history = useHistory();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleClick = () => {
        if (email === '') {
            setErrorMessage('Please enter your e-mail')
        } else if (password === '') {
            setErrorMessage('Please enter your password')
        } else if (confirmPassword === '') {
            setErrorMessage('Please confirm your password')
        } else if (password !== confirmPassword) {
            setErrorMessage('Your passwords are not identical')
        } else {
            console.log('sign up !');
            registerWithEmailAndPassword(email, password).then(res => {
                    console.log("createUserWithEmailAndPAssword", res)
                }
            ).catch(error => {
                console.log("error creat", error)
            })
    }}

    return (
        <div className={"component_SignUp"}>
            <div className={"component_SignUp__inputsWrapper"}>
                <TextInput
                    label={'E-mail'}
                    value={email}
                    placeholder={'Enter your e-mail address'}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextInput
                    label={'Password'}
                    value={password}
                    placeholder={'Enter your password'}
                    onChange={(event) => setPassword(event.target.value)}
                    isPassword={true}
                />
                <TextInput
                    label={'Confirm password'}
                    value={confirmPassword}
                    placeholder={'Enter your password'}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    isPassword={true}
                />
            </div>
            <div className={"component_SignUp__errorMessageWrapper"}>
                <TextCustom type={'error'} color={'secondary'}>{errorMessage}</TextCustom>
            </div>
            <div className={"component_SignUp__buttonWrapper"}>
                <ButtonCustom onClick={handleClick} color={'blue'}>Register</ButtonCustom>
            </div>
        </div>
    )
}