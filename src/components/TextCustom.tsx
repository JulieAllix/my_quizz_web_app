import * as React from 'react';

import './TextCustom.scss';

interface Props {
    type: 'card_text' | 'instructions' | 'label' | 'error',
    color: 'primary' | 'secondary' | 'tertiary' | 'white'
}

export const TextCustom: React.FC<Props> = (props) => {

    return (
        <div className={`component_TextCustom component_TextCustom__${props.type} component_TextCustom__${props.color}`}>
            {props.children}
        </div>
    )
}