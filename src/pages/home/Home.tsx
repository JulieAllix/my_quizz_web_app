import * as React from 'react';

import {ButtonCustom} from '../../components/ButtonCustom';

import logo from '../../assets/image/graduation.png';
import './Home.scss';

interface Props {
}

export const Home: React.FC<Props> = () => {

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
            <div className={"component_Home__button"}>
                <ButtonCustom text={'Start'}/>
            </div>
        </div>
    )
}