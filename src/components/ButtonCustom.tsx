import * as React from 'react';

import './ButtonCustom.scss';

interface Props {
    text: string,
}

export const ButtonCustom: React.FC<Props> = (props) => {

    return (
        <div className={"component_ButtonCustom"}>
            <span className={"component_ButtonCustom__text"}>
                {props.text}
            </span>
        </div>
    )
}