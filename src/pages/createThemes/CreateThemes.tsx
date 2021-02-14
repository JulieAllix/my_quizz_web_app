import * as React from 'react';
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

import {TextInput} from '../../components/TextInput'
import {ButtonCustom} from "../../components/ButtonCustom";
import {TextCustom} from "../../components/TextCustom";

import {State} from "../../utils/redux/store";
import {createTheme} from "../../utils/firebaseConfig";
import './CreateThemes.scss';

interface Props {
}

export const CreateThemes: React.FC<Props> = () => {
    const history = useHistory();
    const user = useSelector((state: State) => state.user);
    const [themeName, setThemeName] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleCreate = () => {
        setErrorMessage('');
        if(themeName === '') {
            setErrorMessage('Please enter a theme name')
        } else {
            createTheme(themeName, user.uid)
        }
    };

    return (
        <div className={"component_CreateThemes"}>
            <div className={"component_CreateThemes__inputWrapper"}>
                <TextInput
                    label={'Theme name'}
                    placeholder={'Enter a theme name'}
                    value={themeName}
                    onChange={(event) => setThemeName(event.target.value)}
                />
            </div>
            <div className={"component_CreateThemes__errorMessageWrapper"}>
                <TextCustom type={'error'} color={'secondary'}>{errorMessage}</TextCustom>
            </div>
            <div className={"component_CreateThemes__buttonsWrapper"}>
                <div className={"component_CreateThemes__button"}>
                    <ButtonCustom color={'coral'} onClick={() => {history.push('/edit-themes')}}>Cancel</ButtonCustom>
                </div>
                <div className={"component_CreateThemes__button"}>
                    <ButtonCustom color={'blue'} onClick={handleCreate}>Create</ButtonCustom>
                </div>
            </div>
        </div>
    )
}