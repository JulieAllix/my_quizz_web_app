import * as React from 'react';
import {useHistory} from "react-router-dom";

import {TextCustom} from '../../components/TextCustom';
import {ThemeCard} from '../../components/ThemeCard';
import {ButtonCustom} from '../../components/ButtonCustom';

import './EditThemes.scss';

interface Props {
    text: string,
    onClick: () => void
}

export const EditThemes: React.FC<Props> = (props) => {
    const history = useHistory();

    return (
        <div className={"component_EditThemes"} onClick={props.onClick}>
            <TextCustom type={'instructions'} color={'primary'}>Click on a theme to edit it or create a new one.</TextCustom>
            <div className={"component_EditThemes__themeCardsWrapper"}>
                <ThemeCard
                    text={'Theme name'}
                    color={'corail'}
                    onClick={() => {}}
                />
                <ThemeCard
                    text={'Theme name'}
                    color={'white'}
                    onClick={() => {}}
                />
                <ThemeCard
                    text={'Theme name'}
                    color={'white'}
                    onClick={() => {}}
                />
                <ThemeCard
                    text={'Theme name'}
                    color={'corail'}
                    onClick={() => {}}
                />
            </div>
            <ButtonCustom  color={'blue'} onClick={() => history.push('/create-theme')}>Create a new theme</ButtonCustom>
        </div>
    )
}