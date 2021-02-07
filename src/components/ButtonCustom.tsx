import * as React from 'react';

import './ButtonCustom.scss';

interface Props {
    onClick: () => void
}

export const ButtonCustom: React.FC<Props> = (props) => {

    return (
        <div className={"component_ButtonCustom"} onClick={props.onClick}>
            <span className={"component_ButtonCustom__text"}>
                {props.children}
            </span>
        </div>
    )
}