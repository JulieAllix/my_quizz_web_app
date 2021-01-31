import * as React from 'react';

import './Header.scss';

interface Props {
    title: string,
}

export const Header: React.FC<Props> = (props) => {

    return (
        <div className={"component_Header"}>
            <h1 className={"component_Header__title"}>{props.title}</h1>
        </div>
    )
}