import * as React from 'react';

import './ButtonCustom.scss';

interface Props {
    onClick: () => void,
    color: 'blue' | 'coral'
}

export const ButtonCustom: React.FC<Props> = (props) => {

    return (
        <div className={`component_ButtonCustom component_ButtonCustom__${props.color}`} onClick={props.onClick}>
            <span className={"component_ButtonCustom__text"}>
                {props.children}
            </span>
        </div>
    )
}