import * as React from 'react';
import {useState} from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom";

import {TextInput} from '../../components/TextInput';
import {ButtonCustom} from '../../components/ButtonCustom';
import {TextCustom} from "../../components/TextCustom";

import {setUser} from '../../utils/redux/reducers';
import {loginWithEmailAndPassword} from "../../utils/firebaseConfig";
import './SignIn.scss';


interface Props {
}

export const SignIn: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleClick = () => {
        setErrorMessage('')
        if (email === '') {
            setErrorMessage('Please enter your e-mail')
        } else if (password === '') {
            setErrorMessage('Please enter your password')
        } else {
            console.log('sign in !');
            loginWithEmailAndPassword(email, password).then(res => {
                    console.log("createUserWithEmailAndPAssword", res);
                    if(res.user) {
                        dispatch(setUser(res.user))
                        history.push('/quizz')
                    }
                    //history.push('/sign-in')
                }
            ).catch(error => {
                console.log("error creat", error)
            })
        }
    }
    return (
        <div className={"component_SignIn"}>
            <div className={"component_SignIn__inputsWrapper"}>
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
            </div>
            <div className={"component_SignUp__errorMessageWrapper"}>
                <TextCustom type={'error'} color={'secondary'}>{errorMessage}</TextCustom>
            </div>
            <div className={"component_SignIn__buttonWrapper"}>
            <ButtonCustom onClick={handleClick} color={'blue'}>Connect</ButtonCustom>
            </div>
        </div>
    )
}