import * as React from 'react';

import {TextCustom} from './TextCustom';

import './ThemeCard.scss';

interface Props {
    text: string,
    color: 'corail' | 'white',
    onClick: () => void
}

export const ThemeCard: React.FC<Props> = (props) => {

    return (
        <div
            className={`component_ThemeCard component_ThemeCard__${props.color}`}
            onClick={props.onClick}
        >
            <TextCustom type={'card_text'} color={props.color === 'corail' ? 'white' : 'secondary'}>{props.text}</TextCustom>
        </div>
    )
}