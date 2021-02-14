import * as React from 'react';
import {useState} from "react";
//import {useHistory} from "react-router-dom";

import {TextInput} from '../../components/TextInput';
import {ButtonCustom} from '../../components/ButtonCustom';

import './SignIn.scss';


interface Props {
}

export const SignIn: React.FC<Props> = () => {
    //const history = useHistory();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

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
            <div className={"component_SignIn__buttonWrapper"}>
            <ButtonCustom onClick={() => {}} color={'blue'}>Connect</ButtonCustom>
            </div>
        </div>
    )
}