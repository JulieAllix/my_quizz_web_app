import * as React from 'react';

import './EditThemes.scss';

interface Props {
    text: string,
    onClick: () => void
}

export const EditThemes: React.FC<Props> = (props) => {

    return (
        <div className={"component_EditThemes"} onClick={props.onClick}>

        </div>
    )
}