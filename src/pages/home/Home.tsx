import * as React from 'react';

import './Home.scss';

interface Props {
}

export const Home: React.FC<Props> = () => {

    return (
        <div className={"component_Home"}>
            <div className={"component_Home__title"}>
                <span className={"component_Home__title__firstWord"}>
                    Easy
                </span>
                <span className={"component_Home__title__secondWord"}>
                    Quizzy
                </span>
            </div>
        </div>
    )
}