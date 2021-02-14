import * as React from 'react';
import {ChangeEventHandler} from "react";

import {TextCustom} from './TextCustom';

import './TextInput.scss';

interface Props {
    label: string,
    value: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>;
    isPassword?: boolean
}

export const TextInput: React.FC<Props> = (props) => {

    return (
        <div className={`component_TextInput`}>

            <div className="component_TextInput__label">
                <TextCustom type={'label'} color={'primary'}>{props.label}</TextCustom>
            </div>
            <div className={`component_TextInput__input`}>
                <input
                    type={props.isPassword ? 'password' : 'text'}
                    value={props.value}
                    className={'component_TextInput__inputElement'}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )
}