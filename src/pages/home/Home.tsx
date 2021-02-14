import * as React from 'react';
import {useHistory} from "react-router-dom";

import {ButtonCustom} from '../../components/ButtonCustom';

import logo from '../../assets/image/graduation.png';
import './Home.scss';

interface Props {
}

export const Home: React.FC<Props> = () => {
    const history = useHistory();

    return (
        <div className={"component_Home"}>
            <div className={"component_Home__logo"}>
                <img src={logo} alt={'logo de l\'app'}/>
            </div>
            <div className={"component_Home__title"}>
                <span className={"component_Home__title__firstWord"}>
                    Easy
                </span>
                <span className={"component_Home__title__secondWord"}>
                    Quizzy
                </span>
            </div>
            <div className={"component_Home__buttonWrapper"}>
                <div className={"component_Home__button"}>
                    <ButtonCustom color={'blue'} onClick={() => {
                        history.push('/sign-in')
                    }}>Sign In</ButtonCustom>
                </div>
                <div className={"component_Home__button"}>
                    <ButtonCustom color={'coral'} onClick={() => {
                        history.push('/sign-up')
                    }}>Sign Up</ButtonCustom>
                </div>
            </div>
        </div>
    )
}